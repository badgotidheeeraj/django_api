from .models import student
from .serializers import StudentSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view
# from rest_framework

@api_view(['POST',"GET","DELETE","PATCH","PUT"])
def studentviews(request,id=None):
    if id is None:
        if request.method == "GET":
            json_data = student.objects.all()
            seri = StudentSerializer(json_data, many=True)
            return Response(seri.data)
    else:
        if request.method=="GET":
            json_data=student.objects.get(id=id)
            seri=StudentSerializer(json_data)
            return Response(seri.data)
   
    if request.method=="DELETE":
        json_data=student.objects.get(id=id)
        json_data.delete()
        return Response({"msg":"delete ok"})
        
    if request.method=="PATCH":
        json_data=student.objects.get(id=id)
        series = StudentSerializer(json_data,data=request.data ,partial=True)
        if series.is_valid():
            series.save()
            return Response({"msg":"Update  ok"})



   
    if request.method == "POST":
        series = StudentSerializer(data=request.data)  # Use request.data
        if series.is_valid():
            series.save()
            res = {'msg': 'success'}
            return Response(res)
        return Response(series.errors, status=400)
    return Response({'msg': 'Invalid method'}, status=405)
        # return Response
    
    
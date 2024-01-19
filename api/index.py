import requests
import json

URL="http://127.0.0.1:8000/studentcreate/"

# r=requests.get(url=URL)

# print(r.json())


data={
    "name":"ram",
    "roll":12,
    "city":"rampur3"
}
json_data=json.dumps(data)

r=requests.post(url=URL,data=json_data)

datak=r.json()
print(datak)
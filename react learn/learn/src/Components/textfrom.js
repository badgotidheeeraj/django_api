import React, { useEffect, useState } from "react";
import axios from "axios";

const TextFrom = (props) => {
  const [post, setPost] = useState({
    id: "",
    name: "",
    roll: "",
    city: "",
  
  });

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/stuinfo/")
      .then((response) => setPost(response.data))
      .catch((error) => console.log(error));
  }, []);
// 
 const deletion = (id) => {
  // console.log(post.id);
   axios
     .delete(`http://127.0.0.1:5000/stuinfo/${id}`)
     .then((response) => {
       console.log("Delete  successful:", response.data);
       setPost(response.data);
     })
     .catch((error) => {
       console.error("Error updating data:", error);
     });
 };

// 
  return (
    <>
      <h4 className="text-align-center">Student Data</h4>
      <br />
      {Array.isArray(post) && post.length > 1 ? (
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Roll</th>
                <th>City</th>
                <th>status</th>
              </tr>
            </thead>
            <tbody>
              {post.map((ele, index) => (
                <tr key={index}>
                  <td>{ele.id}</td>
                  <td>{ele.name}</td>
                  <td>{ele.roll}</td>
                  <td>{ele.city}</td>
                  <td>
                    <button
                      className="btn btn-danger m-2"
                      onClick={() => deletion(ele.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No data available</p>
      )}
    </>
  );
};

export default TextFrom;

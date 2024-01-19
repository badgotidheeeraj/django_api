import React, { useEffect, useState } from "react";
import axios from "axios";

const Jsontext = () => {
  const [poop, setPoop] = useState({
    id: "",
    name: "",
    roll: "",
    city: "",
  });

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/stuinfo/")
      .then((response) => setPoop(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPoop((prevPoop) => ({
      ...prevPoop,
      [name]: value,
    }));
  };
  const handleUpdate = () => {
    axios
      .patch(`http://127.0.0.1:5000/stuinfo/${poop.id}`, poop)
      .then((response) => {
        console.log("Update successful:", response.data);
        setPoop(response.data);
      })
      .catch((error) => {
        console.error("Error updating data:", error);
      });
  };
  const deletion = () => {
    axios
      .delete(`http://127.0.0.1:5000/stuinfo/${poop.id}`)
      .then((response) => {
        console.log("Delete  successful:", response.data);
        setPoop(response.data);
      })
      .catch((error) => {
        console.error("Error updating data:", error);
      });
  };



  const savedata = () => {
    axios
      .post(`http://127.0.0.1:5000/stuinfo/`, poop)
      .then((response) => {
        console.log("Save  successful:", response.data);
        setPoop(response.data);
      })
      .catch((error) => {
        console.error("Error updating data:", error);
      });
  };
  return (
    <>
      <div className="container-flex">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Roll</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input
                  type="text"
                  name="id"
                  onChange={handleInputChange}
                  value={poop.id}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="name"
                  onChange={handleInputChange}
                  value={poop.name}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="roll"
                  onChange={handleInputChange}
                  value={poop.roll}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="city"
                  onChange={handleInputChange}
                  value={poop.city}
                />
              </td>
              <td>
                <button className="btn btn-primary m-2" onClick={handleUpdate}>
                  Update
                </button>
                <button className="btn btn-primary m-2" onClick={savedata}>
                  Save
                </button>
                <button className="btn btn-danger m-2" onClick={deletion}>
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Jsontext;

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function StudentDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const API_URL = "https://6ab61fc1c4c7bb67b9187c0d.mockapi.io/students";
  const [student, setStudent] = useState({});

  useEffect(() => {
    fetch(API_URL + "/" + id, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        setStudent(res);
      });
  }, [id]);

  const handleDelete = () => {
    fetch(API_URL + "/" + id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        alert("Delete Successfully.");
        navigate("/");
      });
  };

  return (
    <>
      <div className="container m-5">
        <div className="row m-5 fw-bold h2">
          <div className="col">Student Details</div>
        </div>

        <div className="row">
          <div className="col-4 me-5">
            <img
              src={student.avatar}
              alt=""
              style={{
                width: "450px",
                height: "450px",
                borderRadius: "50%",
              }}
            />
          </div>

          <div className="col m-5 fs-5">
            Id : {student.id}
            <br />
            <br />
            Name : {student.name}
            <br />
            <br />
            Email : {student.email}
            <br />
            <br />
            City : {student.city}
            <br />
            <br />
            State : {student.state}
            <br />
            <br />
            <div className="row">
              <div className="col">
                <button
                  className="btn btn-danger me-3"
                  onClick={() => {
                    handleDelete();
                  }}
                >
                  Delete
                </button>

                <button
                  className="btn btn-info me-3"
                  onClick={() => navigate("/edit/" + id)}
                >
                  Edit
                </button>

                <button
                  className="btn btn-secondary me-3"
                  onClick={() => navigate("/")}
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentDetails;

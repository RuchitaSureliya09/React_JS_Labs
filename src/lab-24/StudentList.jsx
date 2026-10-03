import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function StudentList() {
  const [studentList, setStudentList] = useState([]);
  const API_URL = "https://6ab61fc1c4c7bb67b9187c0d.mockapi.io/students";
  const navigate = useNavigate();

  useEffect(() => {
    fetch(API_URL, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        setStudentList(res);
      });
  });

  return (
    <>
      <div className="row m-5">
        <div className="col">
          <div className="card shadow border-0">
            <div className="card-header bg-dark text-white">
              <h5 className="mb-0 p-3 fs-3">
                Student List
                <button
                  className="btn btn-primary fw-bold float-end"
                  onClick={() => navigate("/add")}
                >
                  Add Student
                </button>
              </h5>
            </div>

            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table table-hover table-bordered text-center align-middle mb-0">
                  <thead className="table-primary">
                    <tr>
                      <th>Sr no.</th>
                      <th>Id</th>
                      <th>Full Name</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {studentList.map((stu, index) => {
                      return (
                        <tr key={index}>
                          <td className="fw-bold">{index + 1}</td>

                          <td>{stu.id}</td>

                          <td>{stu.name}</td>

                          <td>
                            <button
                              className="btn btn-warning btn-sm me-2"
                              onClick={() => navigate("/detail/" + stu.id)}
                            >
                              Show Details
                            </button>
                          </td>
                        </tr>
                      );
                    })}

                    {studentList.length === 0 && (
                      <tr>
                        <td colSpan="7" className="text-muted py-4">
                          No student records found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentList;

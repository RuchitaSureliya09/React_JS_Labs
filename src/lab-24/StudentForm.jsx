import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function StudentForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const API_URL = "https://6ab61fc1c4c7bb67b9187c0d.mockapi.io/students";
  const [student, setStudent] = useState({});

  useEffect(() => {
    fetch(API_URL + "/" + id)
      .then((res) => res.json())
      .then((res) => setStudent(res));
  }, []);

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="card shadow border-0">
              <div className="card-header bg-primary text-white text-center">
                <h5 className="mb-0">
                  { id ? "Edit Student Details" : "Add Student Details"}</h5>
              </div>

              <div className="card-body p-4">
                <form>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Name :</label>

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter name"
                      value={student.name}
                      onChange={(e) => {
                        setStudent({
                          ...student,
                          name: e.target.value,
                        });
                      }}
                    />
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-semibold">Image :</label>

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Image-Path"
                      value={student.avatar}
                      onChange={(e) => {
                        setStudent({
                          ...student,
                          avatar: e.target.value,
                        });
                      }}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">Email :</label>

                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter Email"
                      value={student.email}
                      onChange={(e) => {
                        setStudent({
                          ...student,
                          email: e.target.value,
                        });
                      }}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">City :</label>

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter City"
                      value={student.city}
                      onChange={(e) => {
                        setStudent({
                          ...student,
                          city: e.target.value,
                        });
                      }}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">State :</label>

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter State"
                      value={student.state}
                      onChange={(e) => {
                        setStudent({
                          ...student,
                          state: e.target.value,
                        });
                      }}
                    />
                  </div>

                  <div className="d-flex gap-2">
                    <button
                      className="btn btn-primary flex-grow-1"
                      onClick={() => {
                        if (id) {
                          fetch(API_URL + "/" + id, {
                            method: "PUT",
                            headers: { "content-type": "application/json" },
                            body: JSON.stringify(student),
                          }).then(navigate("/"));
                        } else {
                          fetch(API_URL, {
                            method: "POST",
                            headers: { "content-type": "application/json" },
                            body: JSON.stringify(student),
                          }).then(navigate("/"));
                        }
                      }}
                    >
                      {id ? "Edit" : "Add"}
                    </button>

                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => navigate("/")}
                    >
                      CANCEL
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentForm;

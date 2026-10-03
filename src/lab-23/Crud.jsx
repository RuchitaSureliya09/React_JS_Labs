import React, { useState } from "react";

function Crud() {
  const [studentList, setStudentList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const [student, setStudent] = useState({
    fname: "",
    lname: "",
    age: "",
    sem: "",
    spi: "",
  });

  const handleAdd = (e) => {
    e.preventDefault();

    if (!student.fname || !student.lname || !student.spi) {
      alert("Please fill all required data !");
      return;
    }

    if (editIndex !== null) {
      const newList = [...studentList];

      newList[editIndex] = { ...student };

      setStudentList(newList);
      setEditIndex(null);
    } else {
      setStudentList([...studentList, { ...student }]);
    }

    setStudent({
      fname: "",
      lname: "",
      age: "",
      sem: "",
      spi: "",
    });
  };

  const handleDelete = (index) => {
    const newList = [...studentList];
    newList.splice(index, 1);
    setStudentList(newList);
  };

  const handleEdit = (index) => {
    setStudent(studentList[index]);
    setEditIndex(index);
  };

  const handleCancel = () => {
    setStudent({
      fname: "",
      lname: "",
      age: "",
      sem: "",
      spi: "",
    });
    setEditIndex(null);
  };

  return (
    <>
      <div className="container py-5">
        <div className="text-center mb-4">
          <h2 className="fw-bold text-primary">Student CRUD</h2>

          <p className="text-muted">Add, Edit and Manage Student Records</p>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="card shadow border-0">
              <div className="card-header bg-primary text-white text-center">
                <h5 className="mb-0">
                  {editIndex !== null
                    ? "Edit Student Details"
                    : "Student Details"}
                </h5>
              </div>

              <div className="card-body p-4">
                <form onSubmit={handleAdd}>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">
                      First Name :
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter first name"
                      value={student.fname}
                      onChange={(e) => {
                        setStudent({
                          ...student,
                          fname: e.target.value,
                        });
                      }}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">
                      Last Name :
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter last name"
                      value={student.lname}
                      onChange={(e) => {
                        setStudent({
                          ...student,
                          lname: e.target.value,
                        });
                      }}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">Age :</label>

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter age"
                      value={student.age}
                      onChange={(e) => {
                        setStudent({
                          ...student,
                          age: e.target.value,
                        });
                      }}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">Semester :</label>

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter semester"
                      value={student.sem}
                      onChange={(e) => {
                        setStudent({
                          ...student,
                          sem: e.target.value,
                        });
                      }}
                    />
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-semibold">SPI :</label>

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter SPI"
                      value={student.spi}
                      onChange={(e) => {
                        setStudent({
                          ...student,
                          spi: e.target.value,
                        });
                      }}
                    />
                  </div>

                  <div className="d-flex gap-2">
                    <button
                      type="submit"
                      className="btn btn-primary flex-grow-1"
                    >
                      {editIndex !== null ? "UPDATE" : "ADD"}
                    </button>

                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={handleCancel}
                    >
                      CANCEL
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col">
            <div className="card shadow border-0">
              <div className="card-header bg-dark text-white">
                <h5 className="mb-0">Student List</h5>
              </div>

              <div className="card-body p-0">
                <div className="table-responsive">
                  <table className="table table-hover table-bordered text-center align-middle mb-0">
                    <thead className="table-primary">
                      <tr>
                        <th>Roll No.</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        <th>Sem</th>
                        <th>SPI</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {studentList.map((student, index) => {
                        return (
                          <tr key={index}>
                            <td className="fw-bold">{index + 1}</td>

                            <td>{student.fname}</td>

                            <td>{student.lname}</td>

                            <td>{student.age}</td>

                            <td>{student.sem}</td>

                            <td>{student.spi}</td>

                            <td>
                              <button
                                className="btn btn-warning btn-sm me-2"
                                onClick={() => handleEdit(index)}
                              >
                                Edit
                              </button>

                              <button
                                className="btn btn-danger btn-sm"
                                onClick={() => handleDelete(index)}
                              >
                                Delete
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
      </div>
    </>
  );
}

export default Crud;

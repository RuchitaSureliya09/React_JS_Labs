import React from "react";

// 2. Display Faculties stored in array using ReactJS. (B)

function A2() {
  const faculty = [
    {
      name: "Dr. John Smith",
      department: "Computer Science",
      position: "Professor",
      email: "john.smith@university.edu",
      phone: "123-456-7890",
    },
    {
      name: "Dr. Emily Johnson",
      department: "Mathematics",
      position: "Associate Professor",
      email: "emily.johnson@university.edu",
      phone: "234-567-8901",
    },
    {
      name: "Dr. Michael Brown",
      department: "Physics",
      position: "Assistant Professor",
      email: "michael.brown@university.edu",
      phone: "345-678-9012",
    },
    {
      name: "Dr. Sarah Davis",
      department: "Chemistry",
      position: "Lecturer",
      email: "sarah.davis@university.edu",
      phone: "456-789-0123",
    },
    {
      name: "Dr. Robert Wilson",
      department: "Biology",
      position: "Professor",
      email: "robert.wilson@university.edu",
      phone: "567-890-1234",
    },
    {
      name: "Dr. Laura Martinez",
      department: "English",
      position: "Assistant Professor",
      email: "laura.martinez@university.edu",
      phone: "678-901-2345",
    },
    {
      name: "Dr. James Taylor",
      department: "History",
      position: "Professor",
      email: "james.taylor@university.edu",
      phone: "789-012-3456",
    },
    {
      name: "Dr. Jennifer Anderson",
      department: "Philosophy",
      position: "Lecturer",
      email: "jennifer.anderson@university.edu",
      phone: "890-123-4567",
    },
    {
      name: "Dr. William Thomas",
      department: "Economics",
      position: "Associate Professor",
      email: "william.thomas@university.edu",
      phone: "901-234-5678",
    },
    {
      name: "Dr. Mary Jackson",
      department: "Sociology",
      position: "Professor",
      email: "mary.jackson@university.edu",
      phone: "012-345-6789",
    },
  ];
  return (
    <>
      <table className="table mt-5">
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Department</td>
            <td>Position No.</td>
            <td>Email</td>
            <td>Phone</td>
          </tr>
        </thead>
        <tbody>
          {faculty.length > 0
            ? faculty.map((data, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{data.name}</td>
                    <td>{data.department}</td>
                    <td>{data.position}</td>
                    <td>{data.email}</td>
                    <td>{data.phone}</td>
                  </tr>
                );
              })
            : alert("No Faculty!")}
        </tbody>
      </table>
    </>
  );
}

export default A2;

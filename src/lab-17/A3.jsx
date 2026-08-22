import React from "react";

// 3. Display Students stored in array using ReactJS. (B)

function A3() {
  const students = [
    {
      name: "Priyanshi",
      branch: "B.Tech",
      enrollment: 24010101223,
      city: "Dhoraji",
      spi: 9.4,
    },
    {
      name: "Dhruvi",
      branch: "IT",
      enrollment: 24010101208,
      city: "Jetpur",
      spi: 8.6,
    },
    {
      name: "Diya",
      branch: "BBA",
      enrollment: 24010101115,
      city: "Rajkot",
      spi: 9.0,
    },
    {
      name: "Pari",
      branch: "BCA",
      enrollment: 24010101201,
      city: "Dhoraji",
      spi: 8.7,
    },
    {
      name: "Khushi",
      branch: "B.Com",
      enrollment: 24010101185,
      city: "Ahmdabad",
      spi: 8.9,
    },
  ];
  return (
    <>
      <table className="table mt-5">
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Branch</td>
            <td>Enrollment No.</td>
            <td>City</td>
            <td>SPI</td>
          </tr>
        </thead>
        <tbody>
          {students.length > 0
            ? students.map((data, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{data.name}</td>
                    <td>{data.branch}</td>
                    <td>{data.enrollment}</td>
                    <td>{data.city}</td>
                    <td>{data.spi}</td>
                  </tr>
                );
              })
            : alert("No Student!")}
        </tbody>
      </table>
    </>
  );
}

export default A3;

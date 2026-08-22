import React from "react";

// 4. Display Products stored in array using ReactJS (C )

function A4() {
  const products = [
    {
      image: "./images/laptop.jpg",
      name: "Laptop",
      price: 55000,
      brand: "Dell",
      category: "Laptop",
      storage: "512GB SSD",
      ram: "16GB",
      processor: "Intel Core i5",
      instock: "Yes",
      description: "Powerful and lightweight laptop for work and study",
    },

    {
      image: "./images/mobile.jpg",
      name: "Smartphone",
      price: 25000,
      brand: "Samsung",
      category: "Mobile",
      storage: "128GB",
      ram: "8GB",
      display: "6.5 inch",
      instock: "Yes",
      description: "Modern smartphone with a high-resolution display",
    },

    {
      image: "./images/headphone.jpg",
      name: "Headphones",
      price: 3000,
      brand: "Sony",
      category: "Audio",
      connectivity: "Bluetooth",
      battery: "30 Hours",
      type: "Wireless",
      instock: "No",
      description: "Wireless headphones with clear sound quality",
    },

    {
      image: "./images/tablet.jpg",
      name: "Tablet",
      price: 18000,
      brand: "Lenovo",
      category: "Tablet",
      storage: "128GB",
      ram: "6GB",
      display: "10.1 inch",
      instock: "Yes",
      description: "Portable tablet with a large touchscreen display",
    },
  ];

  return (
    <div className="container mt-5">
      <div className="row g-4">
        {products.map((product, index) => (
          <div className="col-md-6 col-lg-3" key={index}>
            <div className="card h-100 shadow" style={{"width": "20rem"}}>
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
                style={{
                  height: "350px",
                  objectFit: "cover",
                }}
              />

              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>

                <p className="card-text">{product.description}</p>

                <h4 className="text-primary">₹{product.price}</h4>

                <p className="mb-1">
                  <strong>Brand:</strong> {product.brand}
                </p>

                <p className="mb-1">
                  <strong>Category:</strong> {product.category}
                </p>

                <p className="mb-1">
                  <strong>RAM:</strong> {product.ram || "N/A"}
                </p>

                <p className="mb-3">
                  <strong>Storage:</strong> {product.storage || "N/A"}
                </p>

                <span
                  className={`badge ${
                    product.instock === "Yes" ? "bg-success" : "bg-danger"
                  }`}
                >
                  {product.instock === "Yes" ? "In Stock" : "Out of Stock"}
                </span>
              </div>

              <div className="card-footer bg-white border-0 pb-3">
                <button className="btn btn-primary w-100">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default A4;
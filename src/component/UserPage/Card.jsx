// src/component/UserPage/Card.jsx

import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../../component/AdminPage/AdminService'; // ✅ correct path if AdminService is inside AdminPage

export default function Card() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts()
      .then((res) => {
        console.log("Fetched products:", res.data); // Debug log
        setProducts(res.data);
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div className="container-fluid py-4">
      <div className="row g-4 justify-content-center">
        {products.map((product) => (
          <div className="col-sm-6 col-md-4 col-lg-3" key={product.id}>
            <div className="card shadow-sm p-2 h-100">
              <img
                src={
                  product.img_url
                    ? `http://localhost:9791/${product.img_url}` 
                    : 'https://via.placeholder.com/150'
                }
                className="card-img-top"
                alt={product.name}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body text-center">
                <h6 className="card-title mb-1">{product.name}</h6>
                <p className="card-text text-muted small">{product.description}</p>
                <p className="mb-2 fw-bold">₹{product.price}</p>
                <button className="btn btn-sm btn-outline-primary">Add to cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}



import React, { useEffect, useState } from 'react';
import { getAllProducts, deleteProductById } from './AdminService';
import { useNavigate } from 'react-router-dom';

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const fetchProducts = () => {
    getAllProducts()
      .then(response => setProducts(response.data))
      .catch(error => console.error("Error fetching products:", error));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      deleteProductById(id)
        .then(() => fetchProducts())
        .catch(err => console.error("Delete failed:", err));
    }
  };

  const handleEdit = (id) => {
    navigate(`/admin/edit-product/${id}`);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Product List</h2>
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Category</th>
            <th>Subcategory</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map(prod => (
            <tr key={prod.id}>
              <td>{prod.id}</td>
              <td>{prod.name}</td>
              <td>{prod.description}</td>
              <td>₹{prod.price}</td>
              <td>{prod.category?.category_name}</td>
              <td>{prod.subCategory?.subcategory_name}</td>
              <td>
                {prod.img_url ? (
                  <img
                    src={`http://localhost:9791/${prod.img_url}`}
                    alt={prod.name}
                    style={{ width: "60px", height: "60px", objectFit: "cover" }}
                  />
                ) : (
                  <span className="text-muted">No Image</span>
                )}
              </td>
              <td>
                <button className="btn btn-sm btn-warning me-2" onClick={() => handleEdit(prod.id)}>
                  Edit
                </button>
                <button className="btn btn-sm btn-danger" onClick={() => handleDelete(prod.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

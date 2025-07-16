import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  getProductById,
  updateProduct,
  getAllCategory,
  getAllSubCategory,
} from './AdminService';

export default function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    subCategory: '',
    img_url: ''
  });

  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    getProductById(id)
      .then((res) => {
        const data = res.data;
        setForm({
          name: data.name,
          description: data.description,
          price: data.price,
          category: data.category.id,
          subCategory: data.subCategory.id,
          img_url: data.img_url
        });
      })
      .catch(err => console.error("Error loading product", err));

    getAllCategory().then((res) => setCategories(res.data));
    getAllSubCategory().then((res) => setSubCategories(res.data));
  }, [id]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm(prev => ({ ...prev, [id]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setImageFile(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("description", form.description);
    formData.append("price", form.price);
    formData.append("category", form.category);
    formData.append("subCategory", form.subCategory);
    if (imageFile) {
      formData.append("imageFile", imageFile);
    }

    updateProduct(id, formData)
      .then(() => {
        alert("Product updated successfully!");
        navigate("/admin/product-list");
      })
      .catch((err) => {
        console.error("Update failed:", err);
        alert("Failed to update product.");
      });
  };

  return (
    <div className="container mt-4">
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit} className="p-4 bg-light border rounded">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Product Name</label>
          <input type="text" id="name" className="form-control" value={form.name} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea id="description" className="form-control" value={form.description} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label htmlFor="price" className="form-label">Price</label>
          <input type="number" id="price" className="form-control" value={form.price} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label htmlFor="category" className="form-label">Category</label>
          <select id="category" className="form-select" value={form.category} onChange={handleChange} required>
            <option value="">-- Select Category --</option>
            {categories.map(c => (
              <option key={c.id} value={c.id}>{c.category_name}</option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="subCategory" className="form-label">Subcategory</label>
          <select id="subCategory" className="form-select" value={form.subCategory} onChange={handleChange} required>
            <option value="">-- Select Subcategory --</option>
            {subCategories.map(sc => (
              <option key={sc.id} value={sc.id}>{sc.subcategory_name}</option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Current Image</label><br />
          {form.img_url ? (
            <img
              src={`http://localhost:9791/${form.img_url}`}
              alt="Current"
              className="img-thumbnail"
              style={{ maxHeight: '120px' }}
            />
          ) : (
            <span>No image available</span>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="imageFile" className="form-label">Upload New Image</label>
          <input
            id="imageFile"
            type="file"
            className="form-control"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>

        {imageFile && imageFile instanceof File && (
          <div className="text mb-3">
            <img
              src={URL.createObjectURL(imageFile)}
              alt="Preview"
              className="img-thumbnail"
              style={{ maxHeight: '120px' }}
            />
          </div>
        )}

        <button type="submit" className="btn btn-success">Update Product</button>
      </form>
    </div>
  );
}

import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { addProduct, getAllCategory, getAllSubCategory } from './AdminService';

function AddProduct() {
  const [form, setForm] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    subCategory: '',
    imageFile: null,
  });

  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const catRes = await getAllCategory();
        const subCatRes = await getAllSubCategory();
        setCategories(catRes.data);
        setSubCategories(subCatRes.data);
      } catch (err) {
        console.error("Failed to load categories", err);
      }
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { id, value, files } = e.target;
    if (id === 'imageFile') {
      setForm((prev) => ({ ...prev, imageFile: files[0] }));
    } else {
      setForm((prev) => ({ ...prev, [id]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.imageFile) {
      alert('⚠️ Please select an image.');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('name', form.name);
      formData.append('description', form.description);
      formData.append('price', form.price);
      formData.append('category', form.category);
      formData.append('subCategory', form.subCategory);
      formData.append('image', form.imageFile);

      const response = await addProduct(formData);
      alert('✅ Product added: ' + response.data.name);

      setForm({
        name: '',
        description: '',
        price: '',
        category: '',
        subCategory: '',
        imageFile: null,
      });
    } catch (err) {
      console.error(err);
      alert('❌ Error: ' + err.message);
    }
  };

  return (
    <div className="d-flex mt-5 justify-content-center align-items-center"
      style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      <div className="card shadow border-0 w-50" style={{ borderRadius: "20px", maxWidth: '600px' }}>
        <div className="card-header pt-3 bg-primary text-white text-center">
          <h3> Add New Product</h3>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Product Name</label>
              <input id="name" className="form-control" value={form.name} onChange={handleChange} required />
            </div>

            <div className="mb-3">
              <label htmlFor="description" className="form-label">Description</label>
              <input id="description" className="form-control" value={form.description} onChange={handleChange} required />
            </div>

            <div className="mb-3">
              <label htmlFor="price" className="form-label">Price</label>
              <input id="price" type="number" className="form-control" value={form.price} onChange={handleChange} required />
            </div>

            <div className="mb-3">
              <label htmlFor="category" className="form-label">Select Category</label>
              <select id="category" className="form-select" value={form.category} onChange={handleChange} required>
                <option value="">Choose...</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>{cat.category_name}</option>
                ))}
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="subCategory" className="form-label">Select Sub Category</label>
              <select id="subCategory" className="form-select" value={form.subCategory} onChange={handleChange} required>
                <option value="">Choose...</option>
                {subCategories.map((sub) => (
                  <option key={sub.id} value={sub.id}>{sub.subcategory_name}</option>
                ))}
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="imageFile" className="form-label">Upload Image</label>
              <input id="imageFile" type="file" className="form-control" accept="image/*" onChange={handleChange} required />
            </div>

            {form.imageFile && (
              <div className="text-center mb-3">
                <img src={URL.createObjectURL(form.imageFile)} alt="Preview" className="img-thumbnail" style={{ maxHeight: '200px' }} />
              </div>
            )}

            <div className="d-grid">
              <button type="submit" className="btn btn-success">🛒 Add Product</button>
            </div>
          </form>
        </div>
        <div className="card-footer text-center text-muted">
          Powered by ShopSmart 💡
        </div>
      </div>
    </div>
  );
}


export default AddProduct;

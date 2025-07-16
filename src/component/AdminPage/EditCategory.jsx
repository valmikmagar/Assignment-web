import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getCategorybyId, updateCategory } from './AdminService';

export default function EditCategory() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [category, setCategory] = useState({ category_name: '' });

  useEffect(() => {
    getCategorybyId(id)
      .then((res) => {
        setCategory(res.data); // old data prefill
      })
      .catch((err) => {
        console.error('Error fetching category:', err);
        alert("Failed to fetch category");
      });
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    updateCategory(id, category)
      .then(() => {
        alert("Category updated successfully");
        navigate('/admin/add-category');
      })
      .catch((err) => {
        console.error('Update failed:', err);
        alert("Category update failed");
      });
  };

  return (
    <div className="container mt-5">
      <h3 className="text-center mb-4">Edit Category</h3>
      <form className="d-flex align-items-center gap-3 justify-content-center" onSubmit={handleUpdate}>
        <label htmlFor="categoryName" className="form-label mb-0 fw-semibold">
          Category Name:
        </label>
        <input
          type="text"
          className="form-control w-25"
          id="categoryName"
          value={category.category_name}
          onChange={(e) => setCategory({ ...category, category_name: e.target.value })}
          required
        />
        <button type="submit" className="btn btn-outline-success">Update</button>
      </form>
    </div>
  );
}



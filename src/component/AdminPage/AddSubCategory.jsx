import { useState, useEffect } from "react";
import {
  addSubCategory,
  getAllSubCategory,
  deleteSubCategoryById,
  getAllCategory, // ✅ Make sure this is singular as per your import
} from "./AdminService";
import { useNavigate } from "react-router-dom";

export default function AddSubCategory() {
  const [subCategory, setSubCategory] = useState({
    subcategory_name: "",
    category: { id: "" },
  });

  const [subCategoryList, setSubCategoryList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);

  const navigate = useNavigate();

  // 🔄 Load subcategories and categories on mount
  useEffect(() => {
    loadSubCategory();
    loadCategories();
  }, []);

  const loadSubCategory = async () => {
    try {
      const response = await getAllSubCategory(); // ✅ Correct API call
      setSubCategoryList(response.data);
    } catch (error) {
      console.error("Error loading subcategories", error);
    }
  };

  const loadCategories = async () => {
    try {
      const response = await getAllCategory(); // ✅ Correct API call
      setCategoryList(response.data);
    } catch (error) {
      console.error("Error loading categories", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!subCategory.subcategory_name || !subCategory.category.id) {
      alert("Please fill all fields");
      return;
    }

    addSubCategory(subCategory)
      .then(() => {
        alert("SubCategory added successfully");
        setSubCategory({ subcategory_name: "", category: { id: "" } });
        loadSubCategory();
      })
      .catch((error) => {
        console.error("Failed to add subcategory:", error);
        alert("Failed to add subcategory");
      });
  };

  const handleEdit = (id) => {
    navigate(`/admin/edit-subcategory/${id}`);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this SubCategory?")) {
      deleteSubCategoryById(id)
        .then(() => {
          alert("SubCategory deleted successfully");
          loadSubCategory();
        })
        .catch((error) => {
          console.error("Failed to delete Subcategory:", error);
          alert("Failed to delete Subcategory");
        });
    }
  };

  return (
    <>
      <p className="text-center fw-bold fs-4 mt-4">Add SubCategory</p>

      <div className="container mt-5 d-flex justify-content-center">
        <form className="d-flex align-items-center gap-3" onSubmit={handleSubmit}>
          {/* SubCategory Name Input */}
          <label className="form-label mb-0 fw-semibold">SubCategory Name:</label>
          <input
            type="text"
            className="form-control w-25"
            placeholder="Enter subcategory"
            value={subCategory.subcategory_name}
            onChange={(e) =>
              setSubCategory({ ...subCategory, subcategory_name: e.target.value })
            }
            required
          />

          {/* Category Dropdown */}
          <label className="form-label mb-0 fw-semibold">Select Category:</label>
          <select
            className="form-control w-25"
            value={subCategory.category.id || ""}
            onChange={(e) =>
              setSubCategory({
                ...subCategory,
                category: { id: parseInt(e.target.value) },
              })
            }
            required
          >
            <option value="">Select Category</option>
            {categoryList.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.category_name}
              </option>
            ))}
          </select>


          {/* Submit Button */}
          <button type="submit" className="btn btn-outline-success">
            Submit
          </button>
        </form>
      </div>

      {/* SubCategory List Table */}
      <div className="container mt-5">
        <h4 className="mb-4 text-center">SubCategory List</h4>

        <table className="table table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>SubCategory Name</th>
              <th>Category Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {subCategoryList.map((p) => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.subcategory_name}</td>
                <td>{p.category?.category_name}</td>
                <td>
                  <button
                    className="btn btn-outline-info m-1"
                    onClick={() => handleEdit(p.id)}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => handleDelete(p.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

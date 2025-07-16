import { useState, useEffect } from "react";
import {
  getSubCategorybyId,
  updateSubCategory,
  getAllCategory,
} from "./AdminService";
import { useParams, useNavigate } from "react-router-dom";

export default function EditSubCategory() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [subCategory, setSubCategory] = useState({
    subcategory_name: "",
    category: { id: "" },
  });

  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    loadSubCategory();
    loadCategories();
  }, []);

  const loadSubCategory = async () => {
    try {
      const response = await getSubCategorybyId(id);
      const data = response.data;

      // Fallback if category is null
      setSubCategory({
        subcategory_name: data.subcategory_name,
        category: { id: data.category?.id || "" },
      });
    } catch (err) {
      console.error("Failed to load subcategory", err);
    }
  };

  const loadCategories = async () => {
    try {
      const response = await getAllCategory();
      setCategoryList(response.data);
    } catch (err) {
      console.error("Failed to load categories", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!subCategory.subcategory_name || !subCategory.category.id) {
      alert("Please fill all fields");
      return;
    }

    try {
      await updateSubCategory(id, subCategory);
      alert("SubCategory updated successfully");
      navigate("/admin/add-subCategory");
    } catch (err) {
      console.error("Failed to update", err);
      alert("Update failed");
    }
  };

  return (
    <div className="container mt-5">
      <h3 className="text-center mb-4">Edit SubCategory</h3>
      <form
        className="d-flex flex-column align-items-center gap-3 w-50 mx-auto"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="form-control"
          value={subCategory.subcategory_name}
          onChange={(e) =>
            setSubCategory({ ...subCategory, subcategory_name: e.target.value })
          }
          placeholder="SubCategory Name"
          required
        />

        <select
          className="form-control"
          value={subCategory.category.id}
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

        <button className="btn btn-success" type="submit">
          Update
        </button>
      </form>
    </div>
  );
}

import { useState } from "react";
import { addCategory, updateCategory } from "./AdminService";
import { useEffect } from "react";
import { getAllCategory,deleteCategoryById } from "./AdminService";
import { useNavigate } from 'react-router-dom';

export default function AddCAtegory() {

  const [category, setCategory] = useState({ category_name: "" });
    const [category1, setCategory1] = useState([]);
  const handleCategory = (e) => {
    e.preventDefault();
   addCategory(category)
      .then(() => {
        setCategory({ category_name:" " });
        alert("Category added Successfully");
      })
      .catch((error) => {
        console.error("Failed to add Category:", error);
        alert("Failed to add category");
      });
  };

   useEffect(()=>{loadCategory();},[]);
   
   const loadCategory =async()=>{
    const response =await  getAllCategory();
    setCategory1(response.data);
   }


   
const navigate = useNavigate();

const handleEdit = (id) => {
  navigate(`/admin/edit-category/${id}`);
};

 
   const handleDelete = (id) => {
  if (window.confirm("Are you sure you want to delete this category?")) {
    deleteCategoryById(id)
      .then(() => {
        alert("Category deleted successfully");
        navigate('/admin/add-category');       
         loadCategory();
      })
      .catch((error) => {
        console.error("Failed to delete category:", error);
        alert("Failed to delete category");
      });
  }
};

  return (
    <>
      <p className="text-center fw-bold fs-4 mt-4">Add Category</p>

      <div className="container mt-5 d-flex justify-content-center">
        <form className="d-flex align-items-center gap-3" onSubmit={handleCategory}>
          <label htmlFor="categoryName" className="form-label mb-0 fw-semibold">
            Category Name:
          </label>
          <input
            type="text"
            className="form-control w-25"
            id="categoryName"
            placeholder="Enter category"
            value={category.category_name}
            onChange={(e) => {
              setCategory({ ...category, category_name: e.target.value });
            }}
            required
          />
          <button type="submit" className="btn btn-outline-success">Submit</button>
        </form>
      </div>

      <div className="container mt-5">
        <h4 className="mb-4 text-center">Category List</h4>

        <table className="table table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Category Name</th>
              <th scope="col">Action</th>
            </tr> 
          </thead>
          <tbody>
         {category1.map((p)=>
      (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.category_name}</td>
              <td>
                <button className="btn btn-outline-info m-1" onClick={() => handleEdit(p.id)} >Update</button>
                <button className="btn btn-outline-danger" onClick={() => handleDelete(p.id)} >Delete</button>
              </td>
            </tr>
                 ))}
          </tbody>
        </table>
      </div>
    </>
  );
}





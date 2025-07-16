import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import AddProduct from "./AddProduct";
import ProductList from "./ProductList";
import AddCAtegory from "./AddCAtegory";
import AddSubCategory from "./AddSubCategory";
import EditCategory from "./EditCategory";
import EditSubCategory from "./EditSubCategory";
import EditProduct from "./EditProduct";

export default function Admin() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <Sidebar isOpen={isOpen} toggleSidebar={() => setIsOpen(prev => !prev)} />

      <div
        style={{
          marginTop: '56px',
          marginLeft: isOpen ? '250px' : '0',
          transition: 'margin-left 0.3s ease',
          padding: '20px',

        }}
      >
        <Routes>
          <Route path="add-product" element={<AddProduct />} />
          <Route path="product-list" element={<ProductList />} />
          <Route path="add-category" element={<AddCAtegory/>} />
             <Route path="add-subCategory" element={<AddSubCategory/>} />
            <Route path="edit-category/:id" element={<EditCategory />} />
            <Route path="add-subCategory" element={<EditCategory />} />
            <Route path="edit-subcategory/:id" element={<EditSubCategory />} />
            <Route path="edit-product/:id" element={<EditProduct />} />

            add-Subcategory
          <Route path="*" element={<div>Welcome to Admin Dashboard</div>} />
        </Routes>
      </div>
    </>
  );
}

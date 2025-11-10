import axios from 'axios';

const Api_Url='http://localhost:9791/ecommerce';

//category

export const addCategory=(category)=>{
 return axios.post(`${Api_Url}/saveCategory`,category);
} 

export const getAllCategory=()=>{
 return axios.get(`${Api_Url}/getAllCategory`);
} 
export const getCategorybyId=(id)=>{
 return axios.get(`${Api_Url}/getCategoryById/${id}`);
} 

export const  deleteCategoryById=(id)=>{
  return axios.delete(`${Api_Url}/deleteCategory/${id}`);
 } 

 export const updateCategory=(id,category)=>{
  return axios.put(`${Api_Url}/updateCategory/${id}`,category);
 } 

 // subCategory

 export const addSubCategory=(SubCategory)=>{
 return axios.post(`${Api_Url}/saveSubCategory`,SubCategory);
} 

export const getAllSubCategory=()=>{
 return axios.get(`${Api_Url}/getSubAllCategory`);
} 
export const getSubCategorybyId=(id)=>{
 return axios.get(`${Api_Url}/getSubCategoryById/${id}`);
} 

export const  deleteSubCategoryById=(id)=>{
  return axios.delete(`${Api_Url}/deleteSubCategory/${id}`);
 } 

 export const updateSubCategory=(id,SubCategory)=>{
  return axios.put(`${Api_Url}/updateSubCategory/${id}`,SubCategory);
 } 

//  Add Product

 export const addProduct = (productData) => {
  return axios.post(`${Api_Url}/saveProduct`, productData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};



// Product List

export const getAllProducts = () => {
  return axios.get(`${Api_Url}/getAllProduct`);
};

// Get product by ID
export const getProductById = (id) => {
  return axios.get(`${Api_Url}/getById/${id}`);
};

// Delete product by ID
export const deleteProductById = (id) => {
  return axios.delete(`${Api_Url}/deleteById/${id}`);
};

// Save product (formData: use FormData if file upload)
export const saveProduct = (formData) => {
  return axios.post(`${Api_Url}/saveProduct`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

// Update product (with image)
export const updateProduct = (id, formData) => {
  return axios.put(`${Api_Url}/updateProduct/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};



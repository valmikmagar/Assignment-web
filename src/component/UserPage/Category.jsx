import React, { useEffect, useState } from 'react';

export default function Category(){
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    getAllCategory()
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div className="container mt-4">
      <h4>Select Category</h4>
      <select className="form-select" value={selectedCategory} onChange={handleChange}>
        <option value="">-- Select --</option>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );

}








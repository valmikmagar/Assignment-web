package com.ecommerce.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.ecommerce.model.SubCategory;
import com.ecommerce.repository.SubCategoryRepository;
@Service
public class SubCategoryService {

	@Autowired
	private SubCategoryRepository SubCategoryRepository;
	

    public void SaveCategory(SubCategory subCategory) {
    	SubCategoryRepository.save(subCategory);
    }
    public void deleteCategory(Integer id) {
    	SubCategoryRepository.deleteById(id);
    }
    public Optional<SubCategory> getByIdSubCategory(Integer id) {
        return SubCategoryRepository.findById(id);
    }
    public List<SubCategory> getAllSubCategory() {
        return SubCategoryRepository.findAll();
    }
    
}

package com.ecommerce.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommerce.model.Category;
import com.ecommerce.repository.CategoryRepository;

@Service
public class CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    public void  SaveCategory(Category category) {
         categoryRepository.save(category);
    }
    public void deleteCategory(Integer id) {
        categoryRepository.deleteById(id);
    }
    public Optional<Category> getByIdCategory(Integer id) {
        return categoryRepository.findById(id);
    }
    public List<Category> getAllCategory() {
        return categoryRepository.findAll();
    }
    
    
}

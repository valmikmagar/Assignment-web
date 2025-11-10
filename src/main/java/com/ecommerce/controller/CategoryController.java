package com.ecommerce.controller;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.model.Category;
import com.ecommerce.service.CategoryService;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/ecommerce")
public class CategoryController {
   
	@Autowired
	private CategoryService categoryService ;
	
	@PostMapping("/saveCategory")
	public void saveCategory(@RequestBody Category category) {
	    categoryService.SaveCategory(category);
	}

	@GetMapping("/getCategoryById/{id}")
	public Optional<Category> getCategory(@PathVariable Integer id) {
	    return categoryService.getByIdCategory(id);
	}

	@GetMapping("/getAllCategory")
	public List<Category> getAllCategory() {
	    return categoryService.getAllCategory();
	}

	@DeleteMapping("/deleteCategory/{id}")
	public void deleteCategory(@PathVariable Integer id) {
	    categoryService.deleteCategory(id);
	}
   @PutMapping("/updateCategory/{id}")
  	public void UpdateCategoery(@PathVariable Integer id, @RequestBody Category category ){
	   Category Category= categoryService.getByIdCategory(id).orElseThrow();
	   Category.setCategory_name(category.getCategory_name());
	   categoryService.SaveCategory(category);   
  	}
}

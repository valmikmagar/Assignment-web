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


import com.ecommerce.model.SubCategory;
import com.ecommerce.service.SubCategoryService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/ecommerce")
public class SubCategoryController{
	
	@Autowired
	private SubCategoryService subCategoryService;
	

	   @PostMapping("/saveSubCategory")
		public void SaveCategoery( @RequestBody SubCategory subCategory){
		   subCategoryService.SaveCategory(subCategory);
		} 
	   @GetMapping("/getSubCategoryById/{id}")
		public Optional<SubCategory> gatCategoery(@PathVariable Integer id){
			  return subCategoryService.getByIdSubCategory(id);
		} 
	   @GetMapping("/getSubAllCategory")
		public List<SubCategory> gatAllSubCategoery(){
			  return subCategoryService.getAllSubCategory();
		} 
	   @DeleteMapping("/deleteSubCategory/{id}")
		public void DeleteCategoery(@PathVariable Integer id){
		   subCategoryService.deleteCategory(id);
		} 
	   @PutMapping("/updateSubCategory/{id}")
	   public void updateCategory(@PathVariable Integer id, @RequestBody SubCategory subCategory) {
	       SubCategory existing = subCategoryService.getByIdSubCategory(id).orElseThrow();
	       existing.setSubcategory_name(subCategory.getSubcategory_name());
	       existing.setCategory(subCategory.getCategory()); // ✅ ADD THIS LINE
	       subCategoryService.SaveCategory(existing);
	   }
	
}

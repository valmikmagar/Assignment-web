package com.ecommerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ecommerce.model.SubCategory;

public interface SubCategoryRepository extends JpaRepository<SubCategory,Integer> {

	
}

package com.ecommerce.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class SubCategory {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	@Column
	private String subcategory_name;
	@ManyToOne
	@JoinColumn(name="category_id", nullable = false)
	private Category category;
	
	public SubCategory(){	
	 
		
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getSubcategory_name() {
		return subcategory_name;
	}

	public void setSubcategory_name(String subcategory_name) {
		this.subcategory_name = subcategory_name;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	public SubCategory(int id,String subcategory_name, Category category) {
		super();
		this.id = id;
		this.subcategory_name = subcategory_name;
		this.category = category;
		
	}

}

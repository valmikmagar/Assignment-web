package com.ecommerce.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommerce.model.Product;
import com.ecommerce.repository.ProductRepository;

import java.util.List;

@Service
public class ProductService {

	@Autowired
	private ProductRepository productRepository;
	
	public Product saveProduct(Product product) {
		return productRepository.save(product);
	}
	
	public void deleteByIdProduct(Integer id) {
		productRepository.deleteById(id);
	}
	
	public Optional<Product> getByIdProduct(Integer id){
		return productRepository.findById(id);
	}
	
	public List<Product> getAllProduct(){
		return productRepository.findAll();
	}
}

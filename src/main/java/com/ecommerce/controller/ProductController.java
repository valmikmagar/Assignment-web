package com.ecommerce.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.ecommerce.model.Category;
import com.ecommerce.model.Product;
import com.ecommerce.model.SubCategory;
import com.ecommerce.service.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/ecommerce")
public class ProductController {

    @Autowired
    private ProductService productService;

    @Autowired
    private CategoryService categoryService;

    @Autowired
    private SubCategoryService subCategoryService;

    @Autowired
    private ImageStorageService imageStorageService;

    @PostMapping("/saveProduct")
    public ResponseEntity<Product> saveProduct(
            @RequestParam("name") String name,
            @RequestParam("description") String description,
            @RequestParam("price") int price,
            @RequestParam("category") int categoryId,
            @RequestParam("subCategory") int subCategoryId,
            @RequestParam("image") MultipartFile imageFile
    ) {
        Category category = categoryService.getByIdCategory(categoryId)
                .orElseThrow(() -> new RuntimeException("Category not found"));
        SubCategory subCategory = subCategoryService.getByIdSubCategory(subCategoryId)
                .orElseThrow(() -> new RuntimeException("SubCategory not found"));

        String imageUrl = imageStorageService.saveImage(imageFile);

        Product product = new Product();
        product.setName(name);
        product.setDescription(description);
        product.setPrice(price);
        product.setCategory(category);
        product.setSubCategory(subCategory);
        product.setImg_url(imageUrl);

        return ResponseEntity.ok(productService.saveProduct(product));
    }

    @GetMapping("/getAllProduct")
    public ResponseEntity<List<Product>> getAllProducts() {
        return ResponseEntity.ok(productService.getAllProduct());
    }

    @GetMapping("/getById/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable Integer id) {
        Product product = productService.getByIdProduct(id)
                .orElseThrow(() -> new RuntimeException("Product not found"));
        return ResponseEntity.ok(product);
    }

    @PutMapping("/updateProduct/{id}")
    public ResponseEntity<Product> updateProduct(
            @PathVariable Integer id,
            @RequestParam("name") String name,
            @RequestParam("description") String description,
            @RequestParam("price") String price,
            @RequestParam("category") Integer categoryId,
            @RequestParam("subCategory") Integer subCategoryId,
            @RequestParam(value = "imageFile", required = false) MultipartFile imageFile) {

        Product existing = productService.getByIdProduct(id)
                .orElseThrow(() -> new RuntimeException("Product not found"));

        existing.setName(name);
        existing.setDescription(description);
        existing.setPrice(Integer.parseInt(price));

        // Load and set category
        Category cat = categoryService.getByIdCategory(categoryId)
                .orElseThrow(() -> new RuntimeException("Category not found"));
        existing.setCategory(cat);

        // Load and set subcategory
        SubCategory subCat = subCategoryService.getByIdSubCategory(subCategoryId)
                .orElseThrow(() -> new RuntimeException("Subcategory not found"));
        existing.setSubCategory(subCat);

        // Save image (if new one uploaded)
        if (imageFile != null && !imageFile.isEmpty()) {
            String imagePath = imageStorageService.saveImage(imageFile);
            existing.setImg_url(imagePath);
        }

        Product updated = productService.saveProduct(existing);
        return ResponseEntity.ok(updated);
    }

    @DeleteMapping("/deleteById/{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable Integer id) {
        productService.deleteByIdProduct(id);
        return ResponseEntity.noContent().build();
    }
}







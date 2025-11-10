package com.ecommerce.service;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.*;

@Service
public class ImageStorageService {

    private final String uploadDir = "uploads"; // relative to project root

    public String saveImage(MultipartFile file) {
        try {
            Files.createDirectories(Paths.get(uploadDir)); // create folder if not exists

            String fileName = System.currentTimeMillis() + "_" + file.getOriginalFilename();
            Path filePath = Paths.get(uploadDir, fileName);
            Files.copy(file.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);

            return uploadDir + "/" + fileName;
            
        } catch (IOException e) {
            throw new RuntimeException("Failed to store image", e);
        }
    }
}







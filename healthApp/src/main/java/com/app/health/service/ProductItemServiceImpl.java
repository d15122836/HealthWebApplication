package com.app.health.service;

import com.app.health.model.ProductItem;
import com.app.health.repository.ProductItemRepository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class ProductItemServiceImpl implements ProductItemService {
    private ProductItemRepository productItemRepository;

    public ProductItemServiceImpl(ProductItemRepository productItemRepository) {
        this.productItemRepository = productItemRepository;
    }

    @Override
    public Iterable<ProductItem> getAllProducts() {


        return productItemRepository.findAll();
    }




    @Override
    public ProductItem save(ProductItem productItem) {
        return productItemRepository.save(productItem);
    }
}

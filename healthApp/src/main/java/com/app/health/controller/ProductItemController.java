package com.app.health.controller;

import com.app.health.model.ProductItem;
import com.app.health.service.ProductItemService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/products")
public class ProductItemController {

    public ProductItemController(ProductItemService productItemService) {
        this.productItemService = productItemService;
    }

    private ProductItemService productItemService;

    @GetMapping(value={"", "/"})
    public Iterable<ProductItem> getAllProducts()
    {
        return productItemService.getAllProducts();
    }
}

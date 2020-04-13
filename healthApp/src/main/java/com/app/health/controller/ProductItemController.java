package com.app.health.controller;

import com.app.health.model.ProductItem;
import com.app.health.service.ProductItemService;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.awt.*;

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


    @PostMapping(value = "/updateProduct", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ProductItem saveProduct(@RequestBody ProductItem productItem){
        System.out.println("Inside Save Product");

        System.out.println(productItem);
        ProductItem dbProduct = productItemService.getbyID(productItem.getId());
        dbProduct.setAvailableStock(dbProduct.getAvailableStock()-productItem.getAvailableStock());
        return productItemService.save(dbProduct);

    }

    @PostMapping(value = "/updateStock", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ProductItem updateStock(@RequestBody ProductItem productItem) {
        System.out.println("Inside Save Product");

        System.out.println(productItem);
        ProductItem dbProduct = productItemService.getbyID(productItem.getId());
        dbProduct.setAvailableStock(productItem.getAvailableStock());
        return productItemService.save(dbProduct);

    }

}

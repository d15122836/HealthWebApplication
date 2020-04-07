package com.app.health.service;

import com.app.health.model.ProductItem;

public interface ProductItemService {
    public Iterable<ProductItem> getAllProducts();

    public ProductItem save(ProductItem productItem);


}

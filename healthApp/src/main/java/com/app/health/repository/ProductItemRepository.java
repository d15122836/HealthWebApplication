package com.app.health.repository;

import com.app.health.model.ProductItem;
import org.springframework.data.repository.CrudRepository;

public interface ProductItemRepository extends CrudRepository<ProductItem,Long> {
}

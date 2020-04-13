package com.app.health.repository;

import com.app.health.model.UserDetails;
import org.springframework.data.repository.CrudRepository;

public interface UserDetailsRepository  extends CrudRepository <UserDetails,Long>{
}

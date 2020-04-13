package com.app.health.service;


import com.app.health.model.UserDetails;

public interface UserDetailsService {

    public Iterable<UserDetails> getAllUsers();

    public UserDetails save(UserDetails userDetails);

}

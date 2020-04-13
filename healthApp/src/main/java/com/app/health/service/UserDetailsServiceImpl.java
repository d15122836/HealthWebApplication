package com.app.health.service;

import com.app.health.model.UserDetails;
import com.app.health.repository.UserDetailsRepository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;


@Service
@Transactional
public class UserDetailsServiceImpl implements UserDetailsService {

    private UserDetailsRepository userDetailsRepository;
    @Override
    public Iterable<UserDetails> getAllUsers() {
        return userDetailsRepository.findAll();
    }

    @Override
    public UserDetails save(UserDetails userDetails) {
        return userDetailsRepository.save(userDetails);
    }

    public UserDetailsServiceImpl(UserDetailsRepository userDetailsRepository) {
        this.userDetailsRepository = userDetailsRepository;
    }
}

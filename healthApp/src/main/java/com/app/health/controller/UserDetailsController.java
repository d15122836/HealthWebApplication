package com.app.health.controller;

import com.app.health.model.UserDetails;
import com.app.health.service.UserDetailsService;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserDetailsController {
    private UserDetailsService userDetailsService;

    public UserDetailsController(UserDetailsService userDetailsService) {
        this.userDetailsService = userDetailsService;
    }
    @GetMapping(value={"", "/"})
    public Iterable<UserDetails> getAllUsers()
    {
        return userDetailsService.getAllUsers();
    }

    @PostMapping(value = "/save", consumes = MediaType.APPLICATION_JSON_VALUE)
    public UserDetails save(@RequestBody UserDetails userDetails)    {
        System.out.println(userDetails.getAddress());
        System.out.println(userDetails.getFullname());
        System.out.println(userDetails.getModeofpayment());
        return userDetailsService.save(userDetails);
    }
}

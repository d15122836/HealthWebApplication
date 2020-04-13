package com.app.health;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.ui.Model;

@Controller
public class HomeController
{
    @GetMapping("/homepage")
    public String homepage(Model model)
    {
        return "homepage";
    }

    @GetMapping("/checkOut")
    public String checkOut(Model model)
    {
        return "checkOut";
    }

    @GetMapping("/login")
    public String login(Model model)
    {
        return "login";
    }

    @GetMapping("/admin")
    public String admin(Model model)
    {
        return "admin";
    }

    @GetMapping("/register")
    public String register(Model model)
    {
        return "register";
    }



}


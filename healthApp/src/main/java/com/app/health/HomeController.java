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



}


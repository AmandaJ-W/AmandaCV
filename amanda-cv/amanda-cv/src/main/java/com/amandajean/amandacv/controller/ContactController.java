package com.amandajean.amandacv.controller;
import com.amandajean.amandacv.model.ContactForm;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/contact")
public class ContactController {
    @GetMapping("/contact")
    public String showContactForm() {
        return "index"; // name of HTML file
    }

    @PostMapping("/submitForm")
    public ModelAndView submitForm(@ModelAttribute ContactForm form) {
        return new ModelAndView("index"); // Return the same page after form submission.
    }
}

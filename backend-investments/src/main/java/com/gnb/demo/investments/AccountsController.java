package com.gnb.demo.investments;

import java.lang.Math;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AccountsController {

    @RequestMapping("/account/{id}")
    public Account accountDetails(@PathVariable String id) {
        float balance = (float)(Math.random() * (1000000));
        Account acct = new Account();
        acct.setId(id);
        acct.setName("Investments");
        acct.setBalance(String.format("%.02f", balance));
        acct.setDescription("My investments account has been around a few years. This application is built on " +
                "Spring Boot 1.x and it could use a framework refresh");
        return acct;
    }
}
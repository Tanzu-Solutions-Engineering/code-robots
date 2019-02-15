package com.gnb.demo.banking;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class AccountsController {

    @RequestMapping("/account/{id}")
    public Account accountDetails(@PathVariable String id) {

        Account account = new Account();

        account.setId(id);
        account.setName("Checking");
        float balance = (float)(Math.random() * (10000));
        account.setBalance(String.format("%.02f", balance));
        account.setDescription("My newer checking account that has been around for a few years." +
                " It is built on Spring Boot 1.x and it could use a framework refresh.");

        return account;
    }
}
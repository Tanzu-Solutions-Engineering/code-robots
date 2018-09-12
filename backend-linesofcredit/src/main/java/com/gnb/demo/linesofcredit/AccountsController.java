package com.gnb.demo.linesofcredit;

import java.math.BigDecimal;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AccountsController {

    @RequestMapping("/account/{id}")
    public Account accountDetails(@PathVariable String id) {
        float balance = (float)(Math.random() * (-10000));
        Account acct = new Account();
        acct.setId(id);
        acct.setName("Credit Card Balances");
        acct.setBalance(String.format("%.02f", balance));
        acct.setDescription("My credit card balances is NEW. The application is built on Spring 2.x. It uses the " +
                "latest/greatest technology but it is not immune to vulnerabilities");
        return acct;
    }
}
package com.gnb.demo.banking;

import java.math.BigDecimal;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AccountsController {

    @RequestMapping("/account/{id}")
    public Account accountDetails(@PathVariable String id) {
        Account acct = new Account();
        acct.setId(id);
        acct.setName("Checking");
        acct.setBalance(new BigDecimal(100.00));
        acct.setDescription("My GNB checking account");
        return acct;
    }
}
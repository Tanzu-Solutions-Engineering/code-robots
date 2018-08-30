package com.gnb.demo.investments;

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
        acct.setName("Investments");
        acct.setBalance(new BigDecimal(1000.00));
        acct.setDescription("My GNB investment accounts balance");
        return acct;
    }
}
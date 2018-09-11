package com.gnb.demo.linesofcredit;

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
        acct.setName("Lines of Credit");
        acct.setBalance(new BigDecimal(-100000.45));
        acct.setDescription("My GNB Credit Card Balance");
        return acct;
    }
}
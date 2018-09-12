package com.gnb.demo.banking;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class AccountsController {

    @Value("${backend.legacy.url}")
    private String legacyUrl;

    @RequestMapping("/account/{id}")
    public Account accountDetails(@PathVariable String id) {

        Account account = new Account();

        if (id.startsWith("1")){
            RestTemplate restTemplate = new RestTemplate();
            String legacyGET = legacyUrl + "?id=" + id;
            account = restTemplate.getForObject(legacyGET, Account.class);
        }
        else
        {
            account.setId(id);
            account.setName("Checking");
            float balance = (float)(Math.random() * (10000));
            account.setBalance(String.format("%.02f", balance));
            account.setDescription("My newer checking account that has been around for a few years." +
                    " It is built on spring boot 1.x. User IDs starting with '1' will get" +
                    " routed to a struts 1.x application.");
        }

        return account;
    }
}
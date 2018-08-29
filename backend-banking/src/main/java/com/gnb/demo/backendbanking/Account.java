package com.gnb.demo.backendbanking;

import lombok.Data;

import java.math.BigDecimal;

@Data
public class Account {

    private String id;
    private BigDecimal balance;
    private String name;
    private String description;

}

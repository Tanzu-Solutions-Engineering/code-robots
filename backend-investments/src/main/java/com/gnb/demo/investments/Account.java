package com.gnb.demo.investments;

import lombok.Data;

import java.math.BigDecimal;

@Data
public class Account {

    private String id;
    private String balance;
    private String name;
    private String description;

}

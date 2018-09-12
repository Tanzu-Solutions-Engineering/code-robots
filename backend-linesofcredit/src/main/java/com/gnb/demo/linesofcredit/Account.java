package com.gnb.demo.linesofcredit;

import lombok.Data;

import java.math.BigDecimal;

@Data
public class Account {

    private String id;
    private String balance;
    private String name;
    private String description;

}

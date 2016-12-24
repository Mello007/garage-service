package ru.garage.entity;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Table;

@Getter @Setter
@Entity @Table(name = "Auto")
public class Auto extends BaseEntity {
    private String mark;
    private String color;
    private String engineCapacity;
    private String tankCapacity;
    private String wear;
}

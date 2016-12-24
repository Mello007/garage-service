package ru.garage.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Table;

@Getter @Setter
@Entity @Table(name = "Service")
public class Service extends BaseEntity {
    private String description;
    private String price;
    private String date;
}

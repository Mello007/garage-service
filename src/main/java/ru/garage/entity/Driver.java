package ru.garage.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Table;

@Getter @Setter
@Entity @Table(name = "Driver")
public class Driver extends BaseEntity {
    private String fio;
    private String age;
    private String experience;
    private String reference;
}

package ru.garage.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Table;

@Getter @Setter
@Entity @Table(name = "Garage")
public class Garage extends BaseEntity {
    private String name;
}

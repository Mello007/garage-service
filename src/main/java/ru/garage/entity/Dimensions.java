package ru.garage.entity;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Table;

@Getter @Setter
@Entity @Table(name = "Dimensions")
public class Dimensions extends BaseEntity {
    private String length;
    private String width;
    private String height;
}

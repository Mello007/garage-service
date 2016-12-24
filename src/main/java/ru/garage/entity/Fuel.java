package ru.garage.entity;

import lombok.Getter;
import lombok.Setter;
import javax.persistence.Entity;
import javax.persistence.Table;

@Getter @Setter
@Entity @Table(name = "Fuel")
public class Fuel extends BaseEntity {
    private String fuelName;
    private String fuelCapacity;
    private String fuelOrder;
}

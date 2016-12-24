package ru.garage.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Table;

@Getter @Setter
@Entity @Table(name = "Reference")
public class Reference extends BaseEntity {
    private String ophthalmologist;
    private String surgeon;
    private String psychologist;
    private String lor;
    private String dateValidity;
    private String dateOfIssue;
}

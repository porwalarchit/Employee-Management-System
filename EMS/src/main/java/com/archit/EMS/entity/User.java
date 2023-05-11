package com.archit.EMS.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;

@Entity
@Table(name="users")
public class User {
    // define fields
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private int id;

//    @Nonnull(message="Enter your first name")
    @NotBlank(message = "Please Enter first name")
    @Column(name="first_name")
    private String firstName;

    @NotBlank(message = "Please Enter last name")
    @Column(name = "last_name")
    private String lastName;

    @NotBlank(message = "Please Enter Email")
    @Column(name = "email")
    private String email;

    @NotBlank(message = "Please Enter password")
    @Column(name = "password")
    private String password;

    // define constructors
    public User(int id, String firstName, String lastName, String email, String password) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }

    public User() {
    }
    // getter and setter

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }


}

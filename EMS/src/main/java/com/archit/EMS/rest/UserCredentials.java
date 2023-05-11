package com.archit.EMS.rest;

public class UserCredentials {
    private String email;
    private String password;

    public UserCredentials() {
    }

    public UserCredentials(String email, String password) {
        this.email = email;
        this.password = password;
    }

    // Getters and setters

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

}

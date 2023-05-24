package com.archit.EMS.dto;

public class EmployeeCredentials {
    private String email;
    private String password;

    public EmployeeCredentials() {
    }

    public EmployeeCredentials(String email, String password) {
        this.email = email;
        this.password = password;
    }

    // Getters
    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

}

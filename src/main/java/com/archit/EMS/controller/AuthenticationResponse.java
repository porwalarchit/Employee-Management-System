package com.archit.EMS.controller;

public class AuthenticationResponse {
    private String token;

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public AuthenticationResponse(String token){
        super();
        this.token = token;
    }

    public AuthenticationResponse() {
        super();
    }
}

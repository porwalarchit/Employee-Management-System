package com.archit.EMS.rest;

public class UserNotExists extends RuntimeException{
    public UserNotExists(String message) {
        super(message);
    };
}

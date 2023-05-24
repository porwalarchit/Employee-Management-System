package com.archit.EMS.exceptions;

public class UserNotExists extends RuntimeException{
    public UserNotExists(String message) {
        super(message);
    };
}

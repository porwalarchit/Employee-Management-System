package com.archit.EMS.exceptions.exception;

public class EmployeeNotExists extends RuntimeException{
    public EmployeeNotExists(String message) {
        super(message);
    };
}

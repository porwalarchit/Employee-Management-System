package com.archit.EMS.exceptions;

public class EmployeeNotExists extends RuntimeException{
    public EmployeeNotExists(String message) {
        super(message);
    };
}

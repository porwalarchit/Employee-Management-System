package com.archit.EMS.exceptions.exception;

public class EmployeeAlreadyExistsException extends RuntimeException{
    public EmployeeAlreadyExistsException(String message) {
        super(message);
    };
}
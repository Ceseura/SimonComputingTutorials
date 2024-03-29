package com.simoncomputing.app.helloworld.domain;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class User {
    private Integer id;
    private String firstName;
    private String lastName;
    private String role;
    private String title;
    private Boolean active;
    private Address address;
    private Phone[] phones;
    
    
    
    public User() {
        this.id = 0;
        this.active = true;
    }
    public User(Integer id, String firstName, String lastName, String role, String title, Boolean active,
            Address address, Phone[] phones) {
        super();
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.role = role;
        this.title = title;
        this.active = active;
        this.address = address;
        this.phones = phones;
    }
    public User(Integer id, String firstName, String lastName, String role, String title, Boolean active) {
        super();
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.role = role;
        this.title = title;
        this.active = active;
    }

    @Override
    public String toString() {
        return String.format(
                "User [id=%d, firstName=%s, lastName=%s, role=%s, title=%s, address=[%s], phones=[%s], active=%b",
                id,
                firstName,
                lastName,
                role,
                title,
                address,
                Arrays.toString(phones),
                active);
    }
    
    public Boolean simpleEquals(User other) {
        return this.id == other.id;
    }
    
    //Sidestep equals() - hashcode() thing lul
    public Boolean fieldsEqualTo(User other) {
        if (this.id == other.id &&
                this.firstName == other.firstName &&
                this.lastName == other.lastName &&
                this.role == other.role &&
                this.title == other.title &&
                this.active == other.active &&
                this.address.fieldsEqualTo(other.address) &&
                !(this.phones == null ^ other.phones == null)){
            
            for (int i = 0; i < (this.phones.length > other.phones.length ? other.phones.length : this.phones.length) ; i++) {
                if (!(this.phones[i].fieldsEqualTo(other.phones[i]))) {
                    return false;
                }
            }
            return true;
        }
        return false;
    }
    
    //Setters, getters
    public void setId(Integer newid) {
        id = newid;
    }
    
    public Integer getId() {
        return id;
    }
    
    public void setFirstName(String newFN) {
        firstName = newFN;
    }
    
    public String getFirstName() {
        return firstName;
    }

    public void setLastName(String newLN) {
        lastName = newLN;
    }
    
    public String getLastName() {
        return lastName;
    }
    
    public void setRole(String newRole) {
        role = newRole;
    }
    
    public String getRole() {
        return role;
    }
    
    public void setTitle(String newTitle) {
        title = newTitle;
    }
    
    public String getTitle() {
        return title;
    }

    public void setActive(Boolean newActive) {
        active = newActive;
    }
    
    public Boolean getActive() {
        return active;
    }
    
    public void setAddress(Address newAddress) {
        address = newAddress;
    }
    
    public Address getAddress() {
        return address;
    }
    
    public void setPhones(Phone[] newPhones) {
        phones = newPhones;
    }
   
    public Phone[] getPhones() {
        return phones;
    }

}



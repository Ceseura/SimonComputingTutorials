package com.simoncomputing.app.helloworld.bo.utils;

import com.simoncomputing.app.helloworld.domain.Address;

public class AddressUtils {
    private Address address = new Address();

    public void addressBuilder() {
        this.address = new Address();
    }
    
    public Address build(){
        return this.address;
    }
    
   
}

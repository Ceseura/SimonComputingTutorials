package com.simoncomputing.app.helloworld.bo.utils;

import java.util.ArrayList;
import java.util.List;

import com.simoncomputing.app.helloworld.domain.Address;
import com.simoncomputing.app.helloworld.domain.Phone;
import com.simoncomputing.app.helloworld.domain.User;

//supporting utility class (may move this out if other tests find it useful)
public class UserBuilder {
    private User user = new User();
    private final Address address = new Address();
    private final List<Phone> phones = new ArrayList<>();

    public UserBuilder(String firstName, String lastName) {
        this.user = new User(); // <-- this causes a compilation error (how might you resolve it?)
        this.firstName(firstName)
            .lastName(lastName);
    }

    public User build() {
        this.user.setAddress(this.address);
        if (this.phones.size() > 0) {
            this.user.setPhones(this.phones.toArray(new Phone[this.phones.size()]));
        }
        return this.user;
    }

    public UserBuilder firstName(String firstName) {
        this.user.setFirstName(firstName);
        return this;
    }

    public UserBuilder lastName(String lastName) {
        this.user.setLastName(lastName);
        return this;
    }

    public UserBuilder role(String role) {
        this.user.setRole(role);
        return this;
    }

    public UserBuilder title(String title) {
        this.user.setTitle(title);
        return this;
    }

    public UserBuilder active(Boolean active) {
        this.user.setActive(active);
        return this;
    }

    public UserBuilder street(String street) {
        this.address.setStreet(street);
        return this;
    }

    public UserBuilder city(String city) {
        this.address.setCity(city);
        return this;
    }

    public UserBuilder state(String state) {
        this.address.setState(state);
        return this;
    }

    public UserBuilder zip(String zip) {
        this.address.setZip(zip);
        return this;
    }

    public UserBuilder addPhone(String type, String number) {
        this.phones.add(new Phone(type, number));
        return this;
    }
}
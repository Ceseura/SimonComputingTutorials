package com.simoncomputing.app.helloworld.domain;

public class Phone {

    private Integer id;
    private String type;
    private String number;
    
    public Phone() {}
    public Phone(String type, String number) {
        super();
        this.type = type;
        this.number = number;
    }
    
    public Boolean fieldsEqualTo(Phone other) {
        if (this.type == other.type && this.number == other.number) {
            return true;
        }
        return false;
    }
    
    @Override
    public String toString() {
        return String.format(
                "Phone [type=%s, number=%s]",
                type,
                number
                );
    }
    
    public Integer getId() {
        return id;
    }
    
    public void setId(Integer id) {
        this.id = id;
    }
    
    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }
    
}

package com.excelr.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class UserFeedback {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	 private User user; // Assuming User is a class with appropriate getters and setters
    private String feedback;
	
    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getFeedback() {
        return feedback;
    }

    public void setFeedback(String feedback) {
        this.feedback = feedback;
    }
	
    
	
}

package com.meetesh.student.controller.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StudentResponse {
  private String rollNumber;
  private String name;
  @JsonProperty("class")
  private String standard;

  public StudentResponse(String rollNumber, String name, String standard) {
    this.rollNumber = rollNumber;
    this.name = name;
    this.standard = standard;
  }

  public String getRollNumber() {
    return rollNumber;
  }

  public String getName() {
    return name;
  }

  public String getStandard() {
    return standard;
  }
}

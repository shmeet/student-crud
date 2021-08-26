package com.meetesh.student.controller.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StudentRequest {
  private String rollNumber;
  private String name;
  @JsonProperty("class")
  private String standard;

  public String getRollNumber() {
    return rollNumber;
  }

  public void setRollNumber(String rollNumber) {
    this.rollNumber = rollNumber;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getStandard() {
    return standard;
  }

  public void setStandard(String standard) {
    this.standard = standard;
  }
}

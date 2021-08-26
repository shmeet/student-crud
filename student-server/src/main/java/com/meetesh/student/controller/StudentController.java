package com.meetesh.student.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.meetesh.student.controller.model.StudentRequest;
import com.meetesh.student.controller.model.StudentResponse;
import com.meetesh.student.service.StudentService;
import com.meetesh.student.service.model.Student;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(path = "/student")
public class StudentController {
  @Autowired
  private StudentService studentService;

  public StudentController(StudentService studentService) {
    this.studentService = studentService;
  }

  @GetMapping
  public List<StudentResponse> getAllStudents() {
    List<StudentResponse> studentResponses;
    studentResponses = new ArrayList<>();
    studentService
        .getAllStudents()
        .forEach(student ->
                studentResponses.add(
                        new StudentResponse(
                                student.getRollNumber(),
                                student.getName(),
                                student.getStandard()
                        )
                )
        );
    return studentResponses;
  }

  @PostMapping
  public StudentResponse addStudent(@RequestBody StudentRequest studentRequest) {
    Student student = new Student();
    student.setRollNumber(studentRequest.getRollNumber());
    student.setName(studentRequest.getName());
    student.setStandard(studentRequest.getStandard());
    studentService.addStudent(student);
    return new StudentResponse(student.getRollNumber(), student.getName(), student.getStandard());
  }

  @PutMapping
  public StudentResponse updateStudent(@RequestBody StudentRequest studentRequest) {
    Student student = new Student();
    student.setRollNumber(studentRequest.getRollNumber());
    student.setName(studentRequest.getName());
    student.setStandard(studentRequest.getStandard());
    studentService.update(student);
    return new StudentResponse(student.getRollNumber(), student.getName(), student.getStandard());
  }

  @DeleteMapping
  public StudentResponse deleteStudent(@RequestBody StudentRequest studentRequest) {
    Student student = new Student();
    student.setRollNumber(studentRequest.getRollNumber());
    student.setName(studentRequest.getName());
    student.setStandard(studentRequest.getStandard());
    studentService.delete(student);
    return new StudentResponse(student.getRollNumber(), student.getName(), student.getStandard());
  }
}

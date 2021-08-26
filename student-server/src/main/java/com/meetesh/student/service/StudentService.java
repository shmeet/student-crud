package com.meetesh.student.service;

import com.meetesh.student.service.model.Student;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class StudentService {
  List<Student> students = new ArrayList<>();

  public List<Student> getAllStudents() {
    return students;
  }

  public void addStudent(Student student) {
    students.add(student);
  }

  public void update(Student student) {
    for (Student s : students) {
      if (s.getRollNumber().equals(student.getRollNumber())) {
        s.setName(student.getName());
        s.setStandard(student.getStandard());
        break;
      }
    }
  }

  public void delete(Student student) {
    List<Student> studentsList = new ArrayList<>();
    for (Student s : students) {
      if (s.getRollNumber().equals(student.getRollNumber())) {
        continue;
      }
      studentsList.add(s);
    }
    students = studentsList;
  }
}

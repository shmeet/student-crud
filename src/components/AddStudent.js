import React, { useRef } from "react";
import { Link, useHistory } from "react-router-dom";

export default function AddStudent({
  addStudent,
  navigateToSuccessWithMessage,
}) {
  const rollNumber = useRef("");
  const name = useRef("");
  const std = useRef("");
  const history = useHistory();
  const saveClicked = () => {
    const vRollNumber = rollNumber.current.value;
    const vName = name.current.value;
    const vStd = std.current.value;
    const studentToSave = {
      rollNumber: vRollNumber,
      name: vName,
      class: vStd,
    };
    addStudent(studentToSave, (error) => {
      if (!!error === false) {
        rollNumber.current.value = "";
        name.current.value = "";
        std.current.value = "";
        navigateToSuccessWithMessage(
          history,
          `Student ${vName} added successfuly.`
        );
      }
    });
  };
  return (
    <>
      <h2>Add Student</h2>
      <form
        onSubmit={(ev) => {
          ev.preventDefault();
        }}
      >
        <label htmlFor="rollNumber">Roll Number: </label>
        <input
          type="text"
          name="rollNumber"
          id="rollNumber"
          ref={rollNumber}
          required
        />
        <br />
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" id="name" ref={name} required />
        <br />
        <label htmlFor="std">Standard: </label>
        <select name="std" id="std" ref={std} required>
          <option value="">Select a value</option>
          <option value="5th">5th</option>
          <option value="6th">6th</option>
          <option value="7th">7th</option>
          <option value="8th">8th</option>
          <option value="9th">9th</option>
          <option value="10th">10th</option>
          <option value="11th">11th</option>
          <option value="12th">12th</option>
        </select>
        <br />
        <button onClick={() => saveClicked()}>Save</button>{" "}
        <Link to="/">Cancel</Link>
      </form>
    </>
  );
}

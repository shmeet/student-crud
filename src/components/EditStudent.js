import React, { useRef } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
const EditStudent = ({
  getStudentByRollNumber,
  editStudent,
  navigateToSuccessWithMessage,
}) => {
  const { rollNumber } = useParams();
  const student = getStudentByRollNumber(rollNumber);
  const nameRef = useRef();
  const stdRef = useRef();
  const history = useHistory();
  const updateClicked = () => {
    editStudent(
      {
        rollNumber,
        name: nameRef.current.value,
        class: stdRef.current.value,
      },
      (error) => {
        if (!!error == false) {
          navigateToSuccessWithMessage(history, "Update Success");
        }
      }
    );
  };
  const studentEditComponent = () => {
    return (
      <>
        <h2>Edit {student && student.name}</h2>
        <label htmlFor="rollNumber">Roll number:</label>
        <input type="text" id="rollNumber" value={rollNumber} disabled />
        <br />
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          ref={nameRef}
          id="name"
          defaultValue={student.name}
        />
        <br />
        <label htmlFor="std">Class</label>
        <select id="std" ref={stdRef} defaultValue={student.class}>
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
        <button onClick={updateClicked}>Update</button>{" "}
        <Link to="/">Cancel</Link>
      </>
    );
  };
  const invalidStudent = () => {
    return (
      <>
        Invalid Student click <Link to="/"> here </Link> to go back.
      </>
    );
  };
  return <>{!!student ? studentEditComponent() : invalidStudent()}</>;
};

export default EditStudent;

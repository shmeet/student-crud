import { Link, useHistory, useParams } from "react-router-dom";
const DeleteStudent = ({
  getStudentByRollNumber,
  deleteStudent,
  navigateToSuccessWithMessage,
}) => {
  const { rollNumber } = useParams();
  const student = getStudentByRollNumber(rollNumber);
  const history = useHistory();
  const studentDeleteComponent = () => (
    <>
      <h2>Are you sure to delete {student && student.name} ?</h2>
      <label>Roll number:</label>
      <label>{student.rollNumber}</label>
      <br />
      <label>Name: </label>
      <label>{student.name}</label>
      <br />
      <label>Class: </label>
      <label>{student.class}</label>
      <br />
      <button
        onClick={() => {
          deleteStudent(student, (error) => {
            if (!!error === false) {
              navigateToSuccessWithMessage(history,"Student deleted successfuly");
            }
          });
        }}
      >
        Delete
      </button>
      &nbsp;
      <Link to="/">Cancel</Link>
    </>
  );
  const invalidStudent = () => {
    return (
      <>
        Invalid Student click <Link to="/">here</Link> to go back.
      </>
    );
  };
  return <>{!!student ? studentDeleteComponent() : invalidStudent()}</>;
};

export default DeleteStudent;

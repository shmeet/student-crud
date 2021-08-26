import { connect } from "react-redux";
import DeleteStudent from "../components/DeleteStudent";
import { deleteStudent } from "../actions";
import { navigateToSuccessWithMessage } from "../commons/utils";
import StudentApiService from "../services/StudentApiService";
const service = StudentApiService();
const mapStateToProps = (state) => {
  return {
    getStudentByRollNumber: (rollNumber) => {
      return state.students.find((s) => s.rollNumber == rollNumber);
    },
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteStudent: (student, callback) => {
      service.remove(student).then(() => {
        dispatch(deleteStudent(student));
        callback();
      });
    },
    navigateToSuccessWithMessage,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DeleteStudent);

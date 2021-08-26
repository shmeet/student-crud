import { connect } from "react-redux";
import EditStudent from "../components/EditStudent";
import { editStudent } from "../actions";
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
    editStudent: (student, callback) => {
      service.update(student).then(() => {
        dispatch(editStudent(student));
        callback();
      });
    },
    navigateToSuccessWithMessage,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(EditStudent);

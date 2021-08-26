import { connect } from "react-redux";
import AddStudent from "../components/AddStudent";
import { addStudent } from "../actions";
import { navigateToSuccessWithMessage } from "../commons/utils";
import StudentApiService from "../services/StudentApiService";
const service = StudentApiService();
const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {
    addStudent: (student, callback) => {
      service.add(student).then((s) => {
        dispatch(addStudent(student));
        callback();
      });
    },
    navigateToSuccessWithMessage,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddStudent);

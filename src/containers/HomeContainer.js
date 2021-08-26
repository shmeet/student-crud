import { connect } from "react-redux";
import { getAllStudents } from "../actions";
import Home from "../components/Home";
import StudentApiService from "../services/StudentApiService";

const service = StudentApiService();
const mapStateToProps = (state) => {
  return { students: state.students };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchStudents: () => {
      service
        .getAll()
        .then((data) => {
          dispatch(getAllStudents(data));
        })
        .catch((error) => {
          console.log("**************", error);
        });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);

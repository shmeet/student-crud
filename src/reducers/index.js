const studentReducer = (state = { students: [] }, action) => {
  switch (action.type) {
    case "ADD_STUDENT":
      const stateNew = {
        ...state,
        students: [...state.students, action.payload],
      };
      return stateNew;
    case "EDIT_STUDENT":
      let editedStudents = state.students.map((student) => {
        if (student.rollNumber == action.payload.rollNumber) {
          student.name = action.payload.name;
          student.class = action.payload.class;
        }
        return student;
      });
      return {
        ...state,
        students: [...editedStudents],
      };
    case "DELETE_STUDENT":
      let remaining = state.students.filter(
        (student) => student.rollNumber != action.payload.rollNumber
      );
      return {
        ...state,
        students: [...remaining],
      };
    case "GET_ALL_STUDENTS":
      return {
        ...state,
        students: [...action.payload],
      };
    default:
      return state;
  }
};

export default studentReducer;

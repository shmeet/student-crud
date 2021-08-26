import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import './css/Home.css'
function Home(props) {
  const { students, fetchStudents } = props;
  const [selected, setSelected] = useState({});
  const editUrl = () => {
    return "/edit/" + (selected.rollNumber || 0);
  };
  const deleteUrl = () => {
    return "/delete/" + (selected.rollNumber || 0);
  };
  useEffect(() => {
    fetchStudents();
  }, []);
  return (
    <>
      <h2>Students</h2>
      <div className='button-wrapper'>
      <Link to="/add">
        <img src="/add-1-icon.png" alt="add" title="add" />
      </Link>
      <Link to={editUrl()}>
        <img src="/edit-icon.png" alt="edit" title="edit" />
      </Link>
      <Link to={deleteUrl()}>
        <img src="/delete-1-icon.png" alt="delete" title="delete" />
      </Link>
      </div>
      <table className="student-table" border="1">
        <thead>
          <tr>
            <th className="left-align">Roll number</th>
            <th className="left-align">Name</th>
            <th className="left-align">Class</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr
              className={s.rollNumber == selected.rollNumber && "selected"}
              onClick={() => setSelected(s)}
              key={s.rollNumber}
            >
              <td>{s.rollNumber}</td>
              <td>{s.name}</td>
              <td>{s.class}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Home;

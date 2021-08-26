import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeContainer from "./containers/HomeContainer";
import AddStudentContainer from "./containers/AddStudentContainer";
import EditStudentContainer from "./containers/EditStudentContainer";
import DeleteStudentContainer from "./containers/DeleteStudentContainer";
import SuccessPage from "./components/SuccessPage";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
function App() {
  return (
    <>
      <Header />
      <MainContent>
        <Router>
          <Switch>
            <Route path="/add">
              <AddStudentContainer />
            </Route>
            <Route path="/edit/:rollNumber">
              <EditStudentContainer />
            </Route>
            <Route path="/delete/:rollNumber">
              <DeleteStudentContainer />
            </Route>
            <Route path="/success">
              <SuccessPage />
            </Route>
            <Route exact path="/">
              <HomeContainer />
            </Route>
          </Switch>
        </Router>
      </MainContent>
    </>
  );
}

export default App;

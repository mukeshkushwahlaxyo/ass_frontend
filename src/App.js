import './App.css';
import AddUserComponent from './component/AddUserComponent'
import {Redirect, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserListComponet from './component/UserListComponet'
function App() {
  return (
    <>
        <Router>
          <Switch>
            <Route exact path="/" children={<AddUserComponent />} />
            <Route exact path="/users-list/" children={<UserListComponet />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

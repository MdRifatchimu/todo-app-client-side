import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';
import AddNotes from './Pages/AddNotes/AddNotes';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import Subscription from './Pages/Subscription/Subscription';
import UpdateNote from './Pages/UpdateNote/UpdateNote';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Login></Login>
            </Route>
            <Route path="/signup">
              <Signup></Signup>
            </Route>
            <Route path="/dashboard/dashboardhome">
              <Dashboard></Dashboard>
            </Route>
            <Route path="/addnotes">
              <AddNotes></AddNotes>
            </Route>
            <Route path="/updatenote/:todoId">
              <UpdateNote></UpdateNote>
            </Route>
            <Route path="/subscription">
              <Subscription></Subscription>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

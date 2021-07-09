import SideBar from './components/sidebar/SideBar';
import TopBar from './components/topbar/TopBar';
import './app.css';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';

function App() {
  return (
    <Router>
      <TopBar></TopBar>
      <div className='container'>
        <SideBar></SideBar>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/users'>
            <UserList></UserList>
          </Route>
          <Route path='/user/:userId'>
            <User></User>
          </Route>
          <Route path='/newUser'>
            <NewUser></NewUser>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

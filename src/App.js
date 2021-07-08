import SideBar from './components/sidebar/SideBar';
import TopBar from './components/topbar/TopBar';
import './app.css';
import Home from './pages/home/Home';

function App() {
  return (
    <div>
      <TopBar></TopBar>
      <div className='container'>
        <SideBar></SideBar>
        <Home></Home>
      </div>
    </div>
  );
}

export default App;

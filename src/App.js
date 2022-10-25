import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Manage_data from './page/Manage_data';
import Router from './Routers/Routers';
// import Login from './page/login';

function App() {
  return (
    <>
      <Header />
      {/* <Login /> */}
      {/* <Manage_data /> */}
      <Router />
    </>
  );
}

export default App;

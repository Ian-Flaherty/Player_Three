import { Switch, Route, useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react';
import './App.css';
import Layout from './componenets/Layout/Layout';
import Main from './screens/Home/Main';
import SignIn from './screens/SignIn/SignIn';
import SignUp from './screens/SignUp/SignUp';
import LikedMovies from './screens/LikedMovies/LikedMovies';
import Settings from './screens/Settings/Settings';
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);

  const handleLogin = async (formData) => {
    const userData = await loginUser(formData);
    setCurrentUser(userData);
    history.push('/');
  };

  const handleRegister = async (formData) => {
    const userData = await registerUser(formData);
    setCurrentUser(userData);
    history.push('/');
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    removeToken();
    setCurrentUser(null);
  };

  return (
    <div className="App">
      <Layout currentUser={currentUser} handleLogout={handleLogout}>
      <Switch>
        <Route exact path='/'>
          <SignIn handleLogin={handleLogin}/>
        </Route>
        <Route exact path='/Home'>
            <Main/>
        </Route>
        <Route exact path='/SignUp'>
          <SignUp handleRegister={handleRegister}/>
        </Route>
        <Route exact path='/Settings'>
          <Settings/>
        </Route>
        <Route exact path='/LikedMovies'>
          <LikedMovies/>
        </Route>
      <div>
      </div>
        </Switch>
    </Layout>
    </div>
  );
}

export default App;

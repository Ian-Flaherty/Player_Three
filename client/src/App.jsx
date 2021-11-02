import { Switch, Route, Redirect } from 'react-router-dom'
import './App.css';
import Main from './screens/Home/Main';
import SignIn from './screens/SignIn/SignIn';
import SignUp from './screens/SignUp/SignUp';
import LikedMovies from './screens/LikedMovies/LikedMovies';
import Settings from './screens/Settings/Settings';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Main/>
        </Route>
        <Route exact path='/SignIn'>
          <SignIn/>
        </Route>
        <Route exact path='/SignUp'>
          <SignUp/>
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
    </div>
  );
}

export default App;

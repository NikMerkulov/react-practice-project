import { Switch, Route } from 'react-router-dom';
import './App.css'
import Header from './components/Header/Header'
import LogIn from './components/LogIn/LogIn'
import SignIn from './components/SignIn/SignIn'

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path='/login'>
          <LogIn />
        </Route>
        <Route path='/signin'>
          <SignIn />
        </Route>
      </Switch>
    </div>
  )
}

export default App;

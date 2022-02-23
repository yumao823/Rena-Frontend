import { Switch, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEthers } from '@usedapp/core'
import { ToastContainer } from 'react-toastify'
import Header from 'components/Header'
import Home from 'pages/Home'
import Explore from 'pages/Explore'
import Asset from 'pages/Asset'
import Stats from 'pages/Stats'
import CreateItem from 'pages/CreateItem'
import Collections from 'pages/Collections'
import CreateCollection from 'pages/CreateCollection'
import Account from 'pages/Account'
import Settings from 'pages/Settings'
import Login from 'pages/Login'
import PrivateRoute from 'routes/PrivateRoute'
import 'styles/_App.scss'

function App() {
  const account = useSelector((state) => state.app.account)
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/explore">
          <Explore />
        </Route>
        <Route exact path="/asset/:contract/:id">
          <Asset />
        </Route>
        <Route exact path="/stats">
          <Stats />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <PrivateRoute isAuthenticated={!!account}>
          <Route exact path="/create">
            <CreateItem />
          </Route>
          <Route exact path="/collections">
            <Collections />
          </Route>
          <Route exact path="/collections/create">
            <CreateCollection />
          </Route>
          <Route exact path="/account">
            <Account />
          </Route>
          <Route exact path="/settings">
            <Settings />
          </Route>
        </PrivateRoute>
      </Switch>
      <ToastContainer />
    </div>
  )
}

export default App

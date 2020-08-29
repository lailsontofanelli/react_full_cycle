import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import UserPageList from './pages/UserPageList'

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/users" component={UserPageList} />
    </Switch>
  )
}

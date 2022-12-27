import logo from './logo.svg';
import './App.css';
import Ticket  from './components/Ticket/ticket';
import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        <Ticket/>
      </div>
    )
  }
}


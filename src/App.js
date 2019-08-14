import React, { Component } from 'react'
import Input from './components/Input'
import ListCover from './components/ListCover';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Input/>
        <ListCover/>
      </div>
    )
  }
}

import React, { Component } from 'react';

import UserCreate from './UserCreate';
import LangaugeContext from '../context/LanguageContext';
import ColorContext from '../context/ColorContext';
import LanguageSelector from './LanguageSelector';
class App extends Component {
  state = { language: 'english' };

  onLanguageChange = (language) => {
    this.setState({ language: language });
  };

  render() {
    return (
      <div className='ui container'>
        <LanguageSelector onLanguageChange={this.onLanguageChange} />
        <LangaugeContext.Provider value={this.state.language}>
          <ColorContext.Provider value='red'>
            <UserCreate />
          </ColorContext.Provider>
        </LangaugeContext.Provider>
      </div>
    );
  }
}

export default App;

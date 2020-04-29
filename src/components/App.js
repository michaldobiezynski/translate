import React, { Component } from 'react';

import UserCreate from './UserCreate';
import LangaugeContext from '../context/LanguageContext';

class App extends Component {
  state = { language: 'english' };

  onLanguageChange = (language) => {
    this.setState({ language: language });
  };

  render() {
    return (
      <div className='ui container'>
        <div>
          Select a language:
          <i
            className='flag us'
            onClick={() => this.onLanguageChange('english')}
          />
          <i
            className='flag nl'
            onClick={() => this.onLanguageChange('dutch')}
          />
        </div>
        <LangaugeContext.Provider value={this.state.language}>
          <UserCreate />
        </LangaugeContext.Provider>
      </div>
    );
  }
}

export default App;

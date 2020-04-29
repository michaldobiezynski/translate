import React, { Component } from 'react';
import LangaugeContext from '../context/LanguageContext';

class Button extends Component {
  render() {
    return (
      <button className='ui button primary'>
        <LangaugeContext.Consumer>
          {(value) => (value === 'english' ? 'Submit' : 'Voorleggen')}
        </LangaugeContext.Consumer>
      </button>
    );
  }
}

export default Button;

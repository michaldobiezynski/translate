import React, { Component } from 'react';

import LangaugeContext from '../context/LanguageContext';
import ColorContext from '../context/ColorContext';

class Button extends Component {
  render() {
    return (
      <ColorContext.Consumer>
        {(color) => (
          <button className={`ui button ${color}`}>
            <LangaugeContext.Consumer>
              {(value) => (value === 'english' ? 'Submit' : 'Voorleggen')}
            </LangaugeContext.Consumer>
          </button>
        )}
      </ColorContext.Consumer>
    );
  }
}

export default Button;

import React, { Component } from 'react';
import LangaugeContext from '../context/LanguageContext';

class Button extends Component {
  static contextType = LangaugeContext;

  render() {
    const text = this.context === 'english' ? 'Submit' : 'Voorleggen';
    return <button className='ui button primary'>{text}</button>;
  }
}

export default Button;

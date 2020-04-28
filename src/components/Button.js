import React, { Component } from 'react';
import LangaugeContext from '../context/LanguageContext';

class Button extends Component {
  static contextType = LangaugeContext;

  render() {
    return <button className='ui button primary'>Submit</button>;
  }
}

export default Button;

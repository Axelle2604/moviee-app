import React, { Component } from 'react';
import { LangContext } from '../contexts/LangContext';

export function withLangage(WrappedComponent) {
  return class extends Component {
    render() {
      return (
        <LangContext.Consumer>
          {lang => (
            <WrappedComponent {...this.props} langValue={lang.langValue} />
          )}
        </LangContext.Consumer>
      );
    }
  };
}

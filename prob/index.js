import React, { Component } from 'react';

function ComponentWrapper(WrapperComponent) {
  class Weapper extends Component {
    render() {
      return <WrapperComponent {...this.props} />
    }
  } 
  return Wrapper;
}

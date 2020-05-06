import React, {Component} from 'react';

export default class ErrorBoundary extends Component {
  state = {
    error: false
  };

  componentDidCatch( error, info ) {
    console.log( 'err' );
    console.log( {error, info} );

    this.setState({
      error: true,
    });
  };
  render() {
    if( this.state.error ) {
      return <h1>error!!</h1>
    }
    return this.props.children;
  }
}

/*
  <ErrorBoundary>
    <User />
  </ErrorBoundary>
*/
import React, { Component } from 'react';

export default class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null
  };

  // ref를 설정 할 것임.
  myRef = null;

  constructor( props ) {
    super( props );
    console.log( 'constructed!!');
  }

  static getDerivedStateFromProps( nextProps, prevState ) {
    console.group( 'getDerivedStateFromProps' );
    console.log( 'nextProps : ', nextProps );
    console.log( 'prevState : ', prevState );

    const willReturn = nextProps.color !== prevState.color;
    console.log( 'willReturn : ', willReturn )

    console.groupEnd();

    if( willReturn ) {
      return { color : nextProps.color };
    }
    return null;
  }

  componentDidMount() {
    console.group( 'componentDidMount' );
    console.groupEnd();
  }

  shouldComponentUpdate( nextProps, nextState ) {
    console.group( 'shouldComponentUpdate' );
    console.log( 'nextProps : ', nextProps );
    console.log( 'nextState : ', nextState );
    const willReturn = nextState.number % 4 !== 0;
    console.log( 'willReturn : ', willReturn );
    console.groupEnd();
    //  숫자가 4의 배수라면 리렌더링 하지 않는다.
    return willReturn;
  }

  componentWillUnmount() {
    console.group( 'componentWillUnmount' );
    console.groupEnd();
  }

  handleClick = () => {
    console.clear();
    console.group( 'handelClick' );
    console.log( 'state : ', this.state );
    this.setState({
      number: this.state.number + 1
    });
    console.groupEnd();
  };

  getSnapshotBeforeUpdate( prevProps, prevState ) {
    console.group( 'getSnapshotBeforeUpdate' );
    console.log( 'prevProps : ', prevProps );
    console.log( 'prevState : ', prevState );
    console.groupEnd();

    if( prevProps.color !== this.props.color ) {
      return this.myRef.style.color;
    }
    return null;
  }

  componentDidUpdate( prevProps, prevState, snapshot ) {
    console.group( 'componentDidUpdate' );
    console.log( 'prevProps : ', prevProps );
    console.log( 'prevState : ', prevState );
    if( snapshot ) {
      console.log( '업데이트 되기 직전 색상 : ', snapshot );
    }
    console.groupEnd();
  }

  render() {
    console.group( 'render' );

    const style = {
      color: this.props.color
    };

    console.groupEnd();
    return (
      <div
        style={style}
        ref={ref => (this.myRef = ref)}
        >
        <h1>
          {this.state.number}
        </h1>
        <p>color : {this.state.color}</p>
        <button onClick={this.handleClick}>+</button>
      </div>
    );
  }
}
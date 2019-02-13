import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="main">
          <div className="monitor">Casio
          <p>{this.props.ctr}</p>
          </div>
          <div className="keyboard">
            <button className='button' id='1' onClick={e=>this.props.insertValue(e)}>1</button>
            <button className='button' id='2' onClick={e=>this.props.insertValue(e)}>2</button>
            <button className='button' id='3' onClick={e=>this.props.insertValue(e)}>3</button>
            <button className='button' id='+' onClick={e=>this.props.insertValue(e)}>+</button>
            <button className='button' id='4' onClick={e=>this.props.insertValue(e)}>4</button>
            <button className='button' id='5' onClick={e=>this.props.insertValue(e)}>5</button>
            <button className='button' id='6' onClick={e=>this.props.insertValue(e)}>6</button>
            <button className='button' id='-' onClick={e=>this.props.insertValue(e)}>&#8212;</button>
            <button className='button' id='7' onClick={e=>this.props.insertValue(e)}>7</button>
            <button className='button' id='8' onClick={e=>this.props.insertValue(e)}>8</button>
            <button className='button' id='9' onClick={e=>this.props.insertValue(e)}>9</button>
            <button className='button' id='/' onClick={e=>this.props.insertValue(e)}>&#247;</button>
            <button className='button' id='<' onClick={this.props.deleteLastOne}>&#60;</button>
            <button className='button' id='0' onClick={e=>this.props.insertValue(e)}>0</button>
            <button className='button' id='=' onClick={this.props.calculate}>=</button>
            <button className='button' id='*' onClick={e=>this.props.insertValue(e)}>&#215;</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.calculator,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    insertValue: (e)=>dispatch({type: 'GET_VALUE', value: e.currentTarget.id}),
    calculate: ()=>dispatch({type: 'CALCULATE'}),
    deleteLastOne: ()=>dispatch({type: 'DELETE_LAST_ONE'}),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
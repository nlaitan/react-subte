import React, { Component } from 'react';
import Line from './line';


class Jumbotron extends Component {
	render(){
	    return (
			<div className="jumbotron">
	            <hr className="my-4"></hr>
	            <p>Presione un botón para ver el estado de la linea</p>
	            <div className="line-buttons">
	              <Line name="A" number="0" /> 
	             
	              <Line name="B" number="1"/> 
	              
	              <Line name="C" number="2"/> 
	              
	              <Line name="D" number="3" /> 
	              
	              <Line name="E" number="4"/> 
	              
	              <Line name="H" number="5"/> 
	              
	              <Line name="P" number="6"/> 
	              
	              <Line name="U" number="7"/> 
	            </div>
	        </div>
	    );
  	}
}

export default Jumbotron;

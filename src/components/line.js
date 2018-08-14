import React, { Component } from 'react';
import request from 'superagent';
import Moment from 'react-moment';
import moment from 'moment';
import 'moment-timezone';
import 'moment/locale/es';

class Line extends Component {
	constructor(){
		super();
		this.state = {
			lineStatus: '',
			stateClass: '',
			lastUpdate: '',
			lastUpdateClass: 'invisible'
		}
	}
	viewState() {
		request.get('/api/subtes/' + this.props.number)
		.end((err,res) => {
			const status = res.body.status;
			this.setState({
				lineStatus: status,
			});
			if (status == 'Normal') {
				this.setState({
					stateClass: 'success-status',
				});	
			} else {
				this.setState({
					stateClass: 'warning-status',
				});	
			};
			var now = moment();
			this.setState({
				lastUpdateClass: 'visible',
				lastUpdate: now
			});

		})
	}
	setLastHour() {
		
		console.log(now);
	}
	render() {
		const myUrl = "/api/subtes/" + this.props.number;
	    const rowClass = "row line-row " + this.state.stateClass;
	    const updateClass = "last-update-text " + this.state.lastUpdateClass;
	    return (
			<div className={rowClass}>
				<div className="col-3 col-md-3 col-sm-3">
					<a className="btn btn-primary btn-md" role="button" 
					id={this.props.number}
					onClick={this.viewState.bind(this)} >
						Linea {this.props.name}
					</a>
				</div>
				<div className="col-9 col-md-9 col-sm-9">
					<div className="container">
						<div className="row large-row">
							<label className="status-text"> {this.state.lineStatus} </label>
						</div>
						<div className="row tiny-row">
							<label className={updateClass}>
								<em>
								<Moment fromNow locale="es">{this.state.lastUpdate}</Moment>
								</em>
							</label>
						</div>
					</div>
				</div>
				
			</div>
	    );
  	}
}

export default Line;


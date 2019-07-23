import React from 'react';
import './card.css';
import {Project} from '../year/year';
import {State} from "../reducers";
import { connect } from "react-redux";

type CardProps={
    project: Project;
    shift:number;
}
const mapStateToProps = (state: State) => ({
    project: state.card_reducer.project,
    shift: state.card_reducer.shift
  })

 class Card extends React.Component<CardProps>{

    render(){
    return (
     <div className="Card-wrapper" style={{left: this.props.shift.toString()+'px'}}>
        <div className="Card-container">
            <div className="Column-one">
                <img src={this.props.project.picture} alt="ai"/>
            </div>
            <div className="Column-two">
                <h5>{this.props.project.date}</h5>
                <h4>{this.props.project.title}</h4>
                <p>
                {this.props.project.description1}
                <br/>
                <br/>
                {this.props.project.description2}
                </p>
                <span>{this.props.project.progress}% реализовано</span>
            </div>
        </div>
        <div className="progress">
            <div style={{backgroundColor: 'blue', height: '17px', width: this.props.project.progress.toString()+'%'}}></div>
        </div>
     </div>
    );
    }
}

export default connect(mapStateToProps)(Card);

  
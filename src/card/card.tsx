import React from 'react';
import './card.css';
import {Project} from '../App';

type Props = {
   project: Project;
}

export default class Card extends React.Component<Props>{

    render(){
    return (
     <div className="Card-wrapper">
        <div className="Card-container">
            <div className="Column-one">
                <img src={this.props.project.picture}/>
            </div>
            <div className="Column-two">
                <h3>{this.props.project.date}</h3>
                <h2>{this.props.project.title}</h2>
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
  
  
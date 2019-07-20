import React from 'react';
import './year.css';
import Card from '../card/card';
import {DATA} from '../mock-data';
import { connect } from "react-redux";
import { State} from "../reducers";

export interface Project {
  id:number;
  date: string;
  title: string;
  description1: string;
  description2: string;
  progress: number;
  picture: string;
}

export type ProjectProps = {
  project: Project;
  shift: number;
  goToFebruary?:any;
  goToMay?:any;
  goToJune?:any;
  goToOctober?:any;
}

const mapStateToProps = (state:State) => ({
    project: state.project,
    shift: state.shift
  })


const mapDispatchToProps = (dispatch:any) => {
    return {
      goToFebruary: () => dispatch({type: "SHIFT_TO_FEBRUARY"}),
      goToMay: () => dispatch({type: "SHIFT_TO_MAY"}),
      goToJune: () => dispatch({type: "SHIFT_TO_JUNE"}),
      goToOctober: () => dispatch({type: "SHIFT_TO_OCTOBER"})
    }
  }

export class YearProjects extends React.Component<ProjectProps> {
  
  render(){
    return (
      <div>
        <Card project = {this.props.project} shift = {this.props.shift} />
        <div className="buttonContainer">
          <hr/>
          <button className="february" onClick={this.props.goToFebruary}></button>
          <button className="may" onClick={this.props.goToMay}></button>
          <button className="june" onClick={this.props.goToJune}></button>
          <button className="october" onClick={this.props.goToOctober}></button>
        </div>
        <div className="bottomRow">
          <div className="bottomRowContainer february">
              <p className="small">{DATA[0].date}</p>
              <p className="big">{DATA[0].title}</p>
              <p className="small">{DATA[0].progress}% реализовано</p>
          </div>
          <div className="bottomRowContainer may">
            <p className="small">{DATA[1].date}</p>
            <p className="big">{DATA[1].title}</p>
            <p className="small">{DATA[1].progress}% реализовано</p>
          </div>
          <div className="bottomRowContainer june">
            <p className="small">{DATA[2].date}</p>
            <p className="big">{DATA[2].title}</p>
            <p className="small">{DATA[2].progress}% реализовано</p>
          </div>
          <div className="bottomRowContainer october">
            <p className="small">{DATA[3].date}</p>
            <p className="big">{DATA[3].title}</p>
            <p className="small">{DATA[3].progress}% реализовано</p>
          </div>
        </div>
      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(YearProjects);

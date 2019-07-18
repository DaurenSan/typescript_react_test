import React from 'react';
import './App.css';
import Card from './card/card';
import {DATA} from './mock-data';


export interface Project {
  id:number;
  date: string;
  title: string;
  description1: string;
  description2: string;
  progress: number;
  picture: string;
}

type State = {
  project: Project;
  shift: number;
};
type Props = {
  project?: Project;
  shift?: number;
};

export default class ClassCounter extends React.Component<Props, State> {
  readonly state: State = {
    project: DATA[0],
    shift: 170
  };

  openCard(arrayItem:number, shiftWidth:number){
    this.setState({
      project: DATA[arrayItem],
      shift: shiftWidth
    })
  }

  render(){
    return (
      <div>
        <div className="topRow">
          <h2>Проекты и результаты</h2>
          <select>
            <option>Период времени</option>
          </select>
          <select>
            <option>Исполнитель</option>
          </select>
        </div>        
        <Card project = {this.state.project} shift = {this.state.shift} />
        <div className="buttonContainer">
          <hr/>
          <button className="february" onClick={()=>this.openCard(0, 170)}></button>
          <button className="may" onClick={()=>this.openCard(1, 400)}></button>
          <button className="june" onClick={()=>this.openCard(2, 430)}></button>
          <button className="october" onClick={()=>this.openCard(3, 600)}></button>
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



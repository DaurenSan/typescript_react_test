import React from 'react';
import './App.css';
import Card from './card/card';
import {DATA} from './mock-data'

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
};
type Props = {
  project?: Project;
};

export default class ClassCounter extends React.Component<Props, State> {
  readonly state: State = {
    project: DATA[0]
  };
  render(){
    return (
      <Card project = {this.state.project} />
    );
  }

}



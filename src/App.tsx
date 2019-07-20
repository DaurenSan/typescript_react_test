import React from 'react';
import './App.css';
import { connect } from "react-redux";
import arrowLeft from "./arrow-left.png";
import arrowRight from "./arrow-right.png";
import YearProjects from './year/year';
import {State} from "./reducers";


const mapStateToProps = (state: State) => ({
  year:state.year
})


type AppProps = {
  year: string
}


class App extends React.Component<AppProps> {

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
          <div className="ArrowsContainer">
            <div className="ArrowLeft">
              <div>{this.props.year}</div>
              <img src={arrowLeft} alt="left"/>
            </div>
            <div className="ArrowRight">
              <div>{this.props.year}</div>
              <img src={arrowRight} alt="right"/>
            </div>
          </div>
          <div className="YearContainer">
            <YearProjects />
          </div>
        </div>
    )}
}

export default connect(mapStateToProps)(App);
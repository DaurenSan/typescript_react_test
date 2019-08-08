import React from 'react';
import './App.css';
import arrowLeft from "./arrow-left.png";
import arrowRight from "./arrow-right.png";
import {Route} from "react-router-dom";
import { ConnectedRouter } from 'connected-react-router';
import {history} from './configureStore';
import { History } from 'history';
import YearProjects from './year/year';
import EmptyClass from "./Empty";
import {State} from "./reducers";
import { connect } from "react-redux";



type AppProps = {
  history?: History;
  location?: string
} 
const mapStateToProps = (state: State) => ({
  location: state.router.location.state
})

class App extends React.Component<AppProps> {

  render(){
    return (
      <ConnectedRouter history={history}>
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
                <div className="ArrowSign">{history.location.state-1}</div>
                <img src={arrowLeft} alt="left" onClick={() => {history.push('/', 2019)}}/>
              </div>
              <div className="ArrowRight">
                <div className="ArrowSign">{history.location.state+1}</div>
                <img src={arrowRight} alt="right" onClick={() => {history.push('/2020', 2020)}}/>
              </div>
          </div>
          <div className="YearContainer">
            <Route exact path="/" component={YearProjects} />
            <Route path="/2020" component={EmptyClass} />
          </div>
          </ConnectedRouter>
          )}
}

export default connect(mapStateToProps)(App);
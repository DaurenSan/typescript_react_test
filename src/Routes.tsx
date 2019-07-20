import React from 'react';
import {Route, RouteComponentProps, withRouter } from "react-router-dom";

import EmptyClass from "./Empty";

type State = {
    year: string;
  };

class Routes extends React.Component<RouteComponentProps, State> {
    readonly state: State = {
        year: ''
      };
      
    render(){
        return (
            <div>
                    <Route className="YearContainer" exact path="/:" component={EmptyClass} />
            </div>
        )}
    }

export default withRouter(Routes);
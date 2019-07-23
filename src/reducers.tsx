import {Project} from './year/year';
import {DATA} from './mock-data';
import { combineReducers } from 'redux';
import { RouterState, connectRouter } from 'connected-react-router';
import { History } from 'history';


export interface card{
    project: Project;
    shift: number;
}
export interface State {
    card_reducer: card;
    router: RouterState;
  }
 

export default (history:History) => combineReducers({
    router: connectRouter(history),
    card_reducer: function cardReducer(state={project: DATA[0],shift: 170}, action: any) {
        if(action.type === "SHIFT_TO_FEBRUARY"){
            return Object.assign({}, state, {project: DATA[0], shift: 170})
        }else if(action.type === "SHIFT_TO_MAY"){
            return Object.assign({}, state, {project: DATA[1], shift: 400})
        }else if(action.type === "SHIFT_TO_JUNE"){
            return Object.assign({}, state, {project: DATA[2], shift: 430})
        }else if(action.type === "SHIFT_TO_OCTOBER"){
            return Object.assign({}, state, {project: DATA[3], shift: 600})
        } 
        return state
    }
    
  })
  


  
 
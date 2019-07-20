import {Project} from './year/year';
import {DATA} from './mock-data';

export type State = {
    project: Project;
    shift: number;
    year: string;
  }
  
export const initialState: State = {
    project: DATA[0],
    shift: 170,
    year: '2010'
  }

export function reducer(state = initialState, action: any) {
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
  


  
 
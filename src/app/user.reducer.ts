import { Action } from '@ngrx/store';
import { UserActions, UserActionTypes } from './user.actions';


export const userFeatureKey = 'userState';

export interface State {
  users: any[],
  error: string
}

export const initialState: State = {
  users: [],
  error: ''
};

export function reducer(state = initialState, action: UserActions): State {
  switch (action.type) {

    case UserActionTypes.YUsers: 
    return {
      ...state 
    }

    case UserActionTypes.YUsersSuccess: 
    return {
      ...state,
      users: action.payload.data,
      error: ''
    }

    case UserActionTypes.YUsersFailure: 
    return {
      ...state,
      users: [],
      error: action.payload.error
    }

    default:
      return state;
  }
}

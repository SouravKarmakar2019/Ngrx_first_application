import { Action } from '@ngrx/store';

export enum UserActionTypes {
  YUsers = '[User] Y Users',
  YUsersSuccess = '[User] Y Users Success',
  YUsersFailure = '[User] Y Users Failure',
}

export class YUsers implements Action {
  readonly type = UserActionTypes.YUsers;
}

export class YUsersSuccess implements Action {
  readonly type = UserActionTypes.YUsersSuccess;
  constructor(public payload: { data: any[] }) { }
}

export class YUsersFailure implements Action {
  readonly type = UserActionTypes.YUsersFailure;
  constructor(public payload: { error: string }) { }
}

export type UserActions = YUsers | YUsersSuccess | YUsersFailure;


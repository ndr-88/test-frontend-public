import { isDevMode } from '@angular/core';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { CharactersState, charactersReducer } from './characters.reducer';

export interface State {
  charactersGetDTO: CharactersState;
}

export const reducers: ActionReducerMap<State> = {
  charactersGetDTO: charactersReducer,
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];

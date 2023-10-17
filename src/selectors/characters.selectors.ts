import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CharactersState } from '../reducers/characters.reducer';

const characters = createFeatureSelector<CharactersState>('charactersGetDTO');

export const selectCharacters = createSelector(
  characters,
  (state: CharactersState) => state.charactersGetDTO.results
);

export const selectInfo = createSelector(
  characters,
  (state: CharactersState) => state.charactersGetDTO.info
);

export const selectCharactersGetDTO = createSelector(
  characters,
  (state: CharactersState) => state.charactersGetDTO
);

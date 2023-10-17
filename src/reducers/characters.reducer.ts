import { createReducer, on } from '@ngrx/store';
import { CharacterGetDTO } from 'src/models/characterGetDTO';
import { CharactersActions } from '../actions/characters.actions';

export const charactersFeatureKey = 'characters';

export interface CharactersState {
  charactersGetDTO: CharacterGetDTO;
}

export const initialState: CharactersState = {
  charactersGetDTO: {
    info: {
      count: 0,
      pages: 0,
      prev: '',
      next: '',
    },
    results: [],
  },
};

export const charactersReducer = createReducer(
  initialState,
  on(
    CharactersActions.loadCharactersSuccess,
    (state, action): CharactersState => {
      return {
        ...state,
        charactersGetDTO: action.charactersGetDTO,
      };
    }
  ),
  on(CharactersActions.updateCharacters, (state, action): CharactersState => {
    return {
      ...state,
      charactersGetDTO: {
        ...state.charactersGetDTO,
        results: action.characters,
      },
    };
  }),

  on(CharactersActions.loadMoreCharacters, (state, action): CharactersState => {
    return {
      ...state,
      charactersGetDTO: {
        ...state.charactersGetDTO,
        results: [
          ...state.charactersGetDTO.results,
          ...action.charactersGetDTO.results,
        ],
        info: action.charactersGetDTO.info,
      },
    };
  })
);

import { createActionGroup, props } from '@ngrx/store';
import { CharacterGetDTO } from 'src/models/characterGetDTO';
import { Result } from 'src/models/result';

export const CharactersActions = createActionGroup({
  source: 'Characters',
  events: {
    'Load Characters Success': props<{ charactersGetDTO: CharacterGetDTO }>(),
    'Load Characters Failure': props<{ error: unknown }>(),
    'Update Characters': props<{ characters: Result[] }>(),
    'Load More Characters': props<{ charactersGetDTO: CharacterGetDTO }>(),
  },
});

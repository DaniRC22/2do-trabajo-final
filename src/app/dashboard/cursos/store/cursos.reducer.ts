import { Action, createReducer, on } from '@ngrx/store';
import * as CursosActions from './cursos.actions';
import { Curso } from 'src/app/shared/modules/cursos.model';
import { createCurso } from './cursos.actions';

export const cursosFeatureKey = 'cursos';

export interface State {
data: Curso[],
loading: boolean;
error: unknown;
}

export const initialState: State = {
data: [],
loading: false,
error: null,
};

export const reducer = createReducer(
  initialState,

  on(CursosActions.loadCursoss, state => {
    return {
      ...state,
      loading:true,
    }
  }),
  on(CursosActions.loadCursossSuccess, (state, action) => {
    return {
      ...state,
      loading: false,
      data: action.data,
    }
  }),
  on(CursosActions.loadCursossFailure, (state, action) => {
    return {
      ...state,
      loading: false,
      error:action.error,
    }
  } ),

  on(CursosActions.createCurso, (state) => {
    return {
      ...state,
      loading: true,
    }
  }),

  on(CursosActions.createCursoSuccess, (state, action) => {
    return {
      ...state,
      loading: false,
      data: [
        ...state.data,
        action.data]
    }
  }),
  on(CursosActions.resetCursoState, () => initialState),

  on(CursosActions.editCurso, (state) => {
    return {
      ...state,
      loading: true,
    }
  }),

   on(CursosActions.editCursoSuccess, (state, action) => {
    return {
      ...state,
      loading: false,
      data: [
        ...state.data,
        action.data
        ]
    }
  }),
  

   on(CursosActions.deleteCurso, (state) => {
     return {
       ...state,
       loading: true,
     }
   }),

   on(CursosActions.deleteCursoSuccess, (state, action) => {
     return {
       ...state,
       loading: false,
       data: [
        ...state.data,
        ]

     }
   }),
  
);

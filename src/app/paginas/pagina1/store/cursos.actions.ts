import { createAction, props } from '@ngrx/store';
import { Curso } from 'src/app/shared/modules/cursos.model';

export const loadCursoss = createAction(
  '[Cursos] Load Cursoss'
);

export const loadCursossSuccess = createAction(
  '[Cursos] Load Cursoss Success',
  props<{ data: Curso[] }>()
);

export const loadCursossFailure = createAction(
  '[Cursos] Load Cursoss Failure',
  props<{ error: any }>()
);

export const createCurso = createAction(
  '[Cursos] create Cursoss',
  props<{ data: { curso: string, profesor: string, email: string } }>()
)

export const createCursoSuccess = createAction(
  '[Cursos] create Cursoss Success',
  props<{ data: Curso } >()
)

export const createCursoFailure = createAction(
  '[Cursos] create Cursoss Failure',
  props<{ error: unknown } >()
)

export const resetCursoState = createAction('[Cursos] Reset Curso State')

export const editCurso = createAction(
  '[Cursos] edit Cursoss',
  (curso: Curso) => ({ curso })
)

export const editCursoSuccess = createAction(
  '[Cursos] edit Cursoss Success',
  (curso: Curso) => ({ curso })
)

export const editCursoFailure = createAction(
  '[Cursos] edit Cursoss Failure',
  props<{ error: unknown } >()
)

 export const deleteCurso = createAction(
   '[Cursos] delete Cursoss',
   props<{id:number }>()
 )

 export const deleteCursoSuccess = createAction(
   '[Cursos] delete Cursoss Success',
   props<{ id:number } >()
 )

 export const deleteCursoFailure = createAction(
  '[Cursos] create Cursoss Failure',
  props<{ error: unknown } >()
)

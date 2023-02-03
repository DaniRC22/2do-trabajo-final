import { createSelector } from "@ngrx/store";
import { AppState } from "src/app/shared/modules/app-state.model";



export const authStateSelector = (appState: AppState) => appState.auth;
export const authenticatedUserSelector = createSelector(authStateSelector, (authState) => authState.authenticatedUser);
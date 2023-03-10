import { createReducer, on } from "@ngrx/store";
import { User } from "src/app/shared/modules/user.model";
import { setAuthenticatedUser, unsetAuthenticatedUser } from "./auth.actions";

export const authFeatureKey = 'auth'

export interface AuthState {
    authenticatedUser: User | null;
}

const initialState: AuthState = {
    authenticatedUser: null,
};

export const authReducer = createReducer(initialState,
on(setAuthenticatedUser,(oldState, payLoad) => {
    return {
        ...oldState,
        authenticatedUser: payLoad.authenticatedUser
    }
}),
on(unsetAuthenticatedUser, (oldState) => ({...oldState, authenticatedUser: null}))
);
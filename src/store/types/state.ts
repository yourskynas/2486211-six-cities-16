import { store } from '..';
import { AuthorizationStatus } from '../../constants';

export type UserProcess = {
  authorizationStatus: keyof typeof AuthorizationStatus;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type Selector = Pick<State, keyof State>;

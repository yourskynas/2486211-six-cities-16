import { NameSpace } from '../../constants';
import { Selector } from '../types/state';

export const selectAuthorizationStatus = (state: Selector) => state[NameSpace.USER].authorizationStatus;

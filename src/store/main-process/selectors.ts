import { NameSpace } from '../../constants';
import { Selector } from '../types/state';

export const selectError = (state: Selector) => state[NameSpace.MAIN].error;

export const selectUserName = (state: Selector) => state[NameSpace.MAIN].userName;

export const selectSortingStatus = (state: Selector) => state[NameSpace.MAIN].sorting;

export const selectCity = (state: Selector) => state[NameSpace.MAIN].city;

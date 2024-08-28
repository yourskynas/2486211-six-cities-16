import { NameSpace } from '../../constants';
import { Selector } from '../types/state';

export const selectError = (state: Selector) => state[NameSpace.Main].error;

export const selectUserName = (state: Selector) => state[NameSpace.Main].userName;

export const selectSortingStatus = (state: Selector) => state[NameSpace.Main].sorting;

export const selectCity = (state: Selector) => state[NameSpace.Main].city;

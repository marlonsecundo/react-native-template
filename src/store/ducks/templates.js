import Immutable from 'seamless-immutable';
import { createActions, createReducer } from 'reduxsauce';

const { Types, Creators } = createActions({});

const INITIAL_STATE = Immutable({});

export default createReducer(INITIAL_STATE, {});

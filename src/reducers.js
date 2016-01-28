import { combineReducers } from 'redux';

import {
  CHANGE_PRINTER,
  REQUEST_PRINTERS,
  RECEIVE_PRINTERS
} from './constants.js';

const printersInitial = {
  isFetching: false,
  list: [],
  active: 'pr2402'
}

function printers(state = printersInitial, action) {
  switch (action.type) {
    case REQUEST_PRINTERS:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_PRINTERS:
      return Object.assign({}, state, {
        isFetching: false,
        printers: action.printers
      })
    case CHANGE_PRINTER:
      return Object.assign({}, state, {
        active: action.printer
      })
    default:
      return state
  }
}

function optionsByPrinter(state = {}, action) {
  switch (action.type) {
    case REQUEST_OPTIONS:
      let request = {};

      request[action.printer] = {
        isFetching: true,
        availableOptions: {},
        options: {}
      }
      return Object.assign({}, state, request);
    case RECEIVE_OPTIONS:
      const { printer, options } = action;
      let receive = {};

      receive[printer] = {
        isFetching: false,
        availableOptions: options,
        options: {}
      };
      return Object.assign({}, state, receive);
    default:
      return state;
  }
}

      

const rootReducer = combineReducers({
  printers
});

export default rootReducer;

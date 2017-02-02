/**
 * @flow
 * @module currencyReducer
 *
 * @author Oleg Nosov <olegnosov1@gmail.com>
 * @license MIT
 *
 * @description
 * Currency reducer for cart
 *
 */
import * as actionTypes from '../../actionTypes';

const initialState = 'USD';

const currencyActions = {
  [actionTypes.CART_SET_CURRENCY]:
    (
      _,
      { currency } : CartSetCurrencyActionType,
    ) : string => currency,
};

export default (
  state : string = initialState,
  action,
) =>
  currencyActions[action.type]
    ? currencyActions[action.type](state, action)
    : state;
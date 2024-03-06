export default function ExchangeRateReducer(state, action) {
  switch (action.type) {
    case "swap":
      return {
        ...state,
        isSwap: !state.isSwap,
        currence1: state.currence2,
        currence2: state.currence1,
      };

    case "SET_RATES": {
      return {
        ...state,
        rates: action.rates,
      };
    }

    case "SET_COUNTRIES": {
      return {
        ...state,
        countries: action.countries,
      };
    }

    default:
      return state;
  }
}

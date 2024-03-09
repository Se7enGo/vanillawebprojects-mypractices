export default function CountdownContextReducer(state, action) {
  console.log("action :>> ", action);
  switch (action.type) {
    case "SET_YEAR": {
      return { ...state, year: action.payload };
    }

    case "SET_DAY": {
      return { ...state, days: action.payload };
    }
    case "SET_HOURS": {
      return { ...state, hours: action.payload };
    }
    case "SET_MINUTES": {
      return { ...state, minutes: action.payload };
    }
    case "SET_SECONDS": {
      return { ...state, seconds: action.payload };
    }
    default:
      return state;
  }
}

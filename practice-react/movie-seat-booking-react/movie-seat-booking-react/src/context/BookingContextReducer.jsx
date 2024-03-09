export default function BookingContextReducer(state, action) {
  switch (action.type) {
    case "SELECT_SEAT":
      const nextSet = new Set([...state.selectedSeat]);
      if (nextSet.has(parseInt(action.payload))) {
        nextSet.delete(parseInt(action.payload));
      } else {
        nextSet.add(parseInt(action.payload));
      }
      return {
        ...state,
        selectedSeat: nextSet,
      };

    case "PICK_MOVIE": {
      let pickedId = null;
      for (let index = 0; index < state.movies.length; index++) {
        const element = state.movies[index];
        if (element.id != action.payload) {
          continue;
        } else {
          pickedId = element.id;
          break;
        }
      }
      console.log("state.selectedSeat :>> ", state.selectedSeat);
      return {
        ...state,
        selectedSeat: new Set(),
        pickedMovie: pickedId,
      };
    }

    default:
      return state;
  }
}

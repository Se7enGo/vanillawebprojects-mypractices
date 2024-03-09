import "./App.css";
import Picker from "./components/Picker";
import Example from "./components/Example";
import Screen from "./components/Screen";
import Chairs from "./components/Chairs";
import Text from "./components/Text";
import BookingContextProvider from "./context/BookingContextProvider";
function App() {
  return (
    <BookingContextProvider>
      <div className="container">
        <Picker></Picker>
        <Example></Example>
        <Screen></Screen>
        <Chairs></Chairs>
        <Text></Text>
      </div>
    </BookingContextProvider>
  );
}

export default App;

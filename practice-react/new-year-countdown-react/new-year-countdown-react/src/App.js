import "./App.css";
import Content from "./components/Content";
import Foot from "./components/Foot";
import Header from "./components/Header";
import CountdownContextProvider from "./context/CountdownContextProvider";

function App() {
  return (
    <CountdownContextProvider>
      <Header></Header>
      <Content></Content>
      <Foot></Foot>
    </CountdownContextProvider>
  );
}

export default App;

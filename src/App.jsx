import "./App.css";
import Foods from "./components/foods/Foods";
import LineChart from "./components/LineChart/LineChart";
import Header from "./components/NavBar/Header/Header";
import SimpleBarChart from "./components/SimpleBarChart/SimpleBarChart";

function App() {
  return (
    <>
      <Header />
      <Foods></Foods>
      <LineChart></LineChart>
      <SimpleBarChart></SimpleBarChart>
    </>
  );
}

export default App;

import { useState } from "react";
import logo from "./logo.svg";
import Button from "./components/Button";
import Calender from './components/Calender'

import "./global/theme.less";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <Button onClick={() => setCount((c) => c + 1)} color="success">
        count is: {count}
      </Button> */}
      <Calender />
    </div>
  );
}

export default App;

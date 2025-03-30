import { FC } from "react";
import "../style/App.css";
import { Timer } from "../../components/Timer";
import { Settings } from "../../components/Settings";

const App: FC = () => {
  return (
    <div className="App">
      <Settings />
      <Timer />
    </div>
  );
};

export default App;

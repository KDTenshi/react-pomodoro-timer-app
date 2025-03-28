import { FC, useState } from "react";
import "../style/App.css";
import { Timer } from "../../components/Timer";
import { Settings } from "../../components/Settings";

const App: FC = () => {
  const [isPopupShown, setIsPopupShown] = useState(false);
  const [workTime, setWorkTime] = useState(15);
  const [restTime, setRestTime] = useState(5);

  const showPopup = () => {
    setIsPopupShown(true);
  };

  return (
    <div className="App">
      <Settings
        isShown={isPopupShown}
        setIsShown={setIsPopupShown}
        workTime={workTime}
        restTime={restTime}
        setWorkTime={setWorkTime}
        setRestTime={setRestTime}
      />
      <Timer showPopup={showPopup} workTime={workTime} restTime={restTime} />
    </div>
  );
};

export default App;

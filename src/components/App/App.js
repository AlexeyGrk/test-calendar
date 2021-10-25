import moment from "moment";
import { useState } from "react";

import CalendarLayout from "../Calendar/CalendarLayout";
import DetailsInform from "../DetailsInform/DetailsInform";
import Header from "../Header/Header";
import MainInformation from "../MainInformation/MainInformation";
import Modal from "../Modal/Modal";

function App() {
  moment.updateLocale("en", { week: { dow: -1 } });
  const [currentMomentToday, setCurrentMomentToday] = useState(moment());
  const [showModal, setShowModal] = useState(false);

  const startDayOfCurrentMonth = currentMomentToday
    .clone()
    .startOf("month")
    .startOf("week");
  const prevHandler = () => {
    setCurrentMomentToday((prev) => prev.clone().subtract(1, "month"));
    console.log("prev");
  };
  const nextHandler = () => {
    setCurrentMomentToday((prev) => prev.clone().add(1, "month"));
  };
  return (
    <div className="App">
      <Header />
      <div className="body">
        <MainInformation />

        <CalendarLayout
          setShowModal={setShowModal}
          currentMomentToday={currentMomentToday}
          startDayOfCurrentMonth={startDayOfCurrentMonth}
          prevHandler={prevHandler}
          nextHandler={nextHandler}
        />
      </div>
      <Modal className={showModal ? "backdrop" : "is-hidden"}>
        <DetailsInform setShowModal={setShowModal}></DetailsInform>
      </Modal>
    </div>
  );
}

export default App;

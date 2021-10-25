import React from "react";
import { useDispatch } from "react-redux";
import { setCurrentDayData } from "../../redux/slice/currentDaySlice";
const CalendarLayout = ({
  startDayOfCurrentMonth,
  prevHandler,
  nextHandler,
  currentMomentToday,
  setShowModal,
}) => {
  const totalDays = 35;
  const currentDay = startDayOfCurrentMonth.clone();
  const totalDaysArray = [...Array(totalDays)].map(() =>
    currentDay.add(1, "day").clone()
  );

  const dispatch = useDispatch();

  const activeDateHandler = (data) => {
    setShowModal(true);
    dispatch(
      setCurrentDayData({
        month: data.format("MMMM"),
        day: data.format("DD"),
        weekday: data.format("dddd"),
      })
    );
  };

  return (
    <div className="calendar-container">
      <div className="calendar-layout">
        <div className="month-indicator">
          <button onClick={prevHandler}>&#60;</button>
          <p>
            {currentMomentToday.format("MMMM").toUpperCase()}
            &nbsp;
            {currentMomentToday.format("YYYY")}
          </p>
          <button onClick={nextHandler}>&#62;</button>
        </div>
        <div className="date-day-grid">
          <div className="date-grid">
            {totalDaysArray.map((daysItem) => (
              <button
                onClick={() => activeDateHandler(daysItem)}
                key={daysItem.format("DDMMYYYY")}
              >
                {daysItem.format("DD")}
              </button>
            ))}
          </div>

          <div className="day-of-week">
            <div>S</div>
            <div>M</div>
            <div>T</div>
            <div>W</div>
            <div>T</div>
            <div>F</div>
            <div>S</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarLayout;

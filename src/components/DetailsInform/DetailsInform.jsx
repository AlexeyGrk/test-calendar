import React from "react";
import { useSelector } from "react-redux";
const DetailsInform = ({ setShowModal }) => {
  const currentData = useSelector((state) => state.currentData.data);

  const toggleShowModal = () => {
    setShowModal(!true);
  };
  return (
    <div className="details-info-container">
      <form className="details-info-form" action="">
        <label htmlFor="info-month">
          {" "}
          Month
          <input
            id="info-month"
            className="details-info-input-item"
            type="data"
            defaultValue={currentData.month}
            readOnly
          />
        </label>
        <label htmlFor="info-day">
          Day
          <input
            className="details-info-input-item"
            id="info-day"
            readOnly
            type="data"
            value={`${currentData.day}th ${currentData.weekday}`}
          />
        </label>
        <button className="close-btn" onClick={toggleShowModal} type="button">
          X
        </button>
      </form>
    </div>
  );
};

export default DetailsInform;

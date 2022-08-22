import { useEffect, useState } from "react";
import React, { useSelector, useDispatch } from "react-redux";
import { getTime } from "../actions";
import Card from "../UI/Card";
import Button from "../UI/Button";

function Main() {
  const dispatch = useDispatch();
  const setNewCity = () => {
    dispatch(getTime(city));
  };
  const [city, setCity] = useState("Gurugram");
  const current_time = useSelector((state) => state.setData);

  return (
    <div>
      <Card>
        <div className="text-center mt-3 text-4xl font-semibold text-violet-600 uppercase">
          Live Time
        </div>
        <div className="text-center text-red-600 text-6xl mt-6">
          {current_time.details.datetime}
        </div>

        <div className="text-center text-violet-600 text-2xl mt-6">
          {current_time.details.requested_location}

          <div className="mt-4 flex justify-center ">
            <input
              className="border-solid hover:border-dotted outline-violet-600"
              type="text"
              placeholder="Enter City Name"
              onChange={(e) => {
                setCity(e.target.value);
              }}
            />
            <Button onClick={setNewCity}>Get</Button>
          </div>
        </div>

        <div className="grid place-content-center mt-8">
          <div className="flex space-x-6"></div>
        </div>
      </Card>
    </div>
  );
}

export default Main;

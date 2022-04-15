import React, { useEffect, useState } from "react";

export const Timer = () => {
  const [initialTime, setInitialTime] = useState(10000);
  const [startTimer, setStartTimer] = useState(false);


	useEffect(() => {
		setStartTimer(true);

    if (initialTime > 0) {
      setTimeout(() => {
        setInitialTime(initialTime - 1);
      }, 1000);
    }

    if (initialTime === 0 && startTimer) {
      console.log("done");
      setStartTimer(false);
    }
  }, [initialTime, startTimer]);

	const secondsToDhms = seconds => {
		seconds = Number(seconds);
		var d = Math.floor(seconds / (3600*24));
		var h = Math.floor(seconds % (3600*24) / 3600);
		var m = Math.floor(seconds % 3600 / 60);
		var s = Math.floor(seconds % 60);
		
		var dDisplay = d > 0 ? d + (d == 1 ? " : " : " : ") : "";
		var hDisplay = h > 0 ? h + (h == 1 ? " : " : " : ") : "";
		var mDisplay = m > 0 ? m + (m == 1 ? " : " : " : ") : "";
		var sDisplay = s > 0 ? s + "" : " ";
		return dDisplay + hDisplay + mDisplay + sDisplay;
	}

  return <MyTimer initialTime={secondsToDhms(initialTime)} />
  
}

const MyTimer = ({ initialTime }) => {
  return <div className="timer flex items-center py-5">{initialTime}</div>;
};
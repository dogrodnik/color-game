import React, { useState, useEffect, useContext } from "react";
import { store } from "../../store";

export const Card = ({ cardNum, colors }) => {
  const globalState = useContext(store);
  const { dispatch } = globalState;
  const {
    state: { colorsArray }
  } = useContext(store);
  const [color, setColor] = useState("");
  useEffect(() => {
    setColor(colors[Math.floor(Math.random() * colors.length)]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (color !== "") {
      const pushedArray = colorsArray;
      if (pushedArray[cardNum - 1]) {
        pushedArray[cardNum - 1] = { id: cardNum, color: color };
      } else {
        pushedArray.push({ id: cardNum, color: color });
      }
      dispatch({ type: "SET_COLORS_ARRAY", colorsArray: pushedArray });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [color]);

  const randomColor = target => {
    const color = colors[Math.floor(Math.random() * colors.length)];
    color === target.style.backgroundColor
      ? randomColor(target)
      : setColor(color);
  };

  return (
    <div
      onClick={e => {
        randomColor(e.target);
        dispatch({ type: "ADD_CLICK" });
      }}
      style={{ background: color }}
      className={`card card__card${cardNum}`}
    ></div>
  );
};

import React, { useContext } from "react";
import { store } from "../../store";
import { EasyLevel } from "../EasyLevel";
import { MediumLevel } from "../MediumLevel";
import { HardLevel } from "../HardLevel";
import { Error } from "../Error";

export const Game = () => {
  const {
    state: { selectedLevel }
  } = useContext(store);
  const renderLevel = () => {
    switch (selectedLevel) {
      case "EASY":
        return <EasyLevel />;
      case "MEDIUM":
        return <MediumLevel />;
      case "HARD":
        return <HardLevel />;
      default:
        return <Error msg={"Something went wrong..."} />;
    }
  };
  return <div className="game">{renderLevel()}</div>;
};

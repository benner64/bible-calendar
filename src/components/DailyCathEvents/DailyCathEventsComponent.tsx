import React from "react";
import { CenterRow } from "../../Styles/Utils.module.css";
import { LiturgicalDay } from "../../Types/LiturgicalDay";
import CelebrationsComponent from "../Celebrations/CelebrationsComponent";

type DailyCathEventsProp = {
  day: LiturgicalDay | null;
};

export default function DailyCathEventComponent({ day }: DailyCathEventsProp) {
  return (
    <div className={CenterRow}>
      <div>
        <h1>Catholic events</h1>
        <div>
          <b>Season:</b> {day?.season}
        </div>
        <div>
          <b>Week:</b> {day?.season_week}
        </div>
        {day && day.celebrations.map((celeb, index) => {
            return (<CelebrationsComponent Celebration={celeb} key={index}/>);
        })}
      </div>
    </div>
  );
}

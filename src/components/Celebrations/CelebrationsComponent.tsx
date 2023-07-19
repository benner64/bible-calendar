import React from "react";
import { CenterRow } from "../../Styles/Utils.module.css";
import { SeasonBox } from './Celebrations.module.css';
import { Celebration } from "../../Types/Celebration";

type CelebrationsProp = {
  Celebration: Celebration | null;
};

export default function CelebrationsComponent({
  Celebration,
}: CelebrationsProp) {
  return (
    <div className='celebration'>
      <h3>{Celebration?.title}</h3>
      <div className={CenterRow}>
        <b>Rank:</b> &nbsp; {Celebration?.rank} ({Celebration?.rank_num}) &nbsp;
        <div style={{ backgroundColor: Celebration?.colour }} className={SeasonBox}></div>
      </div>
    </div>
  );
}

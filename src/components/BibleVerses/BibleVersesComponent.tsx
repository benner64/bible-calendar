import React from "react";
import { BibleVerses } from "../../Types/BibleVerses";
import DailyVersesComponent from "../DailyVerses/DailyVersesComponent";
import SundayVersesComponent from "../SundayVerses/SundayVersesComponent";
import { CenterRow } from "../../Styles/Utils.module.css";
import DateButtonMenuComponent from "../DateButtonsMenu/DateButtonsMenuComponent";

type BibleVersesProp = {
  Verses: BibleVerses | null;
  SetVerses: (n: BibleVerses | null) => void;
};

export default function BibleVersesComponent({
  Verses,
  SetVerses,
}: BibleVersesProp) {
  const Yesterday = () => {
    if (Verses) {
      fetch("https://www.lectserve.com/date/" + Verses.daily.yesterday)
        .then((res) => {
          return res.json();
        })
        .then((data: BibleVerses) => {
          SetVerses(data);
        });
    }
  };

  const Tomorrow = () => {
    if (Verses) {
      fetch("https://www.lectserve.com/date/" + Verses.daily.tomorrow)
        .then((res) => {
          return res.json();
        })
        .then((data: BibleVerses) => {
          SetVerses(data);
        });
    }
  };

  return (
    <div className={CenterRow}>
      {Verses && (
        <div className="BibleVersesSuccess">
          <DateButtonMenuComponent YesterdayFuction={Yesterday} TommorowFunction={Tomorrow} />
          <div className="pure-g">
            <div className="pure-u-1-1">
              <DailyVersesComponent DailyVers={Verses.daily} />
              <SundayVersesComponent SundayVers={Verses.sunday} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

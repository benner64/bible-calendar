import React from "react";
import { BibleVerses } from "../../Types/BibleVerses";
import DailyVersesComponent from "../DailyVerses/DailyVersesComponent";
import SundayVersesComponent from "../SundayVerses/SundayVersesComponent";
import { CenterRow } from "../../Styles/Utils.module.css";
import DateButtonMenuComponent from "../DateButtonsMenu/DateButtonsMenuComponent";

type BibleVersesProp = {
  Verses: BibleVerses | null;
  SetDay: (n: Date) => void;
  SetVerses: (n: BibleVerses | null) => void;
};

export default function BibleVersesComponent({
  Verses,
  SetDay,
  SetVerses,
}: BibleVersesProp) {
  const setDate = (stringDate : string) => {
    let newDate = new Date();
    let newDateString = stringDate.split("-");

    newDate.setDate(newDateString[2]);
    newDate.setMonth(newDateString[1] -1);
    newDate.setFullYear(newDateString[0]);

    SetDay(newDate);
    
  };

  const Yesterday = () => {
    if (Verses) {
      fetch("https://www.lectserve.com/date/" + Verses.daily.yesterday)
        .then((res) => {
          return res.json();
        })
        .then((data: BibleVerses) => {
          setDate(Verses.daily.yesterday);
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
          setDate(Verses.daily.tomorrow);
          SetVerses(data);
        });
    }
  };

  return (
    <div className={CenterRow}>
      {Verses && (
        <div className="BibleVersesSuccess">
          <DateButtonMenuComponent
            YesterdayFuction={Yesterday}
            TommorowFunction={Tomorrow}
          />
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

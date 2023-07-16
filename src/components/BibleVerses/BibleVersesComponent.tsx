import { BibleVerses } from '../../Types/BibleVerses';
import DailyVersesComponent from '../DailyVerses/DailyVersesComponent';
import SundayVersesComponent from '../SundayVerses/SundayVersesComponent';
import { CenterRow, FlexCenter } from '../../Styles/Utils.module.css';
import React from 'react';

type BibleVersesProp = {
  Verses: BibleVerses|null
  SetVerses: (n: BibleVerses | null) => void
};

export default function BibleVersesComponent({ Verses, SetVerses }: BibleVersesProp) {

  const Yesterday = () => {
    if (Verses)
    {
      fetch('https://www.lectserve.com/date/' + Verses.daily.yesterday)
            .then((res) => {
                return res.json();
            })
            .then((data: BibleVerses) => {
              SetVerses(data);
            });
    }
  }

  const Tomorrow = () => {
    if (Verses)
    {
      fetch('https://www.lectserve.com/date/' + Verses.daily.tomorrow)
            .then((res) => {
                return res.json();
            })
            .then((data: BibleVerses) => {
              SetVerses(data);
            });
    }
  }

  return (
    <div className={CenterRow}>
      {
      Verses && 
        <div className='BibleVersesSuccess'>
          <div className="pure-g">
            <div className={[FlexCenter, 'pure-u-1-5'].join(' ')}>
              <button onClick={() => Yesterday()} className='pure-button'>Yesterday</button>
            </div>
            <div className="pure-u-3-5">
              <DailyVersesComponent DailyVers={Verses.daily}/>
              <SundayVersesComponent SundayVers={Verses.sunday} />
            </div>
            <div className={[FlexCenter, 'pure-u-1-5'].join(' ')}>
              <button onClick={() => Tomorrow()} className='pure-button'>Tomorrow</button>
            </div>
          </div>
        </div>  
      }
    </div>
  );
}

import { Daily } from '../../Types/Daily';
import { CenterRow } from '../../Styles/Utils.module.css';
import React from 'react';

type DailyVersesProp = {
  DailyVers: Daily
};

export default function DailyVersesComponent({ DailyVers }: DailyVersesProp) {
  return (
    <div className='DailyVerses'>
      <h1 style={{'textAlign' : 'center'}}>Daily vers for {DailyVers.date_pretty}</h1>
      
          
          <div className={CenterRow}>
            <ul>
              <h4 style={{'textAlign' : 'center'}}>Morning veres</h4>
              <li>{DailyVers.readings.morning.first}</li>
              <li>{DailyVers.readings.morning.second}</li>
              <h4 style={{'textAlign' : 'center'}}>Evening veres</h4>
              <li>{DailyVers.readings.evening.first}</li>
              <li>{DailyVers.readings.evening.second}</li>
            </ul>
          </div>  
    </div>
  );
}

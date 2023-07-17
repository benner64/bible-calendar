import React from 'react';
import { Daily } from '../../Types/Daily';
import { CenterRow } from '../../Styles/Utils.module.css';
import Morning from '../../Images/morning.svg';
import Evening from '../../Images/evening.svg'; 

type DailyVersesProp = {
  DailyVers: Daily
};

export default function DailyVersesComponent({ DailyVers }: DailyVersesProp) {
  return (
    <div className='DailyVerses'>
      <h1 style={{'textAlign' : 'center'}}>Daily vers for {DailyVers.date_pretty}</h1>
      
          
          <div className={CenterRow}>
            <ul>
              <h3 style={{'textAlign' : 'center'}}>Morning veres <img src={Morning} style={{'height' : '1.25rem'}}/></h3>
              <li>{DailyVers.readings.morning.first}</li>
              <li>{DailyVers.readings.morning.second}</li>
              <h3 style={{'textAlign' : 'center'}}>Evening veres <img src={Evening} style={{'height' : '1.25rem'}}/></h3>
              <li>{DailyVers.readings.evening.first}</li>
              <li>{DailyVers.readings.evening.second}</li>
            </ul>
          </div>  
    </div>
  );
}

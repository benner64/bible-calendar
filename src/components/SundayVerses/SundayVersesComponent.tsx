import { RedLetter } from '../../Types/RedLetter';
import { CenterRow } from '../../Styles/Utils.module.css';
import React from 'react';

type SundayVersesProp = {
  SundayVers: RedLetter;
};

export default function SundayVersesComponent({ SundayVers }: SundayVersesProp) {
  return (
    <div className='DailyVerses'>
      <h1>Vers for sunday the {SundayVers.date_pretty}</h1>
        {SundayVers.services.map((service, indexService) => {
            return (
                <div key={indexService} className={CenterRow}>
                    <ul>
                        <h4 style={{'textAlign' : 'center'}}>Service {indexService + 1}</h4>
                        {service.readings.map((reading,indexReading) => {
                            return (
                                <li key={indexReading}>{reading}</li>
                            );
                        })}
                    </ul>
                </div>
            );
        })}
    </div>
  );
}

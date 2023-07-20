import React from 'react';
import { useEffect, useState } from 'react';
import 'purecss/build/pure-min.css';
import 'purecss/build/grids-responsive-min.css';
import '../Styles/BaggroundStyle.css'
import { BibleVerses } from '../Types/BibleVerses';
import { LiturgicalDay } from '../Types/LiturgicalDay';
import BibleVersesComponent from '../components/BibleVerses/BibleVersesComponent';
import LayoutComponent from '../components/Layout/LayoutComponent';
import DailyCathEventComponent from '../components/DailyCathEvents/DailyCathEventsComponent';

export default function Home() {
    const [bibleVerses, setBibleVerses] = useState<BibleVerses | null>(null);
    const [liturgicalDay, setLiturgicalDay] = useState<LiturgicalDay | null>(null);
    const [day, setDay] = useState<Date>(new Date);

    useEffect(() => {
        fetch(`https://www.lectserve.com/date/${day.getFullYear()}-${day.getMonth() + 1}-${day.getDate()}`)
            .then((res) => {
                return res.json();
            })
            .then((data: BibleVerses) => {
                setBibleVerses(data); 
            });
    }, []);

    // useEffect(() => {
    //     fetch(`http://calapi.inadiutorium.cz/api/v0/en/calendars/default/${day.getFullYear()}/${day.getMonth() + 1}/${day.getDate()}`)
    //         .then((res) => {
    //             return res.json();
    //         })
    //         .then((data: LiturgicalDay) => {
    //             setLiturgicalDay(data)
    //             console.log(data, day);
                
    //         });
    // }, [ bibleVerses ]);

    return (
        <LayoutComponent>
            <BibleVersesComponent Verses={bibleVerses} SetVerses={setBibleVerses} SetDay={setDay}/>
            {/* <DailyCathEventComponent day={liturgicalDay}/> */}
        </LayoutComponent>
    );
}

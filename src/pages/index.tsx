import { useEffect, useState } from 'react';
import 'purecss/build/pure-min.css';
import { BibleVerses } from '../Types/BibleVerses';
import BibleVersesComponent from '../components/BibleVerses/BibleVersesComponent';
import LayoutComponent from '../components/Layout/LayoutComponent';
import React from 'react';

export default function Home() {
    const [bibleVerses, setBibleVerses] = useState<BibleVerses | null>(null);

    useEffect(() => {
        fetch('https://www.lectserve.com/today')
            .then((res) => {
                return res.json();
            })
            .then((data: BibleVerses) => {
                setBibleVerses(data);
            });
    }, []);

    return (
        <LayoutComponent>
            <BibleVersesComponent Verses={bibleVerses} SetVerses={setBibleVerses}/>
        </LayoutComponent>
    );
}

import React from "react";
import RightArrow from '../../Images/right-arrow.svg';
import LeftArrow from '../../Images/left-arrow.svg'; 

type BibleVersesProp = {
  YesterdayFuction: () => void;
  TommorowFunction: () => void;
};

export default function DateButtonMenuComponent({
  YesterdayFuction,
  TommorowFunction
}: BibleVersesProp) {

  return (
    <div className="DateButtonMenu">
    <div className="BibleVersesSuccess">
        <div className="pure-menu pure-menu-horizontal">
        <ul className="pure-menu-list" style={{'width' : '100%', 'display' : 'flex'}}>
            <li className="pure-menu-item">
            <button onClick={() => YesterdayFuction()} className="pure-button">
            <img src={LeftArrow} style={{'height' : '1rem'}}/> Yesterday
            </button>
            </li>
            <li className="pure-menu-item" style={{'marginLeft' : 'auto'}}>
            <button onClick={() => TommorowFunction()} className="pure-button">
                Tomorrow <img src={RightArrow} style={{'height' : '1rem'}}/>
            </button>
            </li>
        </ul>
        </div>
    </div>
    </div>
  );
}

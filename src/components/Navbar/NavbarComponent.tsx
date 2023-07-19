import React from 'react';
import { Navbar } from './Navbar.module.css';

export default function NavbarComponent() {
  return (
    <div className={["pure-menu pure-menu-horizontal pure-menu-scrollable", Navbar].join(' ')}>
    <a href="#" className="pure-menu-heading pure-menu-link">Church Calendar⛪</a>
    <ul className="pure-menu-list">
        {/* <li className="pure-menu-item">
            <a href="#" className="pure-menu-link">News</a>
        </li>
        <li className="pure-menu-item">
            <a href="#" className="pure-menu-link">Sports</a>
        </li>
        <li className="pure-menu-item">
            <a href="#" className="pure-menu-link">Finance</a>
        </li> */}
    </ul>
</div>
  );
}


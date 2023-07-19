import React from 'react';
import { ReactNode } from 'react';
import Navbar from '../Navbar/NavbarComponent';
import { Content, LowerZ } from './Layout.module.css';

type LayoutProps = {
  children: ReactNode;
};

export default function LayoutComponent({ children }: LayoutProps) {
  return (
    <div className='Layout'>
        <Navbar/>
        <div className={["pure-g"].join(' ')}>
          <div className="pure-u-1-24 pure-u-lg-4-24"></div>
          <div className={[Content, "pure-u-22-24 pure-u-lg-16-24"].join(' ')}>
            {children}
          </div>
          <div className="pure-u-1-24 pure-u-lg-4-24"></div>
        </div>
    </div>
  );
}

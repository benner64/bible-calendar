import React from 'react';
import { ReactNode } from 'react';
import Navbar from '../Navbar/NavbarComponent';

type LayoutProps = {
  children: ReactNode;
};

export default function LayoutComponent({ children }: LayoutProps) {
  return (
    <div className='Layout'>
        <Navbar/>
        <div className="pure-g">
          <div className="pure-u-1-5"></div>
          <div className="pure-u-3-5">
            {children}
          </div>
          <div className="pure-u-1-5"></div>
        </div>
    </div>
  );
}

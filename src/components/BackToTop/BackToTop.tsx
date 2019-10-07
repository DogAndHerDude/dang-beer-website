
import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'react-feather';

import { IBackToTopProps } from './IBackToTop';

import './BackToTop.css';

export const BASE_CLASS = 'back-top';
export const VISIBLE_CLASS = `${BASE_CLASS}--visible`;



export function BackToTop(props: IBackToTopProps): React.ReactElement<IBackToTopProps> | null {

  const [scrollY, updateScrollY] = useState(getCurrentScrollValue());


  function getCurrentScrollValue(): number {
    return typeof window !== 'undefined' ? window.scrollY : 0;
  }


  function scroll(): void {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }
  }


  function onClick(): void {
    scroll();
  }


  function shouldShowButton(): boolean {
    return scrollY >= props.appearThreshold;
  }


  function resolveClassName(): string {
    switch (shouldShowButton()) {
      case true:
        return `${BASE_CLASS} ${VISIBLE_CLASS}`;
      default:
        return BASE_CLASS;
    }
  }


  function componentDidMount(): void {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => updateScrollY(getCurrentScrollValue()));
    }
  }


  useEffect(componentDidMount, []);


  return (
    <button className={resolveClassName()} onClick={onClick}>
      <ArrowUp />
    </button>
  );  
}


export default React.memo(BackToTop);

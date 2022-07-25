import {useRef, useLayoutEffect } from 'react';
const MONKEYWIDTH = 100;
const MONKEYHEIGHT = 130;

export const useBodyBoundaries = () => {
    const bodyBoundaries = useRef(null);
    useLayoutEffect(() => {
        const getBodyBoundaries = document.body.getBoundingClientRect();
        bodyBoundaries.current = {
          width: (getBodyBoundaries.width - MONKEYWIDTH),
          height: (getBodyBoundaries.height - MONKEYHEIGHT)
        }
      }, []);

  return bodyBoundaries
};

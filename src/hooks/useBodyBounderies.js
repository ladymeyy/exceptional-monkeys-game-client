import {useRef, useLayoutEffect } from 'react';
const MONKEYWIDTH = 100;
const MONKEYHEIGHT = 129;

export const useBodyBounderies = () => {
    const bodyBoundries = useRef(null);
    useLayoutEffect(() => {
        const getBodyBoundries = document.body.getBoundingClientRect();
        bodyBoundries.current = {
          width: (getBodyBoundries.width - MONKEYWIDTH),
          height: (getBodyBoundries.height - MONKEYHEIGHT)
        }
      }, []);

  return bodyBoundries
};

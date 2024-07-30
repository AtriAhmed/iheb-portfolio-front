import React, { useEffect, useRef } from 'react';
import { initThree } from '../threeScript';

const ThreeJSScene = () => {
  const containerRef = useRef();

  useEffect(() => {
    if (containerRef.current) {
      initThree(containerRef.current);
    }


  }, []);

  return <div style={{ width: "100%", height: "100%" }} className='flex justify-center items-center bg-primaryLight' ref={containerRef} />;
};

export default ThreeJSScene;

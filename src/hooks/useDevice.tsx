import { useState, useLayoutEffect } from 'react';

const useDevice = () => {
  const [device, setDevice] = useState<string>();

  const handleChange = () => {
    const width: number = window.innerWidth;
    if (width < 767) setDevice('mobile');
    else setDevice('desktop');
  };

  useLayoutEffect(() => {
    window.addEventListener('resize', handleChange);
    handleChange();
    return () => window.removeEventListener('resize', handleChange);
  }, []);

  return device;
};

export default useDevice;

import { useState, useLayoutEffect } from 'react';

const useDevice = () => {
  const [device, setDevice] = useState<string>('');

  const handleChange = () => {
    const width = window.innerWidth;
    if (width < 768) setDevice('mobile');
    else if (width >= 768 && width < 1025) setDevice('tablet');
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

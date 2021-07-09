import './styles.scss';
import Select from '../select';
import React from 'react';
import CustomButton from '../customButton';

const Sidebar: React.FC = () => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className='sidebar'>
      <form className='container' onSubmit={onSubmit}>
        <Select />
        <CustomButton title='find' />
      </form>
    </div>
  );
};

export default Sidebar;

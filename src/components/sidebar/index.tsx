import './styles.scss';
import CustomButton from '../customButton';
import Select from '../select';
import useDevice from 'hooks/useDevice';

const Sidebar: React.FC = () => {
  const device = useDevice();
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className='sidebar'>
      <div className='container sidebar-content'>
        <form className='form' onSubmit={onSubmit}>
          <Select onChange={() => {}} value='' />
          <CustomButton title='find' />
        </form>
        {device === 'desktop' && <CustomButton title='Clear' />}
      </div>
    </div>
  );
};

export default Sidebar;

//third party libraries
import { useDispatch, useSelector } from 'react-redux';
//custom components
import './styles.scss';
import CustomButton from '../customButton';
import Select from '../select';
import useDevice from 'hooks/useDevice';
import { changeLocation, clear, fetchWeather } from 'store/entities/home/actions';
import { RootState } from 'store/config/entities';

const Sidebar: React.FC = () => {
  const device = useDevice();
  const dispath = useDispatch();
  const { options, locationId } = useSelector((state: RootState) => ({
    options: state.home.options,
    locationId: state.home.locationId,
  }));

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (locationId) dispath(fetchWeather(locationId));
  };

  const onChange = (e: React.ChangeEvent<{ value: unknown }>) => dispath(changeLocation(e.target.value));
  const onClearForm = () => dispath(clear());

  return (
    <div className='sidebar'>
      <div className='container sidebar-content'>
        <form onSubmit={onSubmit}>
          <Select options={options} value={locationId} onChange={onChange} />
          <CustomButton title='find' />
        </form>
        {device === 'desktop' && <CustomButton title='Clear' onClick={onClearForm} />}
      </div>
    </div>
  );
};

export default Sidebar;

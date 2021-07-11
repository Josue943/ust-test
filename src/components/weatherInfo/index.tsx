import { memo } from 'react';
import { StarOutline, Star } from '@material-ui/icons';
import { useDispatch } from 'react-redux';

import './styles.scss';
import CustomButton from '../customButton';
import Weather from 'types/country';
import useDevice from 'hooks/useDevice';
import { addFavorite, clear, removeFavorite } from 'store/entities/home/actions';

interface IProps extends Weather {
  favorite: boolean;
}

const WeatherInfo: React.FC<IProps> = ({ id, name, country, temperatures, main, favorite }) => {
  const dispatch = useDispatch();
  const simbol: string = '\xB0C';
  const Icon = favorite ? Star : StarOutline;
  const device = useDevice();

  const onClick = () => (favorite ? dispatch(removeFavorite(id)) : dispatch(addFavorite({ country, id, name })));

  const onClear = () => dispatch(clear());

  return (
    <div className='weather'>
      <div className='weather-header'>
        <h2 className='title'>
          {`${name}, ${country}`} <Icon className='fav-icon' onClick={onClick} />
        </h2>
        <hr className='separator' />
        <div className='weather-temperature'>
          <h1>
            {temperatures.value}
            {simbol}
          </h1>
          <h4 className='detail'>{`${temperatures.min + simbol} / ${temperatures.max + simbol}`}</h4>
        </div>
      </div>
      <div className='weather-details'>
        <h4 className='detail'>Precipitation: 60%</h4>
        <h4 className='detail'>Humidity: {main.humidity}%</h4>
        <h4 className='detail'>Wind: {main.wind}mph</h4>
      </div>
      {device !== 'desktop' && <CustomButton title='Clear' onClick={onClear} />}
    </div>
  );
};

export default memo(WeatherInfo);

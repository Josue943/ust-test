import { memo, useCallback, useState } from 'react';
import { Cloud, StarOutline, Star, WbSunny } from '@material-ui/icons';
import { Fade } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import './styles.scss';
import CustomButton from '../customButton';
import CustomDialog from 'components/customDialog';
import Weather from 'types/country';
import useDevice from 'hooks/useDevice';
import { addFavorite, clear, removeFavorite } from 'store/entities/home/actions';

interface IProps extends Weather {
  counter: number;
  favorite: boolean;
}

const WeatherInfo: React.FC<IProps> = ({ counter, country, id, favorite, name, main, temperatures }) => {
  const [dialog, setDialog] = useState<boolean>(false);
  const dispatch = useDispatch();
  const device = useDevice();

  const Icon = favorite ? Star : StarOutline;
  const simbol: string = '\xB0C';

  //cannot add a new favorite if you already have 3
  const onClick = () => {
    if (favorite) return dispatch(removeFavorite(id));
    if (counter > 2) toggleDialog();
    else dispatch(addFavorite({ country, id, name }));
  };

  const onClear = () => dispatch(clear());
  const toggleDialog = useCallback(() => setDialog(!dialog), [dialog]);
  const weatherTemp: string = temperatures.value > 22 ? 'hot' : temperatures.value < 15 ? 'cold' : '';

  return (
    <>
      <Fade in={true} timeout={1800}>
        <div className={`w-100 ${weatherTemp}`}>
          <div className='container weather'>
            <div className='weather-header'>
              <h2 className='weather-name'>
                {`${name}, ${country}`} <Icon className='fav-icon' onClick={onClick} />
              </h2>
              <hr className='separator' />
              <div className='weather-temperature'>
                <h1 className='temp-main'>
                  {temperatures.value}
                  {simbol}
                </h1>
                <h4 className='weather-detail'>{`${temperatures.min + simbol} / ${temperatures.max + simbol}`}</h4>
              </div>
            </div>
            <div className='weather-details'>
              <div className='details-container'>
                <h4 className='weather-detail'>Precipitation: 60%</h4>
                <h4 className='weather-detail'>Humidity: {main.humidity}%</h4>
                <h4 className='weather-detail'>Wind: {main.wind}mph</h4>
              </div>
              {weatherTemp ? weatherTemp === 'hot' ? <WbSunny className='rotate-circle sun-icon' /> : <Cloud /> : null}
            </div>
            {device === 'mobile' && <CustomButton title='Clear' onClick={onClear} />}
          </div>
        </div>
      </Fade>
      <CustomDialog title={'Your list is full'} open={dialog} handleClose={toggleDialog} />
    </>
  );
};

export default memo(WeatherInfo);

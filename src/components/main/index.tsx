import { useSelector } from 'react-redux';

import './styles.scss';
import FavoritesList from 'components/favoritesList';
import WeatherInfo from 'components/weatherInfo';
import { RootState } from 'store/config/entities';

const Main: React.FC = () => {
  const { favorite, favoriteLocations, weather } = useSelector(({ home }: RootState) => ({
    weather: home.weather,
    favorite: !!home.favoriteLocations.find(fav => fav.id === home.weather?.id),
    favoriteLocations: home.favoriteLocations,
  }));

  return (
    <div className='main'>
      <div className='container'>
        {weather ? <WeatherInfo {...weather} favorite={favorite} /> : <FavoritesList locations={favoriteLocations} />}
      </div>
    </div>
  );
};

export default Main;

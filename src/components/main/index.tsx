import { useSelector } from 'react-redux';

import './styles.scss';
import FavoritesList from 'components/favoritesList';
import WeatherInfo from 'components/weatherInfo';
import { RootState } from 'store/config/entities';

const Main: React.FC = () => {
  const { favorite, favoriteLocations, weather } = useSelector(({ home }: RootState) => ({
    weather: home.weather,
    favorite: !!home.favoriteLocations.find(location => location.id === home.weather?.id),
    favoriteLocations: home.favoriteLocations,
  }));

  return (
    <div className='main bg-dark'>
      {weather ? (
        <WeatherInfo {...weather} favorite={favorite} counter={favoriteLocations.length} />
      ) : (
        <FavoritesList locations={favoriteLocations} />
      )}
    </div>
  );
};

export default Main;

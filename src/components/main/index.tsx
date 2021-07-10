import './styles.scss';
import CustomButton from '../customButton';
import useDevice from 'hooks/useDevice';

const data = {
  title: 'San Jose, California',
  temp: '22',
  tempChanges: [14, 26],
  precipitation: '60%',
  humidity: '10%',
  wind: 4,
};

const Main: React.FC = () => {
  const simbol = '\xB0C';
  const { title, temp, tempChanges, precipitation, humidity, wind } = data;
  const device = useDevice();
  return (
    <div className='main'>
      <div className='container weather'>
        <div className='weather-header'>
          <h2 className='title'>{title}</h2>
          <hr className='separator' />
          <div className='weather-temperature'>
            <h1>
              {temp}
              {simbol}
            </h1>
            <h4 className='detail'>{tempChanges.map(temp => `${temp}${simbol} `).join(` / `)}</h4>
          </div>
        </div>
        <div className='weather-details'>
          <h4 className='detail'>Precipitation: {precipitation}</h4>
          <h4 className='detail'>Humidity: {humidity}</h4>
          <h4 className='detail'>Wind: {wind}</h4>
        </div>
        {device !== 'desktop' && <CustomButton title='Clear' onClick={() => {}} />}
      </div>
    </div>
  );
};

export default Main;

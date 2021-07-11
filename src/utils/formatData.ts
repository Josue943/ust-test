import Weather from 'types/country';

const formatData = (data: any): Weather => ({
  id: data.id,
  name: data.name,
  country: data.sys.country,
  temperatures: {
    value: Math.floor(data.main.temp),
    min: data.main.temp_min,
    max: data.main.temp_max,
  },
  main: {
    humidity: data.main.humidity,
    wind: +(data.wind.speed * 2.237).toFixed(2),
  },
});

export default formatData;

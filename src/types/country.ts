type Weather = {
  id: number;
  name: string;
  country: string;
  temperatures: { value: number; min: number; max: number };
  main: { humidity: number; wind: number };
};

export default Weather;

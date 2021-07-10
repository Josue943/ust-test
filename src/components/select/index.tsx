import Select from '@material-ui/core/Select';
import { memo } from 'react';
import useStyles from './styles';

interface IProps {
  onChange: () => void;
  value: String;
}

const options = [
  { label: 'Choose a location', value: '', id: 0 },
  { label: 'ten', value: '10', id: 1 },
  { label: 'Twenty', value: '20', id: 2 },
  { label: 'Thirty', value: '30', id: 3 },
];

const CustomSelect: React.FC<IProps> = ({ onChange, value }) => {
  const { selectEmpty, icon } = useStyles();
  return (
    <Select
      native
      value={value}
      onChange={onChange}
      className={selectEmpty}
      inputProps={{
        classes: {
          icon,
        },
      }}
    >
      {options.map(({ id, label, value }) => (
        <option value={value} key={id}>
          {label}
        </option>
      ))}
    </Select>
  );
};

export default memo(CustomSelect);

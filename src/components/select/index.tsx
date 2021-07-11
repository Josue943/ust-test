import Select from '@material-ui/core/Select';
import { memo } from 'react';

import Option from 'types/option';
import useStyles from './styles';

type Props = {
  value: string | number;
  options: Option[];
  onChange: (e: React.ChangeEvent<{ value: unknown }>) => void;
};

const CustomSelect: React.FC<Props> = ({ onChange, options, value }) => {
  const { icon, optionStyle, menuPaper, selectEmpty } = useStyles();

  return (
    <Select
      variant='outlined'
      native
      value={value}
      onChange={onChange}
      className={selectEmpty}
      inputProps={{
        classes: {
          icon,
        },
      }}
      MenuProps={{ classes: { paper: menuPaper } }}
    >
      {options.map(({ label, value }) => (
        <option className={optionStyle} value={value} key={value}>
          {label}
        </option>
      ))}
    </Select>
  );
};

export default memo(CustomSelect);

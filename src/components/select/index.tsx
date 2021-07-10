import Select from '@material-ui/core/Select';
import { memo } from 'react';

import useStyles from './styles';

type Props = {
  value: string;
  options: Array<{ label: string; value: string; id: number }>;
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
      {options.map(({ id, label, value }) => (
        <option className={optionStyle} value={value} key={id}>
          {label}
        </option>
      ))}
    </Select>
  );
};

export default memo(CustomSelect);

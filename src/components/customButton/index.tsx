import { memo } from 'react';

import './styles.scss';

type Props = {
  title: String;
  onClick?: () => void;
};

const CustomButton: React.FC<Props> = ({ title, ...rest }) => (
  <button className='btn' {...rest}>
    {title}
  </button>
);

export default memo(CustomButton);

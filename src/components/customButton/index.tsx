import { memo } from 'react';

import './styles.scss';

interface IProps {
  title: String;
  onClick?: () => void;
}

const CustomButton: React.FC<IProps> = ({ title }) => <button className='btn'>{title}</button>;

export default memo(CustomButton);

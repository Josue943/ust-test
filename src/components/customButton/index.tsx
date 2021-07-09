import './styles.scss';

interface IProps {
  title: String;
  onClick?: () => {};
}

const CustomButton: React.FC<IProps> = ({ title }) => <button className='btn'>{title}</button>;

export default CustomButton;

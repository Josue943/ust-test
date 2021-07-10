import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  selectEmpty: {
    marginTop: theme.spacing(2),
    background: '#506775',
    width: '100%',
    height: 50,
    color: '#ffffff',
    fontSize: '1.9rem',
    paddingLeft: 10,
    marginBottom: 10,
    // eslint-disable-next-line no-useless-computed-key
    ['@media (min-width:1024px)']: {
      fontSize: '2.4rem',
      height: 60,
      marginBottom: 15,
    },
  },
  optionStyle: {
    fontSize: '1.5rem',
    color: '#000000',
    // eslint-disable-next-line no-useless-computed-key
    ['@media (min-width:1024px)']: {
      fontSize: '2.4rem',
    },
  },
  menuPaper: {
    maxHeight: 100,
  },
  icon: {
    fill: '#6fbd93',
    fontSize: '2rem',
  },
}));

export default useStyles;

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
      fontSize: '2.8rem',
      height: 70,
    },
  },
  icon: {
    fill: '#6fbd93',
    fontSize: '2rem',
  },
}));

export default useStyles;

import { memo } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

type Props = {
  handleClose: () => void;
  open: boolean;
  title: string;
};

const CustomDialog: React.FC<Props> = ({ open, handleClose, title }) => (
  <Dialog open={open} onClose={handleClose}>
    <DialogTitle id='alert-dialog-title'>{title}</DialogTitle>
    <DialogContent>
      <DialogContentText id='alert-dialog-description'>
        You must remove one to add another favorite. You can only save 3 locations.
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose} color='primary'>
        Accept
      </Button>
    </DialogActions>
  </Dialog>
);

export default memo(CustomDialog);

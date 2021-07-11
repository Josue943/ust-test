import { memo, useCallback, useState } from 'react';
import { Collapse, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Delete, ExpandLess, ExpandMore, Favorite, Public } from '@material-ui/icons';
import { useDispatch } from 'react-redux';

import './styles.scss';
import Location from 'types/location';
import { removeFavorite } from 'store/entities/home/actions';

type Props = {
  locations: Location[];
};

const FavoriteList: React.FC<Props> = ({ locations }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const Icon = open ? ExpandLess : ExpandMore;
  const onDelete = (id: number) => dispatch(removeFavorite(id));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const toggleOpen = useCallback(() => setOpen(!open), [open]);

  return (
    <div className='favorite-list'>
      <ListItem button onClick={toggleOpen}>
        <ListItemIcon>
          <Favorite />
        </ListItemIcon>
        <ListItemText primary='Favorites' />
        <Icon />
      </ListItem>
      <Collapse in={open} timeout='auto' unmountOnExit>
        <List component='div' disablePadding>
          {locations.map(({ name, country, id }) => (
            <ListItem key={id}>
              <ListItemIcon>
                <Public />
              </ListItemIcon>
              <ListItemText primary={`${name}, ${country}`} />
              <ListItemIcon className='icon-container'>
                <Delete className='pointer' onClick={() => onDelete(id)} />
              </ListItemIcon>
            </ListItem>
          ))}
        </List>
      </Collapse>
    </div>
  );
};

export default memo(FavoriteList);

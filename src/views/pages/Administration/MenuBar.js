import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const MenuBar = (props) => {
  return (
    <List>
      <ListItem 
        button
        onClick={() => {
          props.changePage('/administration/sermons');
        }}
        alignItems="center"
      >
        <ListItemText primary="Sermons" />
      </ListItem>
    </List>
  );
}

export default MenuBar;
import { List, ListItem, ListItemText } from '@mui/material';

export default {
  title: 'Components/List',
  component: List,
};

export const Base = () => (
  <List>
    <ListItem>
      <ListItemText primary="Item 1" />
    </ListItem>
    <ListItem>
      <ListItemText primary="Item 2" />
    </ListItem>
    <ListItem>
      <ListItemText primary="Item 3" />
    </ListItem>
  </List>
);

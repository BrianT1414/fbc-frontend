import React from 'react';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Menu from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { makeStyles, useTheme } from '@material-ui/core/styles';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
}));

const Header = (props) => {
  const [open, setOpen] = React.useState(false);

  const classes = useStyles();
  const theme = useTheme();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    props.changePage('/');
  }

  return (
    <header>
      <div className="row">
        <div className="col-md-4 col-9">
          <a href="/" onClick={handleLogoClick}><img src='/assets/fbc_title.png' height="150" /></a>
        </div>
        <div className="col-8 d-none d-md-block">
          <div style={{ textAlign: 'right', marginRight: 20, marginTop: 112 }}>
            <Button
              onClick={() => props.changePage('/sermons')}
            >
              Sermons
            </Button>
            <Button
              onClick={() => props.changePage('/good-friday')}
              style={{ marginLeft: 25 }}
            >
              Good Friday Reading
            </Button>
          </div>
        </div>
        <div className="col-3 d-md-none">
          <div style={{ textAlign: 'right', marginRight: 20, marginTop: 112 }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerOpen}
              className={clsx(open && classes.hide)}
              fontSize="large"
            >
              <Menu />
            </IconButton>
          </div>
        </div>
      </div>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem 
            button
            onClick={() => {
              props.changePage('/sermons'); 
              handleDrawerClose();
            }}
          >
            <ListItemText primary="Sermons" />
          </ListItem>
          <ListItem 
            button
            onClick={() => {
              props.changePage('/good-friday'); 
              handleDrawerClose();
            }}
          >
            <ListItemText primary="Good Friday Reading" />
          </ListItem>
        </List>
      </Drawer>
      <hr style={{ marginTop: 0 }} />
    </header>
  );
}

export default Header;
import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { BrowserRouter as Route } from 'react-router-dom';

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const useStyles = makeStyles((theme) => ({
    menuButton: {
      color: "white"
    },
    }));

    const classes = useStyles();

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} className={classes.menuButton}>
        Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Route>
        <MenuItem >
            <Link to='/favorites' onClick={handleClose}>Favorites</Link>
            </MenuItem>
        <MenuItem onClick={handleClose}>
            <Link to='/'>Home</Link>
            </MenuItem>
        <MenuItem onClick={handleClose}>
            <Link to='/login'>Login</Link>
            </MenuItem>
        </Route>
      
      </Menu>
    </div>
  );
}

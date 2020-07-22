import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';



export default function SimpleMenu(props) {
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
        
        <MenuItem >
        <div>
        <Link to='/'>Home</Link>
        </div>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <div>
          <Link to='/favorites' onClick={handleClose}>Favorites</Link>
          </div>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <div>
            <Link to='/login' login={props.login}>Login</Link>
          </div>
        </MenuItem> 

      </Menu>
    </div>
  );
}

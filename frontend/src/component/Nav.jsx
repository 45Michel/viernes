import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DehazeIcon from '@mui/icons-material/Dehaze';
import EditIcon from '@mui/icons-material/Edit';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SettingsIcon from '@mui/icons-material/Settings';
import "bootstrap/dist/css/bootstrap.min.css";
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import '../component/component.css';

export default function Sidenav() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const navigate = useNavigate();

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List> 
          <ListItem  disablePadding onClick={()=>{navigate("/")}}>
            <ListItemButton>
              <ListItemIcon>
              <AddShoppingCartIcon/> 
              </ListItemIcon>
              <ListItemText primary="Home"/>
            </ListItemButton>
          </ListItem>
      </List>
      <List> 
          <ListItem  disablePadding onClick={()=>(navigate("/crear/productos"))}>
            <ListItemButton>
              <ListItemIcon>
              <EditIcon/>
              </ListItemIcon>
              <ListItemText primary="Crear Producto"/>
            </ListItemButton>
          </ListItem>
      </List>
      <List> 
          <ListItem  disablePadding onClick={()=>(navigate("/settings"))}>
            <ListItemButton>
              <ListItemIcon>
              <SettingsIcon/>
              </ListItemIcon>
              <ListItemText primary="Settings"/>
            </ListItemButton>
          </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <div id="grid">
        <header className='bg-dark w-100'>
          <div className="d-flex justify-content-center text-white">
            <h1 className='fst-italic'>D & M</h1>
          </div>
        </header>
        <nav className="navbar bg-dark border-bottom border-body row" data-bs-theme="dark">
          <div className="container-fluid">
            <div className='col-2 d-flex justify-content-center'>
              <button type="button" className="btn d-flex justify-content-center btn btn-dark" onClick={toggleDrawer(true)}><DehazeIcon fontSize='large'/></button>
              <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
              </Drawer>
            </div>
            <div className='col-7'>
              <form className="d-flex w-100" role="search">
                <input className="form-control me-2 btn-outline-light" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-dark" type="submit"><SearchIcon fontSize='medium'/></button>
              </form>
            </div>
            <div className='col-1 d-flex justify-content-end'>
              <button className=" btn btn-dark d-flex justify-content-end" onClick={()=>(navigate("/favorite"))}><FavoriteIcon fontSize='large'/></button>
            </div>
            <div className='col-1 d-flex justify-content-center'>
              <button className=" btn btn-dark d-flex " onClick={()=>(navigate("/cart"))}><HomeRepairServiceIcon fontSize='large'/></button>
            </div>
            <div className='col-1 d-flex justify-content-center'>
              <button className=" btn btn-dark d-flex " onClick={()=>(navigate("/settings"))}><AccountCircleIcon fontSize='large'/></button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
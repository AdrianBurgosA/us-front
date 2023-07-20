import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LaptopIcon from "@mui/icons-material/Laptop";
import DesktopMacIcon from "@mui/icons-material/DesktopMac";
import MemoryIcon from "@mui/icons-material/Memory";
import MouseIcon from "@mui/icons-material/Mouse";
import WysiwygIcon from "@mui/icons-material/Wysiwyg";
import HeadsetIcon from "@mui/icons-material/Headset";
import LogoutIcon from '@mui/icons-material/Logout';
import {Link} from 'react-router-dom'

const urls = ['/user/portatiles','/user/escritorio','/user/hardware','/user/perifericos','/user/software','/user/accesorios','/']

export const ListOptions = (
  <React.Fragment>
    <Link to={urls[0]} style={{textDecoration: 'none', color: '#47555E'}}>
      <ListItemButton>
        <ListItemIcon>
          <LaptopIcon />
        </ListItemIcon>
        <ListItemText primary="Portátiles" />
      </ListItemButton>
    </Link>
    <Link to={urls[1]} style={{textDecoration: 'none', color: '#47555E'}}>
      <ListItemButton>
        <ListItemIcon>
          <DesktopMacIcon />
        </ListItemIcon>
        <ListItemText primary="Escritorio" />
      </ListItemButton>
    </Link>
    <Link to={urls[2]} style={{textDecoration: 'none', color: '#47555E'}}>
      <ListItemButton>
        <ListItemIcon>
          <MemoryIcon />
        </ListItemIcon>
        <ListItemText primary="Hardware" />
      </ListItemButton>
    </Link>
    <Link to={urls[3]} style={{textDecoration: 'none', color: '#47555E'}}>
      <ListItemButton>
        <ListItemIcon>
          <MouseIcon />
        </ListItemIcon>
        <ListItemText primary="Periféricos" />
      </ListItemButton>
    </Link>
    <Link to={urls[4]} style={{textDecoration: 'none', color: '#47555E'}}>
      <ListItemButton>
        <ListItemIcon>
          <WysiwygIcon />
        </ListItemIcon>
        <ListItemText primary="Software" />
      </ListItemButton>
    </Link>
    <Link to={urls[5]} style={{textDecoration: 'none', color: '#47555E'}}>
      <ListItemButton>
        <ListItemIcon>
          <HeadsetIcon />
        </ListItemIcon>
        <ListItemText primary="Accesorios" />
      </ListItemButton>
    </Link>
    <Link to={urls[6]} style={{textDecoration: 'none', color: '#47555E'}}>
      <ListItemButton>
        <ListItemIcon>
          <LogoutIcon />
        </ListItemIcon>
        <ListItemText primary="Salir" />
      </ListItemButton>
    </Link>
  </React.Fragment>
);

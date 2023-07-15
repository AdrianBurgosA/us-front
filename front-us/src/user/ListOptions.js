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

export const ListOptions = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <LaptopIcon />
      </ListItemIcon>
      <ListItemText primary="Portátiles" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <DesktopMacIcon />
      </ListItemIcon>
      <ListItemText primary="Escritorio" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <MemoryIcon />
      </ListItemIcon>
      <ListItemText primary="Hardware" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <MouseIcon />
      </ListItemIcon>
      <ListItemText primary="Periféricos" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <WysiwygIcon />
      </ListItemIcon>
      <ListItemText primary="Software" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <HeadsetIcon />
      </ListItemIcon>
      <ListItemText primary="Accesorios" />
    </ListItemButton>
  </React.Fragment>
);

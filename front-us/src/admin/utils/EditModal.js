import {
  Box,
  Button,
  MenuItem,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const EditModal = (props) => {
  const { selected, open, setOpen, setSelected } = props;
  const handleClose = () => {
    setOpen(false);
  };
  

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 300,
    bgcolor: "background.paper",
    borderRadius: 5,
    p: 4,
  };

  const handleClick = () => {
    console.log(selected);
  };

  return (
    <Modal open={open}>
      <Box sx={{ ...style, width: "40%" }}>
        <center>
          <div sx={{ width: "20%" }}>
            <Typography variant="h5" component="div">
              Editar producto
            </Typography>
            <br />
            <br />
            <TextField
              label="Nombre"
              variant="outlined"
              fullWidth="true"
              required
              value={selected.name}
              onChange={(event) =>
                setSelected({ ...selected, name: event.target.value })
              }
            />
            <br />
            <br />
            <TextField
              label="Descripción"
              variant="outlined"
              fullWidth="true"
              required
              value={selected.description}
              onChange={(event) =>
                setSelected({ ...selected, description: event.target.value })
              }
            />
            <br />
            <br />
            <TextField
              label="Precio"
              variant="outlined"
              fullWidth="true"
              required
              value={selected.price}
              onChange={(event) =>
                setSelected({ ...selected, price: event.target.value })
              }
            />
            <br />
            <br />
            <TextField
              label="Cantidad"
              variant="outlined"
              fullWidth="true"
              required
              value={selected.quantity}
              onChange={(event) =>
                setSelected({ ...selected, quantity: event.target.value })
              }
            />
            <br />
            <br />
            <center>
              <Stack spacing={2} direction="row">
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "#EEEEEE", color: "#47555E" }}
                  onClick={handleClose}
                >
                  Cancelar
                </Button>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "#47555E", color: "#EEEEEE" }}
                  onClick={handleClick}
                >
                  Agregar
                </Button>
              </Stack>
            </center>
          </div>
        </center>
      </Box>
    </Modal>
  );
};

export default EditModal;

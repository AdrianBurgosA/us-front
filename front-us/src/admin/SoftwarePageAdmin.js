import React, { useEffect, useState } from "react";
import TemplateAdmin from "./TemplateAdmin";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import AddModal from "./utils/AddModal";
import api from "../api/Axios";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import EditModal from "./utils/EditModal";

const SoftwarePageAdmin = () => {
  const title = "Software";
  const [open, setOpen] = useState(false);
  const [prods, setProds] = useState([]);
  const [selected, setSelected] = useState({})
  const [openEdit, setEdit] = useState(false)
  const categ = 4

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/products');
        setProds(response.data)
      } catch (err) {
        console.log(`Error: ${err.message}`);
      }
    };
    fetchData()
  }, []);
  
  const handleClickAdd = () => {
    setOpen(true);
  };

  return (
    <TemplateAdmin title={title}>
      <center>
        <h1>{title}</h1>
      </center>
      <Stack direction="row">
        <Button variant="contained" color="warning" onClick={handleClickAdd}>
          Agregar Nuevo
        </Button>
        <AddModal setOpen={setOpen} open={open} />
      </Stack><br/><br/>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          {prods.map((p) => (
            <Grid item xs>
              <Card
                sx={{
                  backgroundColor: "#EEEEEE",
                  width: "max-content",
                  padding: "20px",
                  borderRadius: "5%",
                }}
              >
                <CardContent>
                  <Stack spacing={2} direction="row">
                    <Typography>{p.name}</Typography>
                    <Box sx={{ color: "orange", fontWeight: "bold" }}>
                      {p.price}
                    </Box>
                  </Stack>
                  <Divider />
                  <Typography>{p.description}</Typography>
                </CardContent>
                <CardActions>
                  <Stack spacing={2} direction="row">
                    <Button
                      variant="contained"
                      sx={{ backgroundColor: "#47555E", color: "#EEEEEE" }}
                      onClick={() => {
                        setSelected(p)
                        setEdit(true)
                      }}
                    >
                      Editar
                    </Button>
                    <Button
                      variant="contained"
                      color="warning"
                    >
                      Borrar
                    </Button>
                  </Stack>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <EditModal selected={selected} open={openEdit} setOpen={setEdit}/>
      </Box>
    </TemplateAdmin>
  );
};

export default SoftwarePageAdmin;
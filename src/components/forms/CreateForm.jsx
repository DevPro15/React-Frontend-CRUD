import React, { useState } from "react";
//Material UI
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
//React-Router-Dom
import { useNavigate } from "react-router-dom";
//components
import Data from "../../Data";
//uuid generator
import { v4 as uuid } from "uuid";

//Create
function CreateForm() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  let history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const ids = uuid();
    let uniqueId = ids.slice(0, 8);

    let a = title,
      b = image,
      c = description;

    Data.push({ id: uniqueId, title: a, description: c, image: b });
    history("/");
  };

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Paper elevation={3} sx={{ minHeight: 500, width: "80%", mt: 4 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            my: 3,
          }}
        >
          <Typography variant="h4"> Create Dictionary</Typography>
        </Box>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "90%" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="filled-basic"
            label="Title"
            variant="filled"
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            id="filled-basic"
            label="ImageURL"
            variant="filled"
            onChange={(e) => setImage(e.target.value)}
          />
          <TextField
            id="filled-multiline-static"
            label="Multiline"
            multiline
            rows={4}
            variant="filled"
            onChange={(e) => setDescription(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={(e) => handleSubmit(e)}
            type="submit"
          >
            Submit
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

export default CreateForm;

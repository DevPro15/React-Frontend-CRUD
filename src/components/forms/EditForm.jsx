import React, { useState, useEffect } from "react";
//Material UI
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
//React-Router-Dom
import { useNavigate } from "react-router-dom";
//components
import Data from "../../Data";

//Edit Form Function
function EditForm() {
  //State
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [id, setId] = useState("");
  //navigte
  let history = useNavigate();
  //grabs the index
  var index = Data.map(function (e) {
    return e.id;
  }).indexOf(id);

  // update's the value
  const handleSubmit = (e) => {
    e.preventDefault();
    let a = Data[index];
    a.title = title;
    a.description = description;
    a.image = image;

    history("/");
  };

  //fetch the value on input
  useEffect(() => {
    setTitle(localStorage.getItem("title"));
    setDescription(localStorage.getItem("description"));
    setImage(localStorage.getItem("image"));
    setId(localStorage.getItem("id"));
  }, []);

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
          <Typography variant="h4"> Edit Dictionary</Typography>
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
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            id="filled-basic"
            label="ImageURL"
            variant="filled"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <TextField
            id="filled-multiline-static"
            label="Multiline"
            multiline
            rows={4}
            variant="filled"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={(e) => handleSubmit(e)}
            type="submit"
          >
            Update
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

export default EditForm;

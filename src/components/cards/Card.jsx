import React from "react";
//Material UI
import {
  Button,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Card,
  styled,
  Typography,
} from "@mui/material";
//React-Router-Dom
import { Link } from "react-router-dom";

//Material UI Style
const StyledCardActions = styled(CardActions)({
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
});

// Card Function
export default function MultiActionAreaCard(props) {
  //Props Destructure
  const { title, description, image, id, handleDelete, handleEdit } = props;


  return (
    <Card sx={{ maxWidth: 280, margin: "10px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <StyledCardActions>
        <Link to="/edit">
          <Button
            size="small"
            color="primary"
            onClick={() => handleEdit(id, title, description, image)}
          >
            EDIT
          </Button>
        </Link>

        <Button size="small" color="error" onClick={(e) => handleDelete(id)}>
          DELETE
        </Button>
      </StyledCardActions>
    </Card>
  );
}

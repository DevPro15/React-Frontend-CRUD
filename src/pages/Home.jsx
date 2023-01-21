import React from "react";
//Material UI
import { Box, Typography, styled } from "@mui/material";
import MultiActionAreaCard from "../components/cards/Card";
//Components
import Data from "../Data";
// React-Router-Dom
import { useNavigate } from "react-router-dom";

//Material UI Style
const ParentBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  marginTop: "30px",
});

const StyledBox = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
});

//Home Function
const Home = () => {
  //Navigation
  let history = useNavigate();
  //Edit Function
  const handleEdit = (id, title, description, image) => {
    localStorage.setItem("title", title);
    localStorage.setItem("description", description);
    localStorage.setItem("image", image);
    localStorage.setItem("id", id);
  };
  //Delete Function
  const handleDelete = (id) => {
    var index = Data?.map(function (e) {
      return e?.id;
    }).indexOf(id);

    Data.splice(index, 1);
    history("/");
  };
  return (
    <ParentBox>
      <Typography variant="h4" gutterBottom>
        Welcome to Animal Dictionary
      </Typography>
      <StyledBox>
        {Data && Data.length > 0 ? (
          Data?.map((data) => (
            <MultiActionAreaCard
              key={data?.id}
              id={data?.id}
              title={data?.title}
              description={data?.description}
              image={data?.image}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          ))
        ) : (
          <Typography variant="h4" color="error">
            No Data
          </Typography>
        )}
      </StyledBox>
    </ParentBox>
  );
};

export default Home;

import React, { useState } from "react";
//Material UI
import {
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  Tooltip,
  Typography,
} from "@mui/material";
//Material UI Icon
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";

//React-Router-Dom
import { Link } from "react-router-dom";

//Material UI Style
const StyledListItemText = styled(ListItemText)({
  color: "white",
  fontWeight: "bold",
});

const StyledTypography = styled(Typography)({
  fontWeight: "bold",
  color: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  textDecoration: "underline",
});

//Drawer function
const DrawerComp = () => {
  //State
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <React.Fragment>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List
          sx={{
            color: "white",
            width: { xs: "170px", sm: "150px" },
            p: 4,
            backgroundColor: "#5093D6",
            height: "100%",
          }}
        >
          <StyledTypography variant="h5">Animal Dictionary</StyledTypography>
          <Divider sx={{ mt: 2, backgroundColor: "white" }} />
          <ListItemButton>
            <ListItemIcon>
              <StyledListItemText></StyledListItemText>
            </ListItemIcon>
          </ListItemButton>

          <ListItemButton onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <Link
                style={{
                  textDecoration: "none",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                to="/"
              >
                <HomeIcon sx={{ color: "white", mr: 2 }} />{" "}
                <StyledListItemText>Home</StyledListItemText>
              </Link>
            </ListItemIcon>
          </ListItemButton>

          <Tooltip title="Click here to Create">
            <Link
              to="/create"
              style={{ textDecoration: "none", color: "inherit" }}
              onClick={() => setOpenDrawer(false)}
            >
              <Button
                variant="outlined"
                color="inherit"
                sx={{
                  mt: "30px",
                  ml: 2,
                }}
              >
                Create
              </Button>
            </Link>
          </Tooltip>
        </List>
      </Drawer>
      <IconButton
        sx={{ marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon style={{ color: "#E89121" }} />
      </IconButton>
    </React.Fragment>
  );
};
export default DrawerComp;

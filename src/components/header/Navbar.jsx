import React, { useState } from "react";
//material UI
import {
  AppBar,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
  IconButton,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
//MATERIAL UI ICON
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
//Components
import DrawerComp from "./Drawer";
//React-Router-Dom
import { Link } from "react-router-dom";

//Material UI Custom Styles
const StyledTab = styled(Tab)({
  color: "white",
});

//Dummy Data
const tabs = [
  {
    label: "Home",
    path: "/",
  },
];

//Header function
const Navbar = () => {
  //State
  const [value, setValue] = useState();

  //Theme Constants
  const theme = useTheme();

  //Material UI Responsive Views
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <React.Fragment>
      <AppBar sx={{ position: "sticky" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <QuestionAnswerIcon />
          </IconButton>
          <Typography
            component="div"
            style={{ fontWeight: 700 }}
            sx={{ flexGrow: 1, typography: { md: "h6", xs: "caption" } }}
          >
            Animal Dictionary
          </Typography>
          {isMatch ? (
            <>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                TabIndicatorProps={{ style: { background: "white" } }}
                sx={{ marginLeft: "auto", mr: 3 }}
                textColor="white"
                indicatorColor="secondary"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                {tabs.map(({ label, path }) => (
                  <StyledTab
                    key={label}
                    label={label}
                    component={Link}
                    to={path}
                  />
                ))}
              </Tabs>
              <Link
                to="/create"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Button variant="outlined" color="inherit">
                  Create
                </Button>
              </Link>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};
export default Navbar;

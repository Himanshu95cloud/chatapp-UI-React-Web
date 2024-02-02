import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Search, MoreVert } from "@mui/icons-material";
import { CurrentUser } from "../../constants/constants";
import UserList from "../users/users";
import "./index.css";

const Header: React.FC = () => {
  return (
    <div>
      <AppBar className="appBar" position="static">
        <Toolbar className="toolbar">
          <div className="profileIcon">
            <span className="iconText">{CurrentUser?.profileIcon}</span>
          </div>
          <Typography ml={1} className="userName" variant="h6">
            {CurrentUser?.name}
          </Typography>
          <IconButton
            className="searchIcon"
            color="inherit"
            aria-label="search"
          >
            <Search />
          </IconButton>
          <IconButton
            className="moreOptionsIcon"
            color="inherit"
            aria-label="more options"
          >
            <MoreVert />
          </IconButton>
        </Toolbar>
      </AppBar>
      <UserList />
    </div>
  );
};

export default Header;

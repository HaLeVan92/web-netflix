import React from "react";

import SearchMovies from "../pages/SearchMovies";
import { Box } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Header = () => {
  return (
    <header className="topNav">
      <nav className="navbar navbar-expand-md navbar-dark">
        <div className="container">
          <a className="navbarBrand" href="/">
            {/* eslint-disable-next-line */}
            <img
              src="https://duy-movie-app.netlify.app/static/media/netflixlogo.ce3078b4cc1d1d95414a.png"
              alt="Netflix Logo"
              className="navLogo"
            />
          </a>

          <SearchMovies />

          <div className="navBar">
            <Box
              sx={{
                display: {
                  xs: "none",
                  sm: "none",
                  md: "none",
                  lg: "flex",
                  xl: "flex",
                },
                gap: 1,
              }}
            >
              <div className="genresList">
                <a className="genres" href="/">
                  Now-playing
                </a>
                <a className="genres" href="/">
                  Popular
                </a>
                <a className="genres" href="/">
                  Top-rate
                </a>
                <a className="genres" href="/">
                  Upcoming
                </a>
              </div>
            </Box>

            <div className="signin">
              <FavoriteIcon
                sx={{
                  backgroundColor: " red",
                  display: {
                    xs: "flex",
                    sm: "flex",
                    md: "flex",
                    lg: "flex",
                    xl: "flex",
                  },
                }}
              />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

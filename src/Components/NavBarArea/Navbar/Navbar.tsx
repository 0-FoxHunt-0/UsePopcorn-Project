import { useState } from "react";
import MovieModel from "../../../Models/MovieModel";
import "./Navbar.css";
import Search from "../Search/Search";
import Logo from "../Logo/Logo";
import NumResults from "../NumResults/NumResults";

interface NavbarProps {
  movies: MovieModel[];
}

function Navbar(props: NavbarProps): JSX.Element {

  return (
    <nav className="Navbar">
      <Logo />
      <Search />
      <NumResults movies={props.movies} />
    </nav>
  );
}

export default Navbar;

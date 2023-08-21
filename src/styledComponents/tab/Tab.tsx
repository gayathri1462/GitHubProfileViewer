import { styled } from "../index";
import { NavLink } from "react-router-dom";

export const Tab = styled(NavLink)`
  padding: 0.5em;
  text-decoration: none;
  font-family: "Calistoga", cursive;
  letter-spacing: 0.04em;
  color: #000;

  &:hover {
    border-bottom: 2px solid #000;
  }

  &.active {
    font-weight: bold;
    color: #0079ff;
    border-bottom: 2px solid #0079ff;
  }
`;

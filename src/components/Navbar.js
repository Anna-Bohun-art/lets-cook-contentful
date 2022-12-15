import { NavLink } from "react-router-dom";
import { Stack, Button, Divider } from "@mui/material";

export default function Navbar({ categoryList }) {
  return (
    <Stack
      direction="row"
      divider={<Divider orientation="vertical" flexItem />}
      spacing={2}
      mb={4}
    >
      <Button size="small">
        <NavLink
          sx={{ bgcolor: "secondary" }}
          style={{ textDecoration: "none" }}
          to="/"
        >
          Home
        </NavLink>
      </Button>
      {categoryList.map((category) => (
        <Button size="small">
          <NavLink
            sx={{ bgcolor: "secondary" }}
            style={{ textDecoration: "none" }}
            to={category}
          >
            {category}
          </NavLink>
        </Button>
      ))}
    </Stack>
  );
}

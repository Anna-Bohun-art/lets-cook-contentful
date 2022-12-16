import { NavLink } from "react-router-dom";
import { Stack, Button, Divider } from "@mui/material";

export default function Navbar({ categoryList }) {
  console.log(categoryList);
  return (
    <>
      {categoryList.length === 0 ? (
        <h1> Loading !!! </h1>
      ) : (
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
                to={`/${category.id}`}
              >
                {category.name}
              </NavLink>
            </Button>
          ))}
        </Stack>
      )}
    </>
  );
}

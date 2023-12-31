// Import necessary modules and components from external packages and files
import { Outlet, Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

function Layout() {
  return (
    <Stack
      sx={{
        minHeight: "100vh"      }}
    >
      <Navigation />
      <Outlet />
      <Box sx={{ flexGrow: 1 }} />
    </Stack>
  );
}

export default Layout;

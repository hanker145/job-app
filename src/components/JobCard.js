import React, { useContext, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import { useLocation, Link, useNavigate } from "react-router-dom";
import AuthContext from "../auth/AuthContext";

import SkillsPaper from "./SkillsPaper";
import { styled } from "@mui/material/styles";

const CardStyle = styled(Card)(({ theme }) => ({
  boxShadow: "none",
  border: "1px solid black",
  width: "100%",
  maxWidth: "350px",
  minWidth: "270px",
  height: "320px",
  margin: "auto"
}));

function JobCard({ description, skills, id, title }) {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  let location = useLocation();

  return (
    <CardStyle ariant="outlined">
      <Stack
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        height="100%"
        padding="5px"
      >
        <CardContent>
          <Typography
            variant="subtitle1"
            component="div"
          >
            {title}
          </Typography>
          <Divider />
          <SkillsPaper skills={skills} />
          <Typography>{description}</Typography>
        </CardContent>
        <Button
          variant="contained"
          component={Link}
          to={`/job/${id}`}
          state={{ backgroundLocation: location }}
          sx={{ width: "130px", backgroundColor: "orange" }}
        >
          Learn More
        </Button>
      </Stack>
    </CardStyle>
  );
}

export default JobCard;

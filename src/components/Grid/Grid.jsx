import * as React from "react";
import "./Grid.css";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import StarIcon from "@mui/icons-material/Star";
import SchoolIcon from "@mui/icons-material/School";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import AnalyticsIcon from "@mui/icons-material/Analytics";

// Use the custom class names for styling
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  fontSize: "20px",

  border: "none",
  color: theme.palette.text.secondary,
}));

export default function BasicStack() {
  return (
    <Box>
      <Stack spacing={1}>
        <Item className="Item">
          <AccountCircleIcon className="Icons" />
          Personal Info
        </Item>
        <Item className="Item">
          <WorkHistoryIcon className="Icons" />
          Work Experience
        </Item>
        <Item className="Item">
          <SchoolIcon className="Icons" />
          Education
        </Item>
        <Item className="Item">
          <StarIcon className="Icons" />
          Key Skill
        </Item>
        <Item className="Item">
          <EmojiEventsIcon className="Icons" />
          Achievements
        </Item>
        <Item className="Item">
          <AnalyticsIcon className="Icons" />
          Project
        </Item>
      </Stack>
    </Box>
  );
}

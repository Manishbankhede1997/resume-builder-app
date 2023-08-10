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

export default function Sidebar(props) {
  return (
    <Box className="sidebar">
      <Stack spacing={1}>
        <Item
          className="Item"
          sx={
            props.click === 0
              ? { color: "green", backgroundColor: "pink" }
              : null
          }
        >
          <AccountCircleIcon className="Icons" />
          Personal Info
        </Item>
        <Item
          className="Item"
          sx={
            props.click === 1
              ? { color: "green", backgroundColor: "pink" }
              : null
          }
        >
          <WorkHistoryIcon className="Icons" />
          Work Experience
        </Item>
        <Item
          className="Item"
          sx={
            props.click === 2
              ? { color: "green", backgroundColor: "pink" }
              : null
          }
        >
          <SchoolIcon className="Icons" />
          Education
        </Item>
        <Item
          className="Item"
          sx={
            props.click === 3
              ? { color: "green", backgroundColor: "pink" }
              : null
          }
        >
          <StarIcon className="Icons" />
          Key Skill
        </Item>

        <Item
          className="Item"
          sx={
            props.click === 4
              ? { color: "green", backgroundColor: "pink" }
              : null
          }
        >
          <AnalyticsIcon className="Icons" />
          Project
        </Item>
        <Item
          className="Item"
          sx={
            props.click === 5
              ? { color: "green", backgroundColor: "pink" }
              : null
          }
        >
          <EmojiEventsIcon className="Icons" />
          Achievements
        </Item>
      </Stack>
    </Box>
  );
}

import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import "./card.css";
import FaceImg from "../../Assets/face1.jpeg";
import { nlpAllRecognizations } from "../../Helper/apicaller";

const CardModal = () => {
  const [allRecogz, setAllRecogz] = useState("");

  // useEffect(() => {
  //   nlpAllRecognizations().then((response) => {
  //     // console.log(response);
  //     setAllRecogz(response);
  //   });
  // }, []);

  console.log(allRecogz);

  const theme = useTheme();
  return (
    <div>
      <Card sx={{ display: "flex", marginBottom: "10px" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h6">
              Live From Space
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              Mac Miller
            </Typography>
          </CardContent>
          {/* <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}> */}
          {/* <IconButton aria-label="previous">
              {theme.direction === "rtl" ? (
                <SkipNextIcon />
              ) : (
                <SkipPreviousIcon />
              )}
            </IconButton>
            <IconButton aria-label="play/pause">
              <PlayArrowIcon sx={{ height: 38, width: 38 }} />
            </IconButton>
            <IconButton aria-label="next">
              {theme.direction === "rtl" ? (
                <SkipPreviousIcon />
              ) : (
                <SkipNextIcon />
              )}
            </IconButton> */}

          <audio controls id="output" />
          {/* </Box> */}
        </Box>
        {/* <CardMedia
          component="img"
          sx={{ width: 151 }}
          image={FaceImg}
          alt="Live from space album cover"
        /> */}
      </Card>
    </div>
  );
};

export default CardModal;

import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import RecyclingIcon from "@mui/icons-material/Recycling";
const Hero = () => {
  const navigate = useNavigate();

  const fadeInScaleStyles = {
    animation: `fadeInScale 1.5s ease-in-out`,
    "@keyframes fadeInScale": {
      "0%": {
        opacity: 0,
        transform: "scale(0.9)",
      },
      "100%": {
        opacity: 1,
        transform: "scale(1)",
      },
    },
  };

  return (
    <Box
      sx={{
        maxHeight: "80vh",
        minWidth: "99.5vw",
        display: "flex",
        flexDirection: "row",

        bgcolor: "#fff",
        position: "relative", // Ensures consistent placement
        left: 0, // Aligns it to the left edge
        marginLeft: "calc(-50vw + 50%)",
      }}
    >
      {/* First Section - Title and CTA */}
      <Box
        sx={{
          ...fadeInScaleStyles,
          flex: 1,
          p: 4,
          pl: 20,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 3,
          borderRight: "1px solid #eee",
          // width: "50%",
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            color: "#32a137",
            fontWeight: 700,
            marginLeft: "5px",
          }}
        >
          Sustainability
        </Typography>

        <Typography
          variant="h2"
          sx={{
            fontWeight: 600,
            color: "#333",
            lineHeight: 1.2,
          }}
        >
          The Planet
          <br />
          Asks For
          <br />
          <Box
            component="span"
            sx={{
              backgroundColor: "#32a137",
              color: "white",
              borderRadius: "10px",
              paddingLeft: "5px",
              paddingRight: "5px",
            }}
          >
            Positive
          </Box>
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "#666",
            maxWidth: "400px",
            textAlign: "justify",
          }}
        >
          It's time to run your company in a socially and environmentally
          responsible manner. The demand for environmentally friendly products
          is increasing, and the public is interested in learning more about how
          you run your company.
        </Typography>

        <Box sx={{ mt: 2 }}>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#2E7D32",
              px: 4,
              py: 1.5,
              borderRadius: "20px",
              "&:hover": {
                bgcolor: "#1B5E20",
              },
            }}
            onClick={() => navigate("/services")}
          >
            Get Started
          </Button>
        </Box>
      </Box>

      {/* Second Section - Animated Image */}
      <Box
        sx={{
          ...fadeInScaleStyles,
          flex: 1,
          position: "relative",
          width: "80%",
          overflow: "hidden",
          maxHeight: "50%",
        }}
      >
        <Box
          component="img"
          src="https://www.thesustainabilitycloud.com/wp-content/uploads/2024/09/Recycling-E-waste-tsc.svg"
          alt="Green leaves"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>
    </Box>
  );
};

export default Hero;

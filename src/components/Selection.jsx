// import { useState } from "react";
// import {
//   Box,
//   TextField,
//   Grid,
//   Card,
//   Typography,
//   InputAdornment,
// } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import BatteryChargingFullIcon from "@mui/icons-material/BatteryChargingFull";
// import DescriptionIcon from "@mui/icons-material/Description";
// import DevicesIcon from "@mui/icons-material/Devices";
// import RestaurantIcon from "@mui/icons-material/Restaurant";
// import CheckroomIcon from "@mui/icons-material/Checkroom";
// import AutorenewIcon from "@mui/icons-material/Autorenew";
// import ChairIcon from "@mui/icons-material/Chair";
// import BuildIcon from "@mui/icons-material/Build";
// import { useNavigate } from "react-router-dom";

// const recycleServices = [
//   {
//     icon: <BatteryChargingFullIcon sx={{ fontSize: 40 }} />,
//     title: "Batteries",
//     description: "Recycle all types of batteries",
//     image:
//       "https://i.pinimg.com/736x/e5/96/e5/e596e55f36ec0266d166bf41d5549a11.jpg",
//   },
//   {
//     icon: <DescriptionIcon sx={{ fontSize: 40 }} />,
//     title: "Paper",
//     description: "Paper, cardboard, and documents",
//     image:
//       "https://img.freepik.com/premium-vector/isometric-paper-sheets_592324-1066.jpg?w=740",
//   },
//   {
//     icon: <DevicesIcon sx={{ fontSize: 40 }} />,
//     title: "Electronics",
//     description: "E-waste and electronic devices",
//     image:
//       "https://img.freepik.com/premium-vector/professional-bundle-computer-technological-devices-vector-illustration_1138841-23831.jpg?w=1060",
//   },
//   {
//     icon: <RestaurantIcon sx={{ fontSize: 40 }} />,
//     title: "Food ",
//     description: "Organic",
//     image:
//       "https://img.freepik.com/free-vector/hand-drawn-delicious-locro-illustration_23-2149184157.jpg?t=st=1737718250~exp=1737721850~hmac=78f16d2be4dc2cfc9d0dbe4ce9716817798fb6d1c738c91acc6ae55bc50a27c0&w=740",
//   },
//   {
//     icon: <CheckroomIcon sx={{ fontSize: 40 }} />,
//     title: "Clothing",
//     description: "Textiles and clothing items",
//     image:
//       "https://img.freepik.com/free-vector/flat-clothes-store-illustration-with-colorful-coat-jacket-skirt-trousers-tshirt-women-hangers_1284-64144.jpg",
//   },
//   {
//     icon: <AutorenewIcon sx={{ fontSize: 40 }} />,
//     title: "Plastics",
//     description: "All types of plastic materials",
//     image:
//       "https://img.freepik.com/premium-vector/big-roll-transparent-stretch-film-packaging-is-lying-white-background_98402-214949.jpg?w=740",
//   },
//   {
//     icon: <ChairIcon sx={{ fontSize: 40 }} />,
//     title: "Furniture",
//     description: "Used and old furniture",
//     image:
//       "https://as2.ftcdn.net/jpg/02/20/23/85/1000_F_220238561_xt6t6gv6wHV5Nl435yUVTYr6rM0knTWa.jpg",
//   },
//   {
//     icon: <BuildIcon sx={{ fontSize: 40 }} />,
//     title: "Metal",
//     description: "Scrap metal and metallic items",
//     image:
//       "https://img.freepik.com/premium-vector/coffee-canisters_648765-6005.jpg?w=900",
//   },
// ];

// const ServiceCard = ({ icon, title, description, image }) => {
//   const navigate = useNavigate();

//   return (
//     <Card
//       onClick={() => navigate("/service", { state: { title } })}
//       sx={{
//         height: "100%",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         padding: 3,
//         textAlign: "center",
//         background: "#FFFFFF",
//         border: "1px solid rgba(46, 125, 50, 0.12)",
//         borderRadius: 4,
//         transition: "all 0.3s ease-in-out",
//         cursor: "pointer",
//         "&:hover": {
//           transform: "translateY(-8px)",
//           boxShadow: "0 4px 20px rgba(46, 125, 50, 0.15)",
//           "& .icon": {
//             color: "#2E7D32",
//           },
//         },
//       }}
//     >
//       <Box
//         component="img"
//         src={image}
//         alt={title}
//         sx={{
//           width: "100%",
//           height: 200,
//           objectFit: "cover",
//           borderRadius: 2,
//           mb: 2,
//         }}
//       />
//       <Box
//         className="icon"
//         sx={{
//           color: "#4CAF50",
//           mb: 2,
//           transition: "all 0.3s ease-in-out",
//         }}
//       >
//         {icon}
//       </Box>
//       <Typography
//         variant="h6"
//         sx={{
//           mb: 1,
//           fontWeight: "bold",
//           color: "#2E7D32",
//         }}
//       >
//         {title}
//       </Typography>
//       <Typography
//         variant="body2"
//         sx={{
//           color: "#566573",
//         }}
//       >
//         {description}
//       </Typography>
//     </Card>
//   );
// };

// const Selection = () => {
//   const [searchTerm, setSearchTerm] = useState("");

//   const filteredServices = recycleServices.filter((service) =>
//     service.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <Box
//       sx={{
//         minHeight: "90vh",
//         py: 8,
//         px: 4,
//         background: "#FFFFFF",
//       }}
//     >
//       <Typography
//         variant="h2"
//         sx={{
//           textAlign: "center",
//           mb: 6,
//           fontWeight: "bold",
//           background: "#2E7D32",
//           WebkitBackgroundClip: "text",
//           WebkitTextFillColor: "transparent",
//         }}
//       >
//         What are we Recycling Today?
//       </Typography>

//       <Box sx={{ maxWidth: 600, mx: "auto", mb: 6, backgroundColor: "white" }}>
//         <TextField
//           fullWidth
//           variant="outlined"
//           placeholder="Search services..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           InputProps={{
//             startAdornment: (
//               <InputAdornment position="start">
//                 <SearchIcon sx={{ color: "black" }} />
//               </InputAdornment>
//             ),
//           }}
//           sx={{
//             "& .MuiOutlinedInput-root": {
//               "& fieldset": {
//                 borderColor: "black",
//               },
//               "&:hover fieldset": {
//                 borderColor: "black",
//               },
//               "&.Mui-focused fieldset": {
//                 borderColor: "black",
//               },
//               borderRadius: "15px",
//             },
//           }}
//         />
//       </Box>

//       <Grid container spacing={4}>
//         {filteredServices.map((service, index) => (
//           <Grid item xs={12} sm={6} md={3} key={index}>
//             <ServiceCard {...service} />
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default Selection;

import { useState } from "react";
import {
  Box,
  TextField,
  Grid,
  Card,
  Typography,
  InputAdornment,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import BatteryChargingFullIcon from "@mui/icons-material/BatteryChargingFull";
import DescriptionIcon from "@mui/icons-material/Description";
import DevicesIcon from "@mui/icons-material/Devices";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import ChairIcon from "@mui/icons-material/Chair";
import BuildIcon from "@mui/icons-material/Build";
import { useNavigate } from "react-router-dom";

const recycleServices = [
  {
    icon: <BatteryChargingFullIcon sx={{ fontSize: 40 }} />,
    title: "Batteries",
    description: "Recycle all types of batteries",
    image:
      "https://i.pinimg.com/736x/e5/96/e5/e596e55f36ec0266d166bf41d5549a11.jpg",
  },
  {
    icon: <DescriptionIcon sx={{ fontSize: 40 }} />,
    title: "Paper",
    description: "Paper, cardboard, and documents",
    image:
      "https://img.freepik.com/premium-vector/isometric-paper-sheets_592324-1066.jpg?w=740",
  },
  {
    icon: <DevicesIcon sx={{ fontSize: 40 }} />,
    title: "Electronics",
    description: "E-waste and electronic devices",
    image:
      "https://img.freepik.com/premium-vector/professional-bundle-computer-technological-devices-vector-illustration_1138841-23831.jpg?w=1060",
  },
  {
    icon: <RestaurantIcon sx={{ fontSize: 40 }} />,
    title: "Food ",
    description: "Organic",
    image:
      "https://img.freepik.com/free-vector/hand-drawn-delicious-locro-illustration_23-2149184157.jpg?t=st=1737718250~exp=1737721850~hmac=78f16d2be4dc2cfc9d0dbe4ce9716817798fb6d1c738c91acc6ae55bc50a27c0&w=740",
  },
  {
    icon: <CheckroomIcon sx={{ fontSize: 40 }} />,
    title: "Clothing",
    description: "Textiles and clothing items",
    image:
      "https://img.freepik.com/free-vector/flat-clothes-store-illustration-with-colorful-coat-jacket-skirt-trousers-tshirt-women-hangers_1284-64144.jpg",
  },
  {
    icon: <AutorenewIcon sx={{ fontSize: 40 }} />,
    title: "Plastics",
    description: "All types of plastic materials",
    image:
      "https://img.freepik.com/premium-vector/big-roll-transparent-stretch-film-packaging-is-lying-white-background_98402-214949.jpg?w=740",
  },
  {
    icon: <ChairIcon sx={{ fontSize: 40 }} />,
    title: "Furniture",
    description: "Used and old furniture",
    image:
      "https://as2.ftcdn.net/jpg/02/20/23/85/1000_F_220238561_xt6t6gv6wHV5Nl435yUVTYr6rM0knTWa.jpg",
  },
  {
    icon: <BuildIcon sx={{ fontSize: 40 }} />,
    title: "Metal",
    description: "Scrap metal and metallic items",
    image:
      "https://img.freepik.com/premium-vector/coffee-canisters_648765-6005.jpg?w=900",
  },
];

const ServiceCard = ({ icon, title, description, image }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Card
      onClick={() => navigate("/service", { state: { title } })}
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: isMobile ? 2 : 3,
        textAlign: "center",
        background: "#FFFFFF",
        border: "1px solid rgba(46, 125, 50, 0.12)",
        borderRadius: 4,
        transition: "all 0.3s ease-in-out",
        cursor: "pointer",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 4px 20px rgba(46, 125, 50, 0.15)",
          "& .icon": {
            color: "#2E7D32",
          },
        },
      }}
    >
      <Box
        component="img"
        src={image}
        alt={title}
        sx={{
          width: "100%",
          height: isMobile ? 150 : 200,
          objectFit: "cover",
          borderRadius: 2,
          mb: 2,
        }}
      />
      <Box
        className="icon"
        sx={{
          color: "#4CAF50",
          mb: 2,
          transition: "all 0.3s ease-in-out",
        }}
      >
        {icon}
      </Box>
      <Typography
        variant={isMobile ? "subtitle1" : "h6"}
        sx={{
          mb: 1,
          fontWeight: "bold",
          color: "#2E7D32",
        }}
      >
        {title}
      </Typography>
      <Typography
        variant={isMobile ? "body2" : "body1"}
        sx={{
          color: "#566573",
        }}
      >
        {description}
      </Typography>
    </Card>
  );
};

const Selection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const filteredServices = recycleServices.filter((service) =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box
      sx={{
        minHeight: "90vh",
        py: isMobile ? 4 : 8,
        px: isMobile ? 2 : 4,
        background: "#FFFFFF",
      }}
    >
      <Typography
        variant={isMobile ? "h4" : "h2"}
        sx={{
          textAlign: "center",
          mb: 6,
          fontWeight: "bold",
          background: "#2E7D32",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        What are we Recycling Today?
      </Typography>

      <Box
        sx={{
          maxWidth: isMobile ? "100%" : 600,
          mx: "auto",
          mb: 6,
          px: isMobile ? 2 : 0,
          backgroundColor: "white",
        }}
      >
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search services..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "black" }} />
              </InputAdornment>
            ),
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "black",
              },
              "&:hover fieldset": {
                borderColor: "black",
              },
              "&.Mui-focused fieldset": {
                borderColor: "black",
              },
              borderRadius: "15px",
            },
          }}
        />
      </Box>

      <Grid container spacing={isMobile ? 2 : 4}>
        {filteredServices.map((service, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <ServiceCard {...service} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Selection;

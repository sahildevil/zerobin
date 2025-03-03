import {
  Box,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import RecyclingIcon from "@mui/icons-material/Recycling";

const Footer = () => {
  return (
    <Box
      sx={{
        color: "#333",
        borderTop: "1px solid #eee",
        width: "99.5vw",
        position: "relative",
        left: 0,
        marginLeft: "calc(-50vw + 50%)",
        backgroundImage: `url('https://lh3.googleusercontent.com/pw/AP1GczNS6VoT8as0RXTZM4O6zEFFybb9uu3Nyj417ZECGzryeoRWxx0AX2r7l6CwWxbsGzp4K6Lr4wHbecO3N9BMjxjxtbVvfG1ree1G8IOGvyCggTkATnk3MPxM2BQVZ10n7smVl8AS-5dYlBOoWy7kWtbT6A=w1920-h567-s-no-gm?authuser=0')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box
        sx={{
          px: { xs: 2, md: 4 },
          py: 6,
          maxWidth: "100%",
          mx: "auto",
        }}
      >
        <Grid
          container
          spacing={4}
          sx={{
            maxWidth: "100%",
            mx: "auto",
          }}
        >
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <RecyclingIcon sx={{ color: "black", fontSize: 32, mr: 1 }} />
              <Typography variant="h6" sx={{ color: "black", fontWeight: 600 }}>
                ZeroBin
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: "#666", mb: 2, pr: 4 }}>
              Making the world cleaner and greener through innovative recycling
              solutions and sustainable waste management practices.
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <IconButton
                sx={{
                  color: "black",
                  "&:hover": { bgcolor: "#e8f5e9" },
                }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                sx={{
                  color: "black",
                  "&:hover": { bgcolor: "#e8f5e9" },
                }}
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                sx={{
                  color: "black",
                  "&:hover": { bgcolor: "#e8f5e9" },
                }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                sx={{
                  color: "black",
                  "&:hover": { bgcolor: "#e8f5e9" },
                }}
              >
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              sx={{ mb: 2, fontWeight: 600, color: "black" }}
            >
              Quick Links
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Link
                  href="/about"
                  underline="none"
                  sx={{
                    color: "#666",
                    display: "block",
                    mb: 1,
                    "&:hover": { color: "#32a137" },
                  }}
                >
                  About Us
                </Link>
                <Link
                  href="/services"
                  underline="none"
                  sx={{
                    color: "#666",
                    display: "block",
                    mb: 1,
                    "&:hover": { color: "#32a137" },
                  }}
                >
                  Services
                </Link>
                <Link
                  href="/contact"
                  underline="none"
                  sx={{
                    color: "#666",
                    display: "block",
                    mb: 1,
                    "&:hover": { color: "#32a137" },
                  }}
                >
                  Contact
                </Link>
              </Grid>
              <Grid item xs={6}>
                <Link
                  href="/faqs"
                  underline="none"
                  sx={{
                    color: "#666",
                    display: "block",
                    mb: 1,
                    "&:hover": { color: "#32a137" },
                  }}
                >
                  FAQs
                </Link>
                <Link
                  href="/privacy"
                  underline="none"
                  sx={{
                    color: "#666",
                    display: "block",
                    mb: 1,
                    "&:hover": { color: "#32a137" },
                  }}
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  underline="none"
                  sx={{
                    color: "#666",
                    display: "block",
                    mb: 1,
                    "&:hover": { color: "#32a137" },
                  }}
                >
                  Terms of Service
                </Link>
              </Grid>
            </Grid>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              sx={{ mb: 2, fontWeight: 600, color: "black" }}
            >
              Contact Us
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <LocationOnIcon sx={{ color: "black", mr: 1 }} />
              <Typography variant="body2" sx={{ color: "#666" }}>
                123 Green Street, Eco City, 12345
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <PhoneIcon sx={{ color: "black", mr: 1 }} />
              <Typography variant="body2" sx={{ color: "#666" }}>
                +1 (234) 567-8900
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <EmailIcon sx={{ color: "black", mr: 1 }} />
              <Typography variant="body2" sx={{ color: "#666" }}>
                contact@zerobin.com
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3 }} />

        {/* Copyright */}
        <Box
          sx={{
            textAlign: "center",
            width: "100%",
          }}
        >
          <Typography variant="body2" sx={{ color: "#666" }}>
            © {new Date().getFullYear()} ZeroBin. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;

// import {
//   Box,
//   Grid,
//   Typography,
//   Link,
//   IconButton,
//   Divider,
// } from "@mui/material";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import PhoneIcon from "@mui/icons-material/Phone";
// import EmailIcon from "@mui/icons-material/Email";
// import RecyclingIcon from "@mui/icons-material/Recycling";

// const Footer = () => {
//   return (
//     <Box
//       sx={{
//         bgcolor: "#fff",
//         color: "#333",
//         borderTop: "1px solid #eee",
//         width: "99.5vw", // Ensures full width of the browser
//         position: "relative", // Ensures consistent placement
//         left: 0, // Aligns it to the left edge
//         marginLeft: "calc(-50vw + 50%)", // Fixes alignment if wrapped
//       }}
//     >
//       <Box
//         sx={{
//           px: { xs: 2, md: 4 },
//           py: 6,
//           maxWidth: "100%",
//           mx: "auto",
//         }}
//       >
//         <Grid
//           container
//           spacing={4}
//           sx={{
//             maxWidth: "100%",
//             mx: "auto",
//           }}
//         >
//           {/* Company Info */}
//           <Grid item xs={12} md={4}>
//             <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
//               <RecyclingIcon sx={{ color: "#32a137", fontSize: 32, mr: 1 }} />
//               <Typography
//                 variant="h6"
//                 sx={{ color: "#32a137", fontWeight: 600 }}
//               >
//                 ZeroBin
//               </Typography>
//             </Box>
//             <Typography variant="body2" sx={{ color: "#666", mb: 2, pr: 4 }}>
//               Making the world cleaner and greener through innovative recycling
//               solutions and sustainable waste management practices.
//             </Typography>
//             <Box sx={{ display: "flex", gap: 1 }}>
//               <IconButton
//                 sx={{
//                   color: "#32a137",
//                   "&:hover": { bgcolor: "#e8f5e9" },
//                 }}
//               >
//                 <FacebookIcon />
//               </IconButton>
//               <IconButton
//                 sx={{
//                   color: "#32a137",
//                   "&:hover": { bgcolor: "#e8f5e9" },
//                 }}
//               >
//                 <TwitterIcon />
//               </IconButton>
//               <IconButton
//                 sx={{
//                   color: "#32a137",
//                   "&:hover": { bgcolor: "#e8f5e9" },
//                 }}
//               >
//                 <InstagramIcon />
//               </IconButton>
//               <IconButton
//                 sx={{
//                   color: "#32a137",
//                   "&:hover": { bgcolor: "#e8f5e9" },
//                 }}
//               >
//                 <LinkedInIcon />
//               </IconButton>
//             </Box>
//           </Grid>

//           {/* Quick Links */}
//           <Grid item xs={12} md={4}>
//             <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
//               Quick Links
//             </Typography>
//             <Grid container spacing={2}>
//               <Grid item xs={6}>
//                 <Link
//                   href="/about"
//                   underline="none"
//                   sx={{
//                     color: "#666",
//                     display: "block",
//                     mb: 1,
//                     "&:hover": { color: "#32a137" },
//                   }}
//                 >
//                   About Us
//                 </Link>
//                 <Link
//                   href="/services"
//                   underline="none"
//                   sx={{
//                     color: "#666",
//                     display: "block",
//                     mb: 1,
//                     "&:hover": { color: "#32a137" },
//                   }}
//                 >
//                   Services
//                 </Link>
//                 <Link
//                   href="/contact"
//                   underline="none"
//                   sx={{
//                     color: "#666",
//                     display: "block",
//                     mb: 1,
//                     "&:hover": { color: "#32a137" },
//                   }}
//                 >
//                   Contact
//                 </Link>
//               </Grid>
//               <Grid item xs={6}>
//                 <Link
//                   href="/faqs"
//                   underline="none"
//                   sx={{
//                     color: "#666",
//                     display: "block",
//                     mb: 1,
//                     "&:hover": { color: "#32a137" },
//                   }}
//                 >
//                   FAQs
//                 </Link>
//                 <Link
//                   href="/privacy"
//                   underline="none"
//                   sx={{
//                     color: "#666",
//                     display: "block",
//                     mb: 1,
//                     "&:hover": { color: "#32a137" },
//                   }}
//                 >
//                   Privacy Policy
//                 </Link>
//                 <Link
//                   href="/terms"
//                   underline="none"
//                   sx={{
//                     color: "#666",
//                     display: "block",
//                     mb: 1,
//                     "&:hover": { color: "#32a137" },
//                   }}
//                 >
//                   Terms of Service
//                 </Link>
//               </Grid>
//             </Grid>
//           </Grid>

//           {/* Contact Info */}
//           <Grid item xs={12} md={4}>
//             <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
//               Contact Us
//             </Typography>
//             <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
//               <LocationOnIcon sx={{ color: "#32a137", mr: 1 }} />
//               <Typography variant="body2" sx={{ color: "#666" }}>
//                 123 Green Street, Eco City, 12345
//               </Typography>
//             </Box>
//             <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
//               <PhoneIcon sx={{ color: "#32a137", mr: 1 }} />
//               <Typography variant="body2" sx={{ color: "#666" }}>
//                 +1 (234) 567-8900
//               </Typography>
//             </Box>
//             <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
//               <EmailIcon sx={{ color: "#32a137", mr: 1 }} />
//               <Typography variant="body2" sx={{ color: "#666" }}>
//                 contact@zerobin.com
//               </Typography>
//             </Box>
//           </Grid>
//         </Grid>

//         <Divider sx={{ my: 3 }} />

//         {/* Copyright */}
//         <Box
//           sx={{
//             textAlign: "center",
//             width: "100%",
//           }}
//         >
//           <Typography variant="body2" sx={{ color: "#666" }}>
//             © {new Date().getFullYear()} ZeroBin. All rights reserved.
//           </Typography>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Footer;

import { ThemeProvider, createTheme } from "@mui/material";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Selection from "./components/Selection";
import Service from "./components/Service";
import Profile from "./components/Profile";
import DirectHelp from "./components/DirectHelp";
import EcoPoints from "./components/EcoPoints";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import FAQ from "./components/FAQ";
import Insights from "./components/Insights";
import "./App.css";
import PickupBooking from "./components/Pickup";
import PickupList from "./components/PickupList";
import AIChatbot from "./components/AIChatBot";
import RewardsPage from "./components/Rewards";
import OurTeam from "./components/OurTeam";
import ScrollToTop from "./components/ScrollToTop";
import Leaderboard from "./components/LeaderBoard";
import gamegirl2 from "./components/images/Gamegirl2.jpg";
import ShiprocketPickupBooking from "./components/ShipRocketPickup";
// Create a Material Design 3 dark theme with neon accents
const theme = createTheme({
  typography: {
    fontFamily: '"Outfit", sans-serif',
    h1: {
      fontFamily: '"Outfit", sans-serif',
    },
    h2: {
      fontFamily: '"Outfit", sans-serif',
    },
    h3: {
      fontFamily: '"Outfit", sans-serif',
    },
    h4: {
      fontFamily: '"Outfit", sans-serif',
    },
    h5: {
      fontFamily: '"Outfit", sans-serif',
    },
    h6: {
      fontFamily: '"Outfit", sans-serif',
    },
    body1: {
      fontFamily: '"Outfit", sans-serif',
    },
    body2: {
      fontFamily: '"Outfit", sans-serif',
    },
    button: {
      fontFamily: '"Outfit", sans-serif',
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: "#2E7D32", // Forest green
      light: "#4CAF50", // Light green
      dark: "#1B5E20", // Dark green
    },
    background: {
      default: "#FFFFFF",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#1C2833", // Dark gray for better readability
      secondary: "#566573", // Medium gray for secondary text
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          textTransform: "none",
          padding: "8px 24px",
        },
        contained: {
          background: "linear-gradient(45deg, #2E7D32 30%, #4CAF50 90%)",
          boxShadow: "0 2px 8px rgba(46, 125, 50, 0.25)",
          color: "#FFF",
          "&:hover": {
            background: "linear-gradient(45deg, #1B5E20 30%, #2E7D32 90%)",
            boxShadow: "0 4px 12px rgba(46, 125, 50, 0.35)",
          },
        },
        outlined: {
          borderColor: "#2E7D32",
          color: "#2E7D32",
          "&:hover": {
            borderColor: "#1B5E20",
            backgroundColor: "rgba(46, 125, 50, 0.08)",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          borderBottom: "1px solid rgba(46, 125, 50, 0.12)",
          color: "#1C2833",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0 2px 12px rgba(0, 0, 0, 0.08)",
          "&:hover": {
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.12)",
          },
        },
      },
    },
  },
});
const handleImageClick = () => {
  window.open("https://waste-segregation-game.vercel.app/", "_blank"); // Open Google in a new tab
};
function App() {
  return (
    <Router>
      <ScrollToTop />
      <ThemeProvider theme={theme}>
        <div
          style={{
            width: "100%",
            minHeight: "100vh",
            margin: 0,
            padding: 0,

            background: "#FFFFFF", // White to light green gradient
            //backgroundAttachment: "fixed", // Fixes the gradient background
            //backgroundSize: "cover", // Ensures the gradient covers the entire viewport
          }}
        >
          <AIChatbot />
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <main
                  style={
                    {
                      //maxWidth: "1280px",
                      //margin: "0 auto",
                      //padding: "0 2rem",
                    }
                  }
                >
                  <Hero />
                  <Services />
                  <DirectHelp />
                  <OurTeam />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      margin: "0px 0",
                    }}
                  >
                    <img
                      src={gamegirl2} // Use imported image
                      alt="Game Girl"
                      style={{
                        width: "700px", // Set the desired width
                        height: "auto", // Maintain aspect ratio
                        cursor: "pointer",
                        transition: "transform 0.3s ease-in-out",
                        objectFit: "contain", // Ensures the image scales proportionally
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.transform = "scale(1.1)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.transform = "scale(1)")
                      }
                      onClick={handleImageClick}
                    />
                  </div>
                  <Footer />
                </main>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/services" element={<Selection />} />
            <Route path="/service" element={<Service />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/ecopoints" element={<EcoPoints />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/faqs" element={<FAQ />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/pickupbooking" element={<PickupBooking />} />
            <Route path="/pickuplist" element={<PickupList />} />
            <Route path="/rewards" element={<RewardsPage />} />
            <Route path="/ourteam" element={<OurTeam />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route
              path="/pickupbookingsr"
              element={<ShiprocketPickupBooking />}
            />
          </Routes>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;

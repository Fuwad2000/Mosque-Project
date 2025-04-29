import React from "react";
import { Box, Container, Typography, Button, Paper } from "@mui/material";
import MosqueIcon from "@mui/icons-material/Mosque";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EventIcon from "@mui/icons-material/Event";
import GroupsIcon from "@mui/icons-material/Groups";
import Link from "next/link";
import Image from "next/image";

interface QuickLinkProps {
  href: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const QuickLink: React.FC<QuickLinkProps> = ({
  href,
  icon,
  title,
  description,
}) => (
  <Link href={href} className="block">
    <Paper
      elevation={0}
      className="p-6 rounded-xl backdrop-blur-md transition-all duration-300 hover:translate-x-2 group"
      sx={{
        bgcolor: "rgba(255,255,255,0.08)",
        border: "1px solid rgba(255,255,255,0.1)",
        transition: "all 0.3s ease",
        "&:hover": {
          bgcolor: "rgba(255,255,255,0.12)",
          transform: "translateX(8px)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
        },
      }}
    >
      <Box className="flex items-center gap-4">
        <Box
          className="transition-transform duration-300 group-hover:rotate-12"
          sx={{ color: "#4ade80" }}
        >
          {icon}
        </Box>
        <Box>
          <Typography
            variant="h6"
            className="transition-colors duration-300"
            sx={{
              color: "white",
              mb: 0.5,
              fontWeight: 600,
              letterSpacing: "0.5px",
              transition: "all 0.3s ease",
              ".group:hover &": {
                color: "#4ade80",
                transform: "translateX(4px)",
              },
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              color: "grey.400",
              transition: "all 0.3s ease",
              ".group:hover &": {
                color: "grey.200",
              },
            }}
          >
            {description}
          </Typography>
        </Box>
      </Box>
    </Paper>
  </Link>
);

const BigGallery = () => {
  const quickLinks = [
    {
      href: "/prayer/timetable",
      icon: <AccessTimeIcon sx={{ fontSize: 40 }} />,
      title: "Prayer Times",
      description: "View daily prayer schedule and Iqama timings",
    },
    {
      href: "/events",
      icon: <EventIcon sx={{ fontSize: 40 }} />,
      title: "Upcoming Events",
      description: "Stay updated with our community events",
    },
    {
      href: "/services",
      icon: <GroupsIcon sx={{ fontSize: 40 }} />,
      title: "Our Programs",
      description: "Explore our educational and community programs",
    },
  ];

  return (
    <Box className="relative min-h-[600px] overflow-hidden px-2 lg:px-0 ">
      <Box
        className="absolute inset-0"
        sx={{
          background: `
            linear-gradient(
              135deg,
              rgba(0,0,0,0.95) 0%,
              rgba(0,0,0,0.8) 25%,
              rgba(0,0,0,0.6) 50%,
              rgba(0,0,0,0.4) 75%,
              rgba(0,0,0,0.2) 100%
            )
          `,
          backdropFilter: "blur(4px)",
        }}
      />

      {/* Main Content */}
      <Container
        maxWidth={false}
        className="relative z-10  3xl:max-w-[90%] 3xl:px-[16vh]"
        sx={{
          px: { xs: 2, md: 6, lg: 22 }, // optional: padding left and right
        }}
      >
        <Box className="grid md:grid-cols-2 gap-12 min-h-[600px] items-center py-16  ">
          {/* Left Column - Main Content */}
          <Box className="text-white space-y-8">
            <Box
              sx={{
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  width: "120px",
                  height: "120px",
                  background:
                    "radial-gradient(circle, rgba(74,222,128,0.2) 0%, rgba(74,222,128,0) 70%)",
                  top: "-20px",
                  left: "-20px",
                  borderRadius: "50%",
                  zIndex: -1,
                },
              }}
            ></Box>

            <Typography
              className="font-arabic"
              sx={{
                fontSize: { xs: "2rem", md: "2.5rem" },
                color: "#4ade80",
                textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                mb: 1,
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  width: "40%",
                  height: "2px",
                  background:
                    "linear-gradient(90deg, #4ade80 0%, transparent 100%)",
                  bottom: "-8px",
                  left: 0,
                },
              }}
            >
              بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
            </Typography>

            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontSize: { xs: "2.5rem", sm: "3rem", md: "4rem" },
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                background: "linear-gradient(135deg, #ffffff 0%, #4ade80 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 2px 4px rgba(0,0,0,0.1)",
                mb: 3,
              }}
            >
              Welcome to
              <br />
              Yaseen Musalla
            </Typography>

            <Typography
              variant="h5"
              component="p"
              sx={{
                color: "grey.200",
                maxWidth: 560,
                lineHeight: 1.8,
                fontSize: "1.2rem",
                mb: 6,
                textShadow: "0 1px 2px rgba(0,0,0,0.2)",
              }}
            >
              A place of worship, learning, and spiritual growth in the heart of
              our community. Join us in our journey of faith and brotherhood.
            </Typography>

            <Button
              variant="contained"
              size="large"
              href="/about"
              className="relative overflow-hidden"
              sx={{
                px: 6,
                py: 2,
                fontSize: "1.1rem",
                borderRadius: "50px",
                textTransform: "none",
                bgcolor: "#4ade80",
                boxShadow: "0 4px 14px rgba(74, 222, 128, 0.4)",
                transition: "all 0.3s ease",
                "&:hover": {
                  bgcolor: "#22c55e",
                  transform: "translateY(-2px)",
                  boxShadow: "0 6px 20px rgba(74, 222, 128, 0.6)",
                },
                "&:active": {
                  transform: "translateY(1px)",
                },
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background:
                    "linear-gradient(45deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)",
                  transform: "translateX(-100%)",
                  transition: "transform 0.6s ease",
                },
                "&:hover::before": {
                  transform: "translateX(100%)",
                },
              }}
            >
              Learn More About Us
            </Button>
          </Box>

          {/* Right Column - Quick Links */}
          <Box className="space-y-4">
            {quickLinks.map((link, index) => (
              <Box
                key={link.href}
                sx={{
                  opacity: 0,
                  animation: "fadeSlideIn 0.5s ease forwards",
                  animationDelay: `${index * 0.2}s`,
                  "@keyframes fadeSlideIn": {
                    "0%": {
                      opacity: 0,
                      transform: "translateY(20px)",
                    },
                    "100%": {
                      opacity: 1,
                      transform: "translateY(0)",
                    },
                  },
                }}
              >
                <QuickLink {...link} />
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default BigGallery;

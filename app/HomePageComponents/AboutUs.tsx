import { Button, Typography, Container, Box, Grid, Paper } from "@mui/material";
import React from "react";
import Image from "next/image";
import { ArrowForward } from "@mui/icons-material";

const AboutUs = () => {
  return (
    <Box className="bg-about-bg relative py-24  overflow-hidden">
      {/* Decorative Elements */}
      <Box className="absolute top-0 left-0 w-32 h-32 bg-green-500/10 rounded-br-full pointer-events-none" />
      <Box className="absolute bottom-0 right-0 w-48 h-48 bg-green-500/10 rounded-tl-full pointer-events-none" />

      <Container
        maxWidth={false}
        className="relative 3xl:max-w-[90%] 3xl:px-[16vh]"
        sx={{
          px: { xs: 2, md: 6, lg: 22 }, // optional: padding left and right
        }}
      >
        <Grid container spacing={8} alignItems="center">
          {/* Text Section */}
          <Grid item xs={12} xl={6}>
            <Paper elevation={0} className="bg-transparent">
              <Box className="space-y-8 relative">
                {/* Heading */}
                <Box className="relative">
                  <Typography
                    variant="h2"
                    className="font-bold text-white"
                    sx={{
                      fontSize: { xs: "2.5rem", sm: "3rem", md: "3.75rem" },
                      letterSpacing: "-0.02em",
                      position: "relative",
                      zIndex: 10,
                    }}
                  >
                    Who We Are
                    <Box className="absolute -bottom-3 left-0 w-24 h-1 bg-green-500" />
                  </Typography>
                  <Box className="absolute -top-6 -left-6 w-20 h-20 bg-green-500/10 rounded-full" />
                </Box>

                {/* Paragraphs */}
                <Box className="space-y-6">
                  <Typography
                    className="text-white/90"
                    sx={{
                      fontSize: { xs: "1.1rem", md: "1.25rem" },
                      lineHeight: 1.8,
                      fontWeight: 300,
                      letterSpacing: "0.015em",
                    }}
                  >
                    The Peel Islamic Cultural Center (PICC) is a non-profit
                    organization dedicated to supporting the Muslim community in
                    Brampton and Mississauga. Its branch, Yaseen Musalla,
                    located at 9715 James Potter Road, Brampton, aims to serve
                    the religious and community needs of Muslims in Spring
                    Valley and the surrounding areas.
                  </Typography>

                  <Typography
                    className="text-white/90"
                    sx={{
                      fontSize: { xs: "1.1rem", md: "1.25rem" },
                      lineHeight: 1.8,
                      fontWeight: 300,
                      letterSpacing: "0.015em",
                    }}
                  >
                    Our ultimate vision is to create a welcoming and unique
                    environment for everyone. Yaseen Musalla will function as a
                    charitable, non-profit, non-political Islamic organization,
                    committed to serving the communities of Brampton and nearby
                    regions.
                  </Typography>

                  <Typography
                    className="text-white/90"
                    sx={{
                      fontSize: { xs: "1.1rem", md: "1.25rem" },
                      lineHeight: 1.8,
                      fontWeight: 300,
                      letterSpacing: "0.015em",
                      fontStyle: "italic",
                      borderLeft: "3px solid #4caf50",
                      paddingLeft: "1rem",
                      mt: 4,
                    }}
                  >
                    All our objectives and activities are carried out in
                    accordance with the teachings of the Qur&apos;an and the
                    traditions of Prophet Muhammad (peace be upon him).
                  </Typography>
                </Box>

                {/* Button */}
                <Button
                  variant="contained"
                  color="success"
                  size="large"
                  endIcon={<ArrowForward />}
                  className="hover:translate-x-2 transition-transform duration-300"
                  sx={{
                    mt: 4,
                    px: 6,
                    py: 2,
                    borderRadius: "12px",
                    fontWeight: 600,
                    textTransform: "none",
                    fontSize: "1.125rem",
                    background:
                      "linear-gradient(45deg, #4caf50 30%, #66bb6a 90%)",
                    boxShadow: "0 6px 20px rgba(76, 175, 80, 0.25)",
                    "&:hover": {
                      boxShadow: "0 8px 24px rgba(76, 175, 80, 0.35)",
                    },
                  }}
                >
                  Learn More
                </Button>
              </Box>
            </Paper>
          </Grid>

          {/* Image Section */}
          <Grid item xs={12} xl={6}>
            <Box className="relative">
              <Box className="absolute inset-0 m-4 bg-green-500/10 rounded-2xl pointer-events-none" />
              <Box className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/quran.jpg"
                  alt="Mosque"
                  fill
                  priority
                  style={{ objectFit: "cover" }}
                  className="rounded-2xl hover:scale-105 transition-transform duration-700"
                />
              </Box>
              <Box className="absolute -bottom-6 -right-6 w-24 h-24 bg-green-500/20 rounded-full pointer-events-none" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutUs;

"use client";

import { COLOR } from "@/lib/color-palet";
import {
  BackgroundImage,
  Box,
  Button,
  Container,
  Flex,
  Image,
  rem,
  Text,
  Title,
} from "@mantine/core";
import { AnimatedSection } from "./animated-section";

export function HeroSection() {
  const scrollToFeatures = () => {
    const element = document.querySelector("#harga");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <BackgroundImage src="/assets/background3.jpg">
      <Box
        id="home"
        py={{ base: 60, md: 120 }}
        // style={{
        //   background: "linear-gradient(135deg, #f8f9fa 0%, #f0e6ea 100%)",
        //   position: "relative",
        //   overflow: "hidden",
        // }}
      >
        <Container size="lg">
          <Flex
            direction={{ base: "column", md: "row" }}
            gap={{ base: "xs", xs: "md", md: "md", lg: "lg", xl: "xl" }}
            justify="space-around"
            align="center"
          >
            <AnimatedSection animation="slide-right">
              <Box style={{ maxWidth: rem(500) }}>
                <Title
                  order={1}
                  size="h1"
                  fw={800}
                  c={COLOR.pink}
                  style={{ lineHeight: 1.2 }}
                >
                  PLATFORM UNDANGAN PERNIKAHAN DIGITAL
                </Title>
                <Text mt="md" size="lg" fw={300}>
                  Mudah digunakan, hemat anggaran, dan sesuai tren. Platform
                  undangan pernikahan digital bebas biaya
                </Text>
                <Button
                  mt="xl"
                  size="lg"
                  radius="md"
                  variant="gradient"
                  c={COLOR.white}
                  gradient={{ from: COLOR.pink, to: COLOR.pinkLight, deg: 10 }}
                  onClick={scrollToFeatures}
                >
                  Daftar Sekarang
                </Button>
              </Box>
            </AnimatedSection>

            <AnimatedSection animation="slide-left" delay={300}>
              <Box style={{ position: "relative" }}>
                <Image
                  src="/assets/new-mockup2.png"
                  alt="Wedding invitation on mobile"
                  w={{ base: "100%" }}
                  fit="fill"
                />
              </Box>
            </AnimatedSection>
          </Flex>
        </Container>
      </Box>
    </BackgroundImage>
  );
}

"use client";

import {
  Container,
  Title,
  Text,
  Button,
  Group,
  Box,
  Image,
  Flex,
  rem,
} from "@mantine/core";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { AnimatedSection } from "./animated-section";

export function HeroSection() {
  const scrollToFeatures = () => {
    const element = document.querySelector("#fitur");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      id="home"
      style={{
        background: "linear-gradient(135deg, #f8f9fa 0%, #f0e6ea 100%)",
        position: "relative",
        overflow: "hidden",
      }}
      py={{ base: 60, md: 120 }}
    >
      <Container size="lg">
        <Flex
          direction={{ base: "column", md: "row" }}
          gap={{ base: "xl", md: 50 }}
          justify="space-between"
          align="center"
        >
          <AnimatedSection animation="slide-right">
            <Box style={{ maxWidth: rem(600) }}>
              <Title
                order={1}
                size="h1"
                fw={800}
                c="#c41677"
                style={{ lineHeight: 1.2 }}
              >
                PLATFORM UNDANGAN PERNIKAHAN DIGITAL
              </Title>
              <Text mt="md" size="xl">
                Lebih Praktis, hemat dan kekinian.{" "}
                <Text span fw={700}>
                  Gratis
                </Text>{" "}
                undangan pernikahan berbasis web
              </Text>
              <Button
                mt="xl"
                size="lg"
                radius="md"
                color="pink.7"
                onClick={scrollToFeatures}
              >
                Daftar Sekarang
              </Button>
            </Box>
          </AnimatedSection>

          <AnimatedSection animation="slide-left" delay={300}>
            <Box style={{ position: "relative" }}>
              <Image
                src="/globe.svg"
                alt="Wedding invitation on mobile"
                w={300}
                h={600}
                style={{ objectFit: "contain" }}
              />
              <Group
                style={{ position: "absolute", bottom: "50%", width: "100%" }}
                justify="space-between"
              >
                <IconChevronLeft
                  size={32}
                  color="#c41677"
                  style={{ cursor: "pointer" }}
                />
                <IconChevronRight
                  size={32}
                  color="#c41677"
                  style={{ cursor: "pointer" }}
                />
              </Group>
            </Box>
          </AnimatedSection>
        </Flex>
      </Container>
    </Box>
  );
}

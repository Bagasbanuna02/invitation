

"use client";

import {
  AppShell,
  Button,
  Container,
  Stack,
  Text,
  Title,
  Box,
} from "@mantine/core";
import { Header } from "@/components/header";
// import { Footer } from "@/components/footer";
// import { HeroSection } from "@/components/hero-section";
// import { PricingSection } from "@/components/pricing-section";
// import { DownloadSection } from "@/components/download-section";
// import { StatsSection } from "@/components/stats-section";
// import { GuestScreenSection } from "@/components/guest-screen-section";
import { AnimatedSection } from "@/components/animated-section";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { FeatureSection } from "@/components/feature-section";
import { PricingSection } from "@/components/pricing-section";
import { StatsSection } from "@/components/stats-section";

export default function HomePage() {
  return (
   
    <AppShell header={{ height: 60 }}>
      <AppShell.Header>
        <Header />
      </AppShell.Header>
      <AppShell.Main style={{
        marginBottom: 60
      }}>
        <HeroSection />
        <Box py={60} bg="white">
          <Container>
            <AnimatedSection animation="fade-up">
              <Stack align="center" gap="xl">
                <Title order={2} ta="center" size="h1">
                  Buat Undangan Pernikahanmu Sekarang
                </Title>
                <Text c="dimmed" ta="center" size="lg">
                  dan hidupkan momen bahagiamu.
                </Text>
                <Button
                  size="lg"
                  radius="md"
                  color="pink.7"
                  onClick={() => {
                    const element = document.querySelector("#harga");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  DAFTAR SEKARANG
                </Button>
              </Stack>
            </AnimatedSection>
          </Container>
        </Box>
        <FeatureSection />
        <PricingSection />
        <StatsSection />
        {/* <DownloadSection /> */}
        {/* <GuestScreenSection /> */}
      </AppShell.Main>
      <AppShell.Footer>
        <Footer />
      </AppShell.Footer>
    </AppShell>
  );
}

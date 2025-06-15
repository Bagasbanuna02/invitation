"use client";

import { Header } from "@/components/LadingPage/header";
import { AppShell } from "@mantine/core";
import { FeatureSection } from "@/components/LadingPage/feature-section";
import { Footer } from "@/components/LadingPage/footer";
import { HeroSection } from "@/components/LadingPage/hero-section";
import { PricingSection } from "@/components/LadingPage/pricing-section";
import { RegistrationNowSection } from "@/components/LadingPage/registation.now-section";

export default function HomePage() {
  return (
    <AppShell header={{ height: 60 }}>
      <AppShell.Header>
        <Header />
      </AppShell.Header>
      <AppShell.Main
        style={{
          marginBottom: 60,
        }}
      >
        <HeroSection /> 
        <FeatureSection />
        <PricingSection />
        {/* <StatsSection /> */}
        {/* <DownloadSection /> */}
        {/* <GuestScreenSection /> */}

        <RegistrationNowSection />
        <Footer />
      </AppShell.Main>
      {/* <AppShell.Footer>
      </AppShell.Footer> */}
    </AppShell>
  );
}

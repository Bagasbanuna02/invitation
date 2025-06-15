"use client";

import { Header } from "@/components/header";
import { AppShell } from "@mantine/core";
import { FeatureSection } from "@/components/feature-section";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { PricingSection } from "@/components/pricing-section";
import { RegistrationNowSection } from "@/components/registation.now-section";

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

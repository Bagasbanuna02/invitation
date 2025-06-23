/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Stack } from "@mantine/core";
import Dashboard_AlertSection from "@/components/Application/dashboard/alert-section";
import Dashboard_InvitationSection from "@/components/Application/dashboard/invitation-section";
import Dashboard_StatsCardSection from "@/components/Application/dashboard/stats-card-section";
import ApplicationTitleSection from "@/components/Application/share-component/title-section";

export default function DashboardPage() {
  return (
    <>
      <Stack>
        {/* <ApplicationTitleSection title="Dashboard" /> */}
        <Dashboard_AlertSection />
        <Dashboard_StatsCardSection />
        <Dashboard_InvitationSection />
      </Stack>
    </>
  );
}

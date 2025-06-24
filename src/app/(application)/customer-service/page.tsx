"use client";

import Dashboard_CustomerServicePage from "@/components/Application/customer-service/ui-customer-service";
import ApplicationTitleSection from "@/components/Application/share-component/title-section";
import { Stack } from "@mantine/core";

export default function CustomerServicePage() {
  return (
    <Stack>
      <ApplicationTitleSection title="Customer Service" hiddenFrom="sm" />
      <Dashboard_CustomerServicePage />
    </Stack>
  );
}

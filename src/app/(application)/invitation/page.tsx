"use client";

import Invitation_InvitationSection from "@/components/Application/invitation/invitation-section";
import Invitation_ReminderSection from "@/components/Application/invitation/reminder-section";
import ApplicationTitleSection from "@/components/Application/share-component/title-section";
import { Stack } from "@mantine/core";

export default function InvitationPage() {
  return (
    <Stack>
      <ApplicationTitleSection title="Undangan" hiddenFrom="sm" />
      <Invitation_ReminderSection />
      <Invitation_InvitationSection />
    </Stack>
  );
}

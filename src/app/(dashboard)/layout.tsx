"use client";

import { COLOR } from "@/lib/color-palet";
import {
  ActionIcon,
  AppShell,
  Burger,
  Button,
  Group,
  Image,
  Modal,
  Skeleton,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { notifications } from "@mantine/notifications";
import { IconLogout } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  const [opened, { open, close }] = useDisclosure(false);

  const handleLogout = async () => {
    const response = await fetch("/api/auth/logout", {
      method: "POST",
    });

    if (response.ok) {
      notifications.show({
        message: "Logout berhasil",
        color: "green",
        position: "top-center",
      });
      router.push("/");

      return;
    }

    notifications.show({
      message: "Logout gagal",
      color: "red",
      position: "top-center",
    });
  };

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <Burger
            opened={mobileOpened}
            onClick={toggleMobile}
            hiddenFrom="sm"
            size="sm"
          />
          <Burger
            opened={desktopOpened}
            onClick={toggleDesktop}
            visibleFrom="sm"
            size="sm"
          />
          <Group gap={0} align="center" w="auto">
            <Image
              src="/assets/logo2.png"
              alt="Logo"
              h={40}
              w={40}
              fit="fill"
            />
            <Text fw={700} size="md" ml={5} c={COLOR.black}>
              Rajutmomen
            </Text>
          </Group>

          <ActionIcon size="md" variant="subtle" onClick={open}>
            <IconLogout color="red" />
          </ActionIcon>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        Navbar
        {Array(15)
          .fill(0)
          .map((_, index) => (
            <Skeleton key={index} h={28} mt="sm" animate={false} />
          ))}
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
      <Modal opened={opened} onClose={close} title="Logout" size="md" centered>
        <Text>Are you sure you want to logout?</Text>
        <Group justify="center" mt="md">
          <Button variant="outline" onClick={close}>
            Cancel
          </Button>
          <Button onClick={handleLogout}>Logout</Button>
        </Group>
      </Modal>
    </AppShell>
  );
}

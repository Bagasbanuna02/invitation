
"use client";

import ApplicationTitleSection from "@/components/Application/share-component/title-section";
import { COLOR } from "@/lib/color-palet";
import {
  ActionIcon,
  AppShell,
  Burger,
  Group,
  Image,
  Stack,
  Text
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { notifications } from "@mantine/notifications";
import {
  IconCreditCardPay,
  IconDashboard,
  IconHeadset,
  IconLogout,
  IconMail,
} from "@tabler/icons-react";
import { usePathname, useRouter } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

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

  const listPage = [
    {
      label: "Dashboard",
      link: "/dashboard",
      icon: IconDashboard,
    },
    {
      label: "Undangan",
      link: "/invitation",
      icon: IconMail,
    },
    {
      label: "Transaksi",
      link: "/transaction",
      icon: IconCreditCardPay,
    },
    {
      label: "Customer Service",
      link: "/customer-service",
      icon: IconHeadset,
    },
  ];

  const activePage = listPage.find((item) => item.link === pathname);

  const [opened, { toggle }] = useDisclosure(false);

  return (
    <AppShell
      layout="alt"
      header={{ height: 60 }}
      footer={{ height: 60 }}
      navbar={{ width: 150, breakpoint: "sm", collapsed: { mobile: !opened } }}
      // aside={{
      //   width: 300,
      //   breakpoint: "md",
      //   collapsed: { desktop: false, mobile: true },
      // }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Group gap={0} align="center" w="auto" hiddenFrom="sm">
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

          <ApplicationTitleSection
            title={activePage?.label || ""}
            visibleFrom="sm"
          />

          <ActionIcon size="md" variant="subtle" onClick={handleLogout}>
            <IconLogout color="red" />
          </ActionIcon>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <Group>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        </Group>

        <Group
          gap={0}
          align="center"
          w="auto"
          justify="center"
          visibleFrom="sm"
        >
          <Image src="/assets/logo2.png" alt="Logo" h={40} w={40} fit="fill" />
          <Text fw={700} size="md" ml={5} c={COLOR.black}>
            Rajutmomen
          </Text>
        </Group>

        <Stack gap={40} mt={"xl"}>
          {listPage.map((item) => (
            <Group
              key={item.link}
              justify="center"
              style={{
                color: activePage?.link === item.link ? COLOR.pink : "inherit",
              }}
            >
              <Stack
                style={{
                  cursor: "pointer",
                }}
                align="center"
                gap={"xs"}
                onClick={() => router.push(item.link)}
              >
                <item.icon size={25} />
                <Text ta="center" fz={"sm"}>
                  {item.label}
                </Text>
              </Stack>
            </Group>
          ))}
        </Stack>
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
      {/* <AppShell.Aside p="md">Aside</AppShell.Aside> */}
      {/* <AppShell.Footer p="md">Footer</AppShell.Footer> */}
    </AppShell>
  );
}

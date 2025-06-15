/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { COLOR } from "@/lib/color-palet";
import {
  Container,
  Group,
  Button,
  Burger,
  Drawer,
  Stack,
  Text,
  Box,
  Image,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconHeartFilled,
} from "@tabler/icons-react";

const links = [
  { link: "#home", label: "Home" },
  { link: "#fitur", label: "Fitur" },
  { link: "#harga", label: "Harga" },
  // { link: "#download", label: "Download" },
  // { link: "#layar-tamu", label: "Layar Tamu" },
];

export function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  const handleNavClick = (link: string) => {
    closeDrawer();

    // Smooth scroll to the section
    const element = document.querySelector(link);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const items = links.map((link) => (
    <Text
      key={link.label}
      fw={500}
      fz="sm"
      style={{ cursor: "pointer" }}
      onClick={() => handleNavClick(link.link)}
    >
      {link.label}
    </Text>
  ));

  return (
    <Box>
      <Container size="lg">
        <Group justify="space-between" h={60}>
          <Group
            gap={"xs"}
            onClick={() => handleNavClick("#home")}
            style={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <Image src="/assets/logo2.png" alt="Logo" h={60} w={60} fit="fill" />
            <Stack align="center" gap={0} justify="left">
              <Text
                fw={700}
                size="md"
                ml={5}
                c={COLOR.black}
                style={{
                  letterSpacing: "1px",
                }}
              >
                Rajutmomen
              </Text>
              <Text
                style={{
                  fontSize: "7px",
                }}
                c={COLOR.black}
              >
                Undangan Pernikahan Digital
              </Text>
            </Stack>
          </Group>

          <Group visibleFrom="sm">
            <Group gap={30} visibleFrom="sm">
              {items}
            </Group>
            <Group>
              {/* <IconBrandFacebook size={18} style={{ cursor: "pointer" }} /> */}
              <IconBrandInstagram size={18} style={{ cursor: "pointer" }} />
              <Button
                radius="md"
                variant="filled"
                color={COLOR.pink}
                component="a"
                href="/login"
              >
                Login
              </Button>
            </Group>
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
          />
        </Group>
      </Container>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <Stack>
          {items}
          <Button
            radius="md"
            variant="filled"
            color={COLOR.pink}
            component="a"
            href="/login"
          >
            Login
          </Button>
        </Stack>
      </Drawer>
    </Box>
  );
}

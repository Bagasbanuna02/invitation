"use client";

import {
  Container,
  Group,
  Button,
  Burger,
  Drawer,
  Stack,
  Text,
  Box,
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
  { link: "#download", label: "Download" },
  { link: "#layar-tamu", label: "Layar Tamu" },
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
          <Group>
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={() => handleNavClick("#home")}
            >
              <IconHeartFilled size={30} color="#c41677" />
              <Text fw={700} size="lg" ml={5} c="#c41677">
                Rajutmomen
              </Text>
            </Box>
          </Group>

          <Group visibleFrom="sm">
            <Group gap={30} visibleFrom="sm">
              {items}
            </Group>
            <Group>
              <IconBrandFacebook size={18} style={{ cursor: "pointer" }} />
              <IconBrandInstagram size={18} style={{ cursor: "pointer" }} />
              <Button radius="md" color="pink.7" component="a" href="/login">
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
          <Button radius="md" color="pink.7" component="a" href="/login">
            Login
          </Button>
        </Stack>
      </Drawer>
    </Box>
  );
}

/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  Container,
  Title,
  Text,
  Group,
  Button,
  SimpleGrid,
  Box,
  Image,
  Stack,
  rem,
} from "@mantine/core";
import { IconBrandApple, IconBrandGooglePlay } from "@tabler/icons-react";
import { AnimatedSection } from "./animated-section";

export function DownloadSection() {
  return (
    <Box py={60} bg="pink.7" c="white" id="download">
      <Container size="lg">
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing={50}>
          <AnimatedSection animation="slide-right">
            <Stack gap="lg">
              <Title order={2} size="h1">
                Downloads
              </Title>
              <Text size="lg">
                Kini Rajutmomen telah tersedia untuk aplikasi Android yang telah
                dilengkapi dengan fitur Scanner QRCode.
              </Text>
              <Text>
                Dapatkan segera aplikasi versi mobile yang bisa dipakai oleh
                Penerima Tamu.
              </Text>
              <Group mt="md">
                <Button
                  leftSection={<IconBrandGooglePlay size={20} />}
                  variant="white"
                  color="dark"
                  radius="md"
                  component="a"
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Play
                </Button>
                <Button
                  leftSection={<IconBrandApple size={20} />}
                  variant="outline"
                  color="white"
                  radius="md"
                  component="a"
                  href="https://apps.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  App Store
                </Button>
              </Group>
            </Stack>
          </AnimatedSection>

          <AnimatedSection animation="slide-left" delay={200}>
            <Box style={{ position: "relative" }}>
              <Box
                style={{
                  position: "absolute",
                  right: 0,
                  top: 0,
                  width: "100%",
                  height: "100%",
                  background: "rgba(255, 255, 255, 0.1)",
                  borderRadius: rem(20),
                  padding: rem(20),
                }}
              >
                <Stack align="center" gap="md">
                  <Box style={{ display: "flex", alignItems: "center" }}>
                    <IconHeartFilled size={24} color="white" />
                    <Text fw={700} size="lg" ml={5}>
                      Rajutmomen
                    </Text>
                  </Box>
                  <Title order={3} ta="center">
                    UNDANGAN DIGITAL DENGAN BANYAK FITUR
                  </Title>
                  <Image
                    src="/placeholder.svg?height=400&width=200"
                    alt="Mobile app"
                    w={200}
                    h={400}
                    style={{ objectFit: "contain" }}
                  />
                </Stack>
              </Box>
            </Box>
          </AnimatedSection>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

function IconHeartFilled(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      fill={props.color}
      stroke="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19.5 5.25c-1.78 0-3.51.5-4.5 1.5V4.25C14 2.45 12.55 1 10.75 1S7.5 2.45 7.5 4.25v2.5c-1-.99-2.7-1.5-4.5-1.5C1.45 5.25 0 6.7 0 8.5c0 2.7 2.3 4.88 10 10.23 7.7-5.35 10-7.53 10-10.23 0-1.8-1.45-3.25-3.25-3.25z" />
    </svg>
  );
}

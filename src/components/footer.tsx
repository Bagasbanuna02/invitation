"use client";

import { Container, Group, Text, Box, Anchor } from "@mantine/core";

export function Footer() {
  return (
    <Box py="md">
      <Container size="lg">
        <Group justify="apart" py="md">
          <Text size="sm" c="dimmed">
            Rajutmomen © Copyright 2025 .
            {/* - {new Date().getFullYear()}.  */}
            All Rights Reserved.
          </Text>
          <Group gap="lg">
            <Anchor size="sm" c="dimmed">
              Pusat Bantuan
            </Anchor>
            <Anchor size="sm" c="dimmed">
              Syarat & Ketentuan
            </Anchor>
            <Anchor size="sm" c="dimmed">
              Kebijakan Privasi
            </Anchor>
          </Group>
        </Group>
      </Container>
    </Box>
  );
}

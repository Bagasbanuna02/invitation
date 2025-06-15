"use client";

import { Box, Container, Stack, Title, Button, Text } from "@mantine/core";
import { AnimatedSection } from "./animated-section";
import { COLOR } from "@/lib/color-palet";

export function RegistrationNowSection() {
  return (
    <Box py={60} bg="white">
      <Container>
        <AnimatedSection animation="fade-up">
          <Stack align="center" gap={0}>
            <Title order={2} ta="center" size="h2">
              Buat Undangan Pernikahanmu Sekarang
            </Title>
            <Text c="dimmed" ta="center" size="lg">
              dan rajut setiap momen bahagiamu.
            </Text>
            <Button
              mt={"lg"}
              size="md"
              radius="md"
              variant="gradient"
              gradient={{ from: COLOR.pink, to: COLOR.pinkLight, deg: 10 }}
              color={COLOR.pink}
              onClick={() => {
                const element = document.querySelector("#harga");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              DAFTAR SEKARANG
            </Button>
          </Stack>
        </AnimatedSection>
      </Container>
    </Box>
  );
}

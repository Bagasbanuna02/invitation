"use client";

import {
  Container,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { IconHeart, IconMessageCircle2, IconUsers } from "@tabler/icons-react";
import { AnimatedSection } from "./animated-section";

const stats = [
  {
    icon: IconHeart,
    value: "94.1K+",
    title: "Acara Pernikahan",
  },
  {
    icon: IconMessageCircle2,
    value: "375.7K+",
    title: "Ucapan & Doa",
  },
  {
    icon: IconUsers,
    value: "2M+",
    title: "Tamu Undangan",
  },
];

export function StatsSection() {
  return (
    <Container size="lg" py={60}>
      <SimpleGrid cols={{ base: 1, sm: 3 }} spacing={30}>
        {stats.map((stat, index) => (
          <AnimatedSection key={index} animation="scale-in" delay={index * 200}>
            <Stack align="center" gap="xs">
              <ThemeIcon
                size={60}
                radius="md"
                variant="light"
                color="pink.1"
                c="pink.7"
              >
                <stat.icon size={30} stroke={1.5} />
              </ThemeIcon>
              <Title order={2} size="h1" fw={700}>
                {stat.value}
              </Title>
              <Text c="dimmed" ta="center">
                {stat.title}
              </Text>
            </Stack>
          </AnimatedSection>
        ))}
      </SimpleGrid>
    </Container>
  );
}

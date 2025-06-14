"use client";

import {
  Container,
  Title,
  Text,
  SimpleGrid,
  Box,
  Stack,
  ThemeIcon,
  Group,
} from "@mantine/core";
import {
  IconDeviceDesktop,
  IconPencil,
  IconMusic,
  IconMessageCircle2,
  IconGift,
  IconPhoto,
  IconLivePhoto,
  IconBrandWhatsapp,
} from "@tabler/icons-react";
import { AnimatedSection } from "./animated-section";
import { COLOR } from "@/lib/color-palet";

const features = [
  {
    icon: IconDeviceDesktop,
    title: "Aktif Selamanya",
    description: "Website undanganmu aktif tanpa ada batasan waktu.",
  },
  {
    icon: IconPencil,
    title: "Atur Tampilan Undangan",
    description: "Kamu bisa edit sendiri tampilan undanganmu.",
  },
  {
    icon: IconMusic,
    title: "Music",
    description: "Integrasikan musik di undanganmu dengan mudah.",
  },
  {
    icon: IconMessageCircle2,
    title: "Ucapan & Doa",
    description: "Dapatkan ucapan & doa dari teman-temanmu.",
  },
  {
    icon: IconGift,
    title: "Kado",
    description: "Terima Kado Cashless dari teman-temanmu.",
  },
  {
    icon: IconPhoto,
    title: "Galeri Foto & Video",
    description: "Tampilkan foto & video terbaik bersama pasanganmu.",
  },
  {
    icon: IconLivePhoto,
    title: "Live Streaming",
    description: "Bagikan link live streaming di undangan.",
  },
  {
    icon: IconBrandWhatsapp,
    title: "Kirim WA",
    description: "Kirim undangan ke WA temanmu dengan mudah.",
  },
];

export function FeatureSection() {
  return (
    <Box py={60} id="fitur">
      <Container size="lg">
        <AnimatedSection animation="fade-up">
          <Stack align="center" gap="xl" mb={50}>
            <Title order={2} ta="center" size="h1">
              Fitur
            </Title>
            <Text c="dimmed" ta="center" size="lg">
              Lebih Hemat & Fitur Sangat Lengkap
            </Text>
          </Stack>
        </AnimatedSection>

        <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing={50}>
          {features.map((feature, index) => (
            <AnimatedSection
              key={index}
              animation="scale-in"
              delay={index * 100}
            >
              <Group align="flex-start" wrap="nowrap">
                <ThemeIcon
                  size={60}
                  radius="md"
                  variant="gradient"
                  gradient={{ from: COLOR.pinkLight, to: COLOR.beige, deg:80 }}
                  c={COLOR.pink}
                >
                  <feature.icon size={30} stroke={1.5} />
                </ThemeIcon>
                <Box>
                  <Text fw={700} mb={5}>
                    {feature.title}
                  </Text>
                  <Text size="sm" c="dimmed">
                    {feature.description}
                  </Text>
                </Box>
              </Group>
            </AnimatedSection>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

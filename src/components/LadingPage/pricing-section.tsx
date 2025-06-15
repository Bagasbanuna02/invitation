"use client";

import {
  Container,
  Title,
  Text,
  Card,
  Group,
  Badge,
  Button,
  List,
  ThemeIcon,
  rem,
  Box,
  SimpleGrid,
  Center,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import { AnimatedSection } from "./animated-section";
import { COLOR } from "@/lib/color-palet";

const pricingData = [
  {
    title: "GRATIS",
    price: "Rp0",
    promo: "PROMO SAMPAI 30 DESEMBER 2025",
    features: [
      "1 Undangan Standar",
      "Aktif 1 bulan",
      "Kuota Tamu Terbatas",
      "Galeri Foto & Video Terbatas",
      "Musik Latar",
      "Ucapan & Doa",
      "Pilihan Tema Terbatas",
      "Kado Cashless",
      "Link Streaming",
      // "Layar Penerima Tamu",
    ],
    cta: "DAFTAR",
    color: "gray.0",
    textColor: "dark",
  },
  {
    title: "PREMIUM",
    price: "Rp69K",
    originalPrice: "IDR 100.000",
    discount: "31% OFF",
    promo: "PROMO SAMPAI 30 DESEMBER 2025",
    features: [
      "1 Undangan Premium",
      "Aktif Selamanya",
      "Unlimited Kuota Tamu",
      "Unlimited Galeri Foto & Video",
      "Musik Latar",
      "Ucapan & Doa",
      "Bebas Pilih Tema Premium",
      "Kado Cashless",
      "Link Streaming",
      // "Layar Penerima Tamu",
      "Request Musik",
      "Story Instagram",
    ],
    cta: "DAFTAR",
    color: COLOR.pink,
    textColor: "white",
    featured: true,
  },
  {
    title: "BUSINESS",
    price: "Rp99K",
    originalPrice: "IDR 200.000",
    discount: "50% OFF",
    promo: "PROMO SAMPAI 30 DESEMBER 2025",
    features: [
      "2 Undangan Premium",
      "Aktif Selamanya",
      "Unlimited Kuota Tamu",
      "Unlimited Galeri Foto & Video",
      "Musik Latar",
      "Ucapan & Doa",
      "Bebas Pilih Tema Premium",
      "Kado Cashless",
      "Link Streaming",
      // "Layar Penerima Tamu",
      "Request Musik",
      "Story Instagram",
    ],
    cta: "DAFTAR",
    color: "gray.0",
    textColor: "dark",
  },
];

export function PricingSection() {
  return (
    <Box
      py={60}
      bg={COLOR.pinkSoft}
      id="harga"
      style={{ borderRadius: "2rem" }}
      mx={"md"}
    >
      <Container size="lg">
        <AnimatedSection animation="fade-up">
          <Title order={2} ta="center" size="h1" mb={50}>
            Harga
          </Title>
        </AnimatedSection>

        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl">
          {pricingData.map((plan, index) => (
            <AnimatedSection
              key={index}
              animation="fade-up"
              delay={index * 200}
            >
              <Card
                padding="lg"
                radius="md"
                withBorder={plan.color === "gray.0"}
                bg={plan.color}
                c={plan.textColor}
                style={{
                  transform: plan.featured ? "scale(1.05)" : "none",
                  borderRadius: "1rem",
                }}
              >
                <Card.Section withBorder p="md">
                  <Text fw={700} ta="center" size="lg">
                    {plan.title}
                  </Text>
                </Card.Section>

                <Group justify="center" mt="md" align="center">
                  <Box>
                    <Text size="xl" span fw={700} style={{ fontSize: rem(40) }}>
                      {plan.price}
                    </Text>
                    {plan.originalPrice && (
                      <Group gap={5} mt={5}>
                        <Text
                          td="line-through"
                          c={plan.textColor === "white" ? "white" : "gray.6"}
                          size="sm"
                        >
                          {plan.originalPrice}
                        </Text>
                        <Badge
                          color={
                            plan.textColor === "white" ? COLOR.black : "pink.6"
                          }
                          variant="filled"
                        >
                          {plan.discount}
                        </Badge>
                      </Group>
                    )}
                  </Box>
                  <Text
                    size="xs"
                    c={plan.textColor === "white" ? "gray.3" : "gray.6"}
                    mt={5}
                  >
                    {plan.promo}
                  </Text>
                </Group>

                <List
                  spacing="lg"
                  size="sm"
                  mt="md"
                  center
                  icon={
                    <ThemeIcon
                      color={plan.textColor === "white" ? "pink.2" : "pink.6"}
                      size={20}
                      radius="xl"
                    >
                      <IconCheck
                        size={12}
                        color={plan.textColor === "white" ? "black" : "white"}
                      />
                    </ThemeIcon>
                  }
                >
                  {plan.features.map((feature, i) => (
                    <List.Item key={i}>{feature}</List.Item>
                  ))}
                </List>

                <Center>
                  <Button
                    w={200}
                    mt="xl"
                    radius="xl"
                    c={plan.textColor === "white" ? COLOR.black : "white"}
                    color={
                      plan.textColor === "white" ? COLOR.beige : COLOR.pink
                    }
                    variant={plan.textColor === "white" ? "gradient" : "filled"}
                    gradient={{
                      from: COLOR.pinkLight,
                      to: COLOR.beige,
                      deg: 170,
                    }}
                    component="a"
                    href="/register"
                  >
                    {plan.cta}
                  </Button>
                </Center>
              </Card>
            </AnimatedSection>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

import { COLOR } from "@/lib/color-palet";
import { Anchor, Box, Button, Card, Group, Text, Title } from "@mantine/core";
import {
  IconChevronRight,
  IconHeart,
  IconSettings,
  IconWorld,
} from "@tabler/icons-react";
import Link from "next/link";

export default function Dashboard_InvitationSection() {
  return (
    <>
      {/* Invitations Section */}
      <Box>
        <Group justify="space-between" mb="md">
          <Box>
            <Title order={3} c={COLOR.black}>
              Undangan milikmu
            </Title>
            <Text size="sm" c="gray.6">
              Undangan yang pernah kamu buat
            </Text>
          </Box>
          <Anchor size="sm" c={COLOR.pink} href="/invitation">
            <Group gap={4}>
              <Text>Selengkapnya</Text>
              <IconChevronRight size={14} />
            </Group>
          </Anchor>
        </Group>

        {/* Invitation Card */}
        <Card
          padding="lg"
          radius="md"
          withBorder
          style={{ backgroundColor: COLOR.white }}
        >
          <Group justify="space-between" align="center">
            <Group gap="md">
              <Box
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: COLOR.pinkSoft,
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <IconHeart size={24} color={COLOR.pink} />
              </Box>
              <Box>
                <Text fw={600} c={COLOR.black}>
                  Bagas & Nita
                </Text>
                <Text size="sm" c="gray.6">
                  Rabu, 13 Juni 2025
                </Text>
                <Group gap="xs" mt="xs">
                  <IconWorld size={14} color={COLOR.pink} />
                  <Text size="sm" c={COLOR.pink}>
                    Lihat Web
                  </Text>
                </Group>
              </Box>
            </Group>
            <Button
              size="sm"
              style={{ backgroundColor: COLOR.pink }}
              radius="md"
              component={Link}
              href="/invitation"
            >
              <Group gap={4}>
                <IconSettings size={14} />
                <Text>Kelola</Text>
              </Group>
            </Button>
          </Group>
        </Card>
      </Box>
    </>
  );
}

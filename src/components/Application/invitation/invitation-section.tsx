import { COLOR } from "@/lib/color-palet";
import { Box, Button, Card, Group, Text } from "@mantine/core";
import { IconHeart, IconSettings, IconWorld } from "@tabler/icons-react";
import Link from "next/link";

export default function Invitation_InvitationSection() {
  return (
    <>
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
            </Box>
          </Group>
          <Group>
            <Button
              size="sm"
              style={{ backgroundColor: COLOR.pink }}
              radius="md"
              component={Link}
              href="/invitation"
            >
              <Group gap={4}>
                <IconWorld size={14} />
                <Text>Lihat Web</Text>
              </Group>
            </Button>
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
        </Group>
      </Card>
    </>
  );
}

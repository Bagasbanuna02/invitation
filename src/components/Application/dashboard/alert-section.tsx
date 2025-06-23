import { COLOR } from "@/lib/color-palet";
import { Alert, Box, Button, Group, Stack, Text } from "@mantine/core";
import { IconClock, IconDiamond } from "@tabler/icons-react";

export default function Dashboard_AlertSection() {
    return (
      <>
        <Stack>
          <Alert
            icon={<IconClock size={20} />}
            style={{
              backgroundColor: COLOR.beige,
              border: `1px solid ${COLOR.pinkLight}`,
              borderRadius: "12px",
            }}
          >
            <Group justify="space-between" align="center">
              <Box>
                <Text fw={600} c={COLOR.black} mb={4}>
                  Kamu masih pakai akun gratisan!
                </Text>
                <Text size="sm" c="gray.7" mb={2}>
                  Masa aktif sampai 11-07-2025 22:55:44
                </Text>
                <Text size="sm" c="gray.6">
                  Segera upgrade ke premium supaya anda tetap bisa mengakses
                  undangan digital anda!
                </Text>
              </Box>
              <Button
                leftSection={<IconDiamond size={16} />}
                style={{ backgroundColor: COLOR.pink }}
                radius="md"
                size="sm"
              >
                Upgrade Akun
              </Button>
            </Group>
          </Alert>
        </Stack>
      </>
    );
}
  
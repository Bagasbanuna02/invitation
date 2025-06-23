import { COLOR } from "@/lib/color-palet";
import { SimpleGrid, Card, Text } from "@mantine/core";

export default function Dashboard_StatsCardSection() {
    return (
      <>
        {/* Stats Cards */}
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
          <Card
            padding="lg"
            radius="md"
            withBorder
            style={{ backgroundColor: COLOR.white }}
          >
            <Text size="sm" c={COLOR.pink} fw={500}>
              Kuota
            </Text>
            <Text size="xl" fw={700} c={COLOR.black}>
              0
            </Text>
          </Card>
          <Card
            padding="lg"
            radius="md"
            withBorder
            style={{ backgroundColor: COLOR.white }}
          >
            <Text size="sm" c={COLOR.pink} fw={500}>
              Undangan
            </Text>
            <Text size="xl" fw={700} c={COLOR.black}>
              1
            </Text>
          </Card>
        </SimpleGrid>
      </>
    );
}
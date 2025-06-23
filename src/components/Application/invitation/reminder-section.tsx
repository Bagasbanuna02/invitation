import { COLOR } from "@/lib/color-palet";
import { Button, Group, Title } from "@mantine/core";
import { IconDiamond } from "@tabler/icons-react";

export default function Invitation_ReminderSection() {
  return (
    <>
      <Group
        justify="space-between"
        align="center"
        bg={COLOR.beige}
        p="md"
        style={{ borderRadius: "8px", border: `1px solid ${COLOR.pinkLight}` }}
      >
        <Title order={5} c={COLOR.pink}>Kamu masih pakai akun gratisan!</Title>
        <Button
          leftSection={<IconDiamond size={16} />}
          style={{ backgroundColor: COLOR.pink }}
          radius="md"
          size="sm"
        >
          Upgrade Akun
        </Button>
      </Group>
    </>
  );
}

import { COLOR } from "@/lib/color-palet";
import { Center, Group, Image, Stack, Text } from "@mantine/core";
export { LogoAndBrandFooter, LogoAndBrandHeader };

const LogoAndBrandHeader = () => {
  return (
    <Center mb={30}>
      <Group
        gap={0}
        style={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <Image src="/assets/logo2.png" alt="Logo" h={60} w={60} />

        <Stack align="center" gap={0} justify="center">
          <Text
            fw={700}
            size={"25px"}
            // ml={5}
            c={COLOR.white}
            style={{
              // letterSpacing: "1px",
            }}
          >
            Rajutmomen
          </Text>
          <Text
            style={{
              fontSize: "11px",
            }}
            c={COLOR.white}
          >
            Undangan Pernikahan Digital
          </Text>
        </Stack>
      </Group>
    </Center>
  );
};

const LogoAndBrandFooter = () => {
  return (
    <Text ta="center" mt={30} size="sm" c={COLOR.white}>
      Made with <Text span>❤</Text> by Rajutmomen
    </Text>
  );
};


/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import {
  Container,
  Paper,
  TextInput,
  PasswordInput,
  Button,
  Title,
  Text,
  Anchor,
  Stack,
  Divider,
  Box,
  Group,
  Image,
  Center,
} from "@mantine/core";
import {
  IconBrandGoogle,
  IconBrandApple,
  IconHeartFilled,
  IconKey,
} from "@tabler/icons-react";
import { useForm } from "@mantine/form";
import { COLOR } from "@/lib/color-palet";
import Link from "next/link";

export default function UILogin() {
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Email tidak valid"),
      password: (value) =>
        value.length < 6 ? "Password minimal 6 karakter" : null,
    },
  });

  const handleSubmit = (values: typeof form.values) => {
    console.log("Login attempt:", values);
    // Handle login logic here
  };

  return (
    <Box
      style={{
        minHeight: "100vh",
        // backgroundColor: COLOR.pinkSoft,
        background: `linear-gradient(180deg, ${COLOR.pink} 20%, ${COLOR.pinkSoft} 60%)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <Container size="xl">
        {/* Logo */}
        {/* <Box ta="center" mb={40}>
          <Group justify="center" mb={10}>
            <IconHeartFilled size={40} color={COLOR.white} />
          </Group>
          <Stack>
            <Text size="xl" fw={700} c={COLOR.pink}>
              Rajutmomen
            </Text>
            <Text size="sm" c={COLOR.pink}>
              online wedding invitation
            </Text>
          </Stack>
        </Box> */}
        <Center mb={30}>
          <Group
            gap={"xs"}
            style={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <Box>
              <Image
                src="/assets/logo2.png"
                alt="Logo"
                height={100}
                width={100}
              />
            </Box>
            <Stack align="center" gap={0} justify="left">
              <Text
                fw={700}
                size={"30px"}
                ml={5}
                c={COLOR.white}
                style={{
                  letterSpacing: "1px",
                }}
              >
                Rajutmomen
              </Text>
              <Text
                style={{
                  fontSize: "12px",
                }}
                c={COLOR.white}
              >
                Undangan Pernikahan Digital
              </Text>
            </Stack>
          </Group>
        </Center>

        <Paper
          w={{ base: "100%", md: "500px", sm: "420px" }}
          radius="md"
          p={30}
          withBorder
          shadow="md"
          style={{
            backgroundColor: COLOR.pinkLight,
            transition: "all 0.3s ease",
            // border: `2px solid gradient(90deg, ${COLOR.pink} 20%, ${COLOR.pinkSoft} 60%) ${COLOR.pink}`,
          }}
        >
          <Title order={2} ta="center" mb={5}>
            Sign In
          </Title>

          <form onSubmit={form.onSubmit(handleSubmit)}>
            <Stack>
              <TextInput
                label="Email"
                placeholder="Masukkan email Anda"
                required
                {...form.getInputProps("email")}
              />

              <Box>
                <Group justify="space-between" mb={5}>
                  <Text component="label" size="sm" fw={500}>
                    Password
                  </Text>
                  <Anchor component={Link} href="/forgot-password" size="sm">
                    Lupa Password ?
                  </Anchor>
                </Group>
                <PasswordInput
                  placeholder="Masukkan password Anda"
                  required
                  {...form.getInputProps("password")}
                />
              </Box>

              <Button
                type="submit"
                fullWidth
                mt="md"
                radius="md"
                style={{ backgroundColor: COLOR.pink }}
                c={COLOR.white}
                size="md"
              >
                Sign In
              </Button>
            </Stack>
          </form>

          <Divider
            label="ATAU"
            labelPosition="center"
            my="lg"
            c={COLOR.white}
            styles={{ label: { color: COLOR.white } }}
          />

          <Stack>
            <Button
              variant="filled"
              color="dark"
              fullWidth
              leftSection={<IconKey size={16} />}
              radius="md"
              onClick={() => console.log("Login with access code")}
            >
              Masuk dengan kode akses
            </Button>

            <Button
              variant="default"
              fullWidth
              leftSection={<IconBrandGoogle size={16} />}
              radius="md"
              onClick={() => console.log("Login with Google")}
            >
              Masuk dengan Google
            </Button>

            <Button
              variant="default"
              fullWidth
              leftSection={<IconBrandApple size={16} />}
              radius="md"
              onClick={() => console.log("Login with Apple")}
            >
              Masuk dengan Apple
            </Button>

            <Button
              variant="subtle"
              fullWidth
              component={Link}
              href="/register"
              radius="md"
              c={COLOR.pink}
              mt="md"
            >
              Buat Akun Baru
            </Button>
          </Stack>
        </Paper>

        {/* Footer */}
        <Text ta="center" mt={30} size="sm" c={COLOR.pink}>
          Made with{" "}
          <Text span c={COLOR.pink}>
            ❤
          </Text>{" "}
          by Rajutmomen
        </Text>
      </Container>
    </Box>
  );
}

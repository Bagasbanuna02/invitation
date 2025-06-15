"use client";

import { COLOR } from "@/lib/color-palet";
import {
  Anchor,
  Box,
  Button,
  Container,
  Divider,
  Group,
  Paper,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconBrandApple, IconBrandGoogle, IconKey } from "@tabler/icons-react";
import Link from "next/link";
import { LogoAndBrandFooter, LogoAndBrandHeader } from "./share_components/logo_and_brand";


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
        background: `linear-gradient(135deg, ${COLOR.pink} 0%, ${COLOR.pinkSoft} 100%)`,
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
        <LogoAndBrandHeader />
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
            Login
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
        <LogoAndBrandFooter />
      </Container>
    </Box>
  );
}

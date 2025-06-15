"use client";

import { COLOR } from "@/lib/color-palet";
import {
  Box,
  Button,
  Container,
  Paper,
  PasswordInput,
  Stack,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import Link from "next/link";
import {
  LogoAndBrandFooter,
  LogoAndBrandHeader,
} from "./share_components/logo_and_brand";
import { styleBoxAuth } from "./share_components/styles_auth";

export default function UIRegister() {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validate: {
      name: (value) => (value.length < 2 ? "Nama minimal 2 karakter" : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Email tidak valid"),
      password: (value) =>
        value.length < 6 ? "Password minimal 6 karakter" : null,
      confirmPassword: (value, values) =>
        value !== values.password ? "Password tidak cocok" : null,
    },
  });

  const handleSubmit = (values: typeof form.values) => {
    console.log("Registration attempt:", values);
    // Handle registration logic here
  };

  return (
    <Box style={styleBoxAuth}>
      <Container size="xl">
        {/* Logo */}
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
            Register
          </Title>

          <form onSubmit={form.onSubmit(handleSubmit)}>
            <Stack>
              <TextInput
                label="Nama"
                required
                {...form.getInputProps("name")}
              />

              <TextInput
                label="Email"
                required
                {...form.getInputProps("email")}
              />

              <PasswordInput
                label="Password"
                required
                {...form.getInputProps("password")}
              />

              <PasswordInput
                label="Konfirmasi Password"
                required
                {...form.getInputProps("confirmPassword")}
              />

              <Button
                fullWidth
                type="submit"
                mt="md"
                radius="md"
                style={{ backgroundColor: COLOR.pink }}
                size="md"
              >
                Sign Up
              </Button>

              <Button
                fullWidth
                variant="subtle"
                component={Link}
                href="/login"
                radius="md"
                c={COLOR.pink}
                mt="sm"
              >
                Sudah Punya Akun
              </Button>
            </Stack>
          </form>
        </Paper>

        {/* Footer */}
        <LogoAndBrandFooter />
      </Container>
    </Box>
  );
}

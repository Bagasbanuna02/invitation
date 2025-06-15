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
    <Box
      style={{
        minHeight: "100vh",
        background: `linear-gradient(135deg, ${COLOR.pink} 0%, ${COLOR.pinkSoft} 100%)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <Container size={"xl"}>
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
          <Title order={2} ta="center" mb={30} c="dark">
            Register
          </Title>

          <form onSubmit={form.onSubmit(handleSubmit)}>
            <Stack>
              <TextInput
                label="Nama"
                placeholder="Masukkan nama lengkap Anda"
                required
                {...form.getInputProps("name")}
              />

              <TextInput
                label="Email"
                placeholder="Masukkan email Anda"
                required
                {...form.getInputProps("email")}
              />

              <PasswordInput
                label="Password"
                placeholder="Masukkan password Anda"
                required
                {...form.getInputProps("password")}
              />

              <PasswordInput
                label="Konfirmasi Password"
                placeholder="Konfirmasi password Anda"
                required
                {...form.getInputProps("confirmPassword")}
              />

              <Button
                type="submit"
                fullWidth
                mt="md"
                radius="md"
                style={{ backgroundColor: COLOR.pink }}
                size="md"
              >
                Sign Up
              </Button>

              <Button
                variant="subtle"
                fullWidth
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

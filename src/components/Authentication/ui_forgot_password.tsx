"use client";

import { COLOR } from "@/lib/color-palet";
import {
    Alert,
    Box,
    Button,
    Container,
    Paper,
    Stack,
    Text,
    TextInput,
    Title
} from "@mantine/core";
import { useForm } from "@mantine/form";
import {
    IconArrowLeft,
    IconInfoCircle
} from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";
import { LogoAndBrandFooter, LogoAndBrandHeader } from "./share_components/logo_and_brand";

export default function UIForgotPassword() {
  const [emailSent, setEmailSent] = useState(false);

  const form = useForm({
    initialValues: {
      email: "",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Email tidak valid"),
    },
  });

  const handleSubmit = (values: typeof form.values) => {
    console.log("Reset password for:", values.email);
    // Handle forgot password logic here
    setEmailSent(true);
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
          <Title order={2} ta="center" mb={10} c="dark">
            Lupa Password
          </Title>
          <Text ta="center" size="sm" c="dimmed" mb={30}>
            Masukkan email Anda untuk mendapatkan link reset password
          </Text>

          {emailSent ? (
            <Stack>
              <Alert
                icon={<IconInfoCircle size={16} />}
                color="green"
                variant="light"
              >
                Link reset password telah dikirim ke email Anda. Silakan cek
                inbox atau folder spam.
              </Alert>
              <Button
                component={Link}
                href="/login"
                fullWidth
                mt="md"
                radius="md"
                style={{ backgroundColor: COLOR.pink }}
              >
                Kembali ke Login
              </Button>
            </Stack>
          ) : (
            <form onSubmit={form.onSubmit(handleSubmit)}>
              <Stack>
                <TextInput
                  label="Email"
                  placeholder="Masukkan email Anda"
                  required
                  {...form.getInputProps("email")}
                />

                <Button
                  type="submit"
                  fullWidth
                  mt="md"
                  radius="md"
                  style={{ backgroundColor: COLOR.pink }}
                  size="md"
                >
                  Kirim Link Reset
                </Button>

                <Button
                  variant="subtle"
                  fullWidth
                  component={Link}
                  href="/login"
                  radius="md"
                  c={COLOR.pink}
                  leftSection={<IconArrowLeft size={16} />}
                >
                  Kembali ke Login
                </Button>
              </Stack>
            </form>
          )}
        </Paper>

        {/* Footer */}
        <LogoAndBrandFooter />
      </Container>
    </Box>
  );
}

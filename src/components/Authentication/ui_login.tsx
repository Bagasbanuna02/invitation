"use client";

import { COLOR } from "@/lib/color-palet";
import {
  Anchor,
  Box,
  Button,
  Container,
  Divider,
  Group,
  Modal,
  Paper,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { IconKey } from "@tabler/icons-react";
import Link from "next/link";
import {
  LogoAndBrandFooter,
  LogoAndBrandHeader,
} from "./share_components/logo_and_brand";
import { styleBoxAuth, stylePaperAuth } from "./share_components/styles_auth";

export default function UILogin() {
  const [opened, { open, close }] = useDisclosure(false);
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
    <Box style={styleBoxAuth}>
      <Container size="xl">
        {/* Logo */}

        <LogoAndBrandHeader />
        <Paper
          w={{ base: "100%", md: "500px", sm: "420px" }}
          shadow="xl"
          style={stylePaperAuth}
        >
          <Title order={2} ta="center" mb={5}>
            Login
          </Title>

          <form onSubmit={form.onSubmit(handleSubmit)}>
            <Stack>
              <TextInput
                label="Email"
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
                <PasswordInput required {...form.getInputProps("password")} />
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
            color={COLOR.black}
            styles={{ label: { color: COLOR.black } }}
          />

          <Stack>
            <Button
              variant="filled"
              color="dark"
              fullWidth
              leftSection={<IconKey size={16} />}
              radius="md"
              onClick={open}
            >
              Masuk dengan kode
            </Button>

            {/* <Button
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
            </Button> */}

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

      <Modal
        opened={opened}
        onClose={close}
        centered
        // title={"Login dengan kode akses"}
        // styles={{
        //   title: {
        //     fontWeight: "bold",

        //   },
        //   header: {
        //     borderBottom: "1px solid #ccc",
        //   }
        // }}
      >
        <Stack>
          <TextInput
            label={"Masukan Kode Akses"}
            styles={{
              label: { textAlign: "center", fontWeight: "bold", width: "100%" },
            }}
          />

          <Button
            type="submit"
            fullWidth
            mt="md"
            radius="md"
            style={{ backgroundColor: COLOR.pink }}
            c={COLOR.white}
            size="md"
            onClick={close}
          >
            Sign In
          </Button>
        </Stack>
      </Modal>
    </Box>
  );
}

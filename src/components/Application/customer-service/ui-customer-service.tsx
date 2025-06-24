"use client";

import { COLOR } from "@/lib/color-palet";
import {
  Accordion,
  Box,
  Button,
  Card,
  Group,
  Select,
  SimpleGrid,
  Stack,
  Tabs,
  Text,
  Textarea,
  TextInput,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import {
  IconBrandWhatsapp,
  IconClock,
  IconHeadphones,
  IconMail,
  IconMessageCircle,
  IconQuestionMark,
  IconSend,
} from "@tabler/icons-react";

const faqData = [
  {
    question: "Bagaimana cara membuat undangan digital?",
    answer:
      "Anda dapat membuat undangan digital dengan mendaftar akun, memilih paket yang sesuai, lalu menggunakan editor undangan kami yang mudah digunakan.",
  },
  {
    question: "Apakah undangan bisa diakses selamanya?",
    answer:
      "Ya, untuk paket Premium dan Business, undangan Anda akan aktif selamanya tanpa batasan waktu.",
  },
  {
    question: "Bagaimana cara mengirim undangan ke tamu?",
    answer:
      "Anda bisa mengirim undangan melalui WhatsApp, email, atau membagikan link undangan langsung ke media sosial.",
  },
  {
    question: "Apakah bisa mengubah desain undangan setelah dibuat?",
    answer:
      "Tentu saja! Anda bisa mengubah desain, konten, dan pengaturan undangan kapan saja melalui dashboard.",
  },
  {
    question: "Bagaimana cara menerima kado digital?",
    answer:
      "Fitur kado digital terintegrasi dengan berbagai metode pembayaran. Tamu dapat mengirim kado melalui transfer bank atau e-wallet.",
  },
];

export default function Dashboard_CustomerServicePage() {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      category: "",
      message: "",
    },
    validate: {
      name: (value) => (value.length < 2 ? "Nama minimal 2 karakter" : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Email tidak valid"),
      subject: (value) =>
        value.length < 5 ? "Subjek minimal 5 karakter" : null,
      message: (value) =>
        value.length < 10 ? "Pesan minimal 10 karakter" : null,
    },
  });

  const handleSubmit = (values: typeof form.values) => {
    console.log("Support ticket:", values);
    // Handle support ticket submission
  };

  return (
    <Stack p="md">
      <Stack gap="xl">
        {/* Header */}
        <Box ta="center">
          <Title order={2} c={COLOR.black} mb="xs">
            Hubungi Kami
          </Title>

          <Text c="gray.6" size="sm" mt="xs">
            Segera konsultasikan kepada kami kebutuhan anda. Tim kami akan
            membantu anda.
          </Text>
        </Box>

        <Tabs defaultValue="contact" variant="outline">
          <Tabs.List grow>
            <Tabs.Tab
              value="contact"
              leftSection={<IconHeadphones size={16} />}
            >
              Kontak Kami
            </Tabs.Tab>
            <Tabs.Tab
              value="ticket"
              leftSection={<IconMessageCircle size={16} />}
            >
              Kirim Pesan
            </Tabs.Tab>
            <Tabs.Tab value="faq" leftSection={<IconQuestionMark size={16} />}>
              FAQ
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="contact" pt="xl">
            <Stack gap="xl" align="center">
              {/* Contact Methods */}
              <SimpleGrid
                cols={{ base: 1, sm: 2 }}
                spacing="xl"
                w="100%"
                maw={600}
              >
                <Card
                  padding="xl"
                  radius="md"
                  withBorder
                  style={{ backgroundColor: COLOR.white, textAlign: "center" }}
                >
                  <ThemeIcon
                    size={60}
                    radius="xl"
                    variant="light"
                    style={{
                      backgroundColor: "#25D366",
                      color: "white",
                      margin: "0 auto",
                    }}
                    mb="md"
                  >
                    <IconBrandWhatsapp size={30} />
                  </ThemeIcon>
                  <Text fw={600} size="lg" mb="xs">
                    WhatsApp
                  </Text>
                  <Text c={COLOR.pink} fw={600} size="lg">
                    +62 811 2345 678
                  </Text>
                  <Button
                    mt="md"
                    style={{ backgroundColor: "#25D366" }}
                    fullWidth
                    component="a"
                    href="https://wa.me/6281123456789"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chat WhatsApp
                  </Button>
                </Card>

                <Card
                  padding="xl"
                  radius="md"
                  withBorder
                  style={{ backgroundColor: COLOR.white, textAlign: "center" }}
                >
                  <ThemeIcon
                    size={60}
                    radius="xl"
                    variant="light"
                    style={{
                      backgroundColor: COLOR.pink,
                      color: "white",
                      margin: "0 auto",
                    }}
                    mb="md"
                  >
                    <IconMail size={30} />
                  </ThemeIcon>
                  <Text fw={600} size="lg" mb="xs">
                    Email
                  </Text>
                  <Text c={COLOR.pink} fw={600} size="lg">
                    admin@rajutmomen.com
                  </Text>
                  <Button
                    mt="md"
                    style={{ backgroundColor: COLOR.pink }}
                    fullWidth
                    component="a"
                    href="mailto:admin@rajutmomen.com"
                  >
                    Kirim Email
                  </Button>
                </Card>
              </SimpleGrid>

              {/* Operating Hours */}
              <Card
                padding="xl"
                radius="md"
                withBorder
                style={{ backgroundColor: COLOR.beige }}
                maw={500}
                w="100%"
              >
                <Group justify="center" mb="md">
                  <ThemeIcon
                    size={40}
                    radius="xl"
                    variant="light"
                    style={{
                      backgroundColor: COLOR.pinkSoft,
                      color: COLOR.pink,
                    }}
                  >
                    <IconClock size={20} />
                  </ThemeIcon>
                </Group>
                <Text ta="center" fw={600} size="lg" c={COLOR.black} mb="xs">
                  Jam Operasional Layanan Customer Service
                </Text>
                <Text ta="center" c={COLOR.pink} fw={600} size="lg">
                  Setiap Hari
                </Text>
                <Text ta="center" c={COLOR.pink} fw={600} size="xl">
                  08.00 - 20.00 WIB
                </Text>
              </Card>
            </Stack>
          </Tabs.Panel>

          <Tabs.Panel value="ticket" pt="md">
            <Card
              padding="xl"
              radius="md"
              withBorder
              style={{ backgroundColor: COLOR.white }}
              maw={600}
              mx="auto"
            >
              <Title order={4} mb="md" c={COLOR.black}>
                Kirim Pesan Dukungan
              </Title>
              <Text size="sm" c="gray.6" mb="xl">
                Isi formulir di bawah ini untuk mengirim pesan kepada tim
                dukungan kami
              </Text>

              <form onSubmit={form.onSubmit(handleSubmit)}>
                <Stack gap="md">
                  <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
                    <TextInput
                      label="Nama Lengkap"
                      placeholder="Masukkan nama lengkap"
                      required
                      {...form.getInputProps("name")}
                    />
                    <TextInput
                      label="Email"
                      placeholder="Masukkan email"
                      required
                      {...form.getInputProps("email")}
                    />
                  </SimpleGrid>

                  <Select
                    label="Kategori"
                    placeholder="Pilih kategori masalah"
                    data={[
                      { value: "technical", label: "Masalah Teknis" },
                      { value: "billing", label: "Pembayaran & Tagihan" },
                      { value: "feature", label: "Fitur & Fungsionalitas" },
                      { value: "account", label: "Akun & Profil" },
                      { value: "other", label: "Lainnya" },
                    ]}
                    {...form.getInputProps("category")}
                  />

                  <TextInput
                    label="Subjek"
                    placeholder="Masukkan subjek pesan"
                    required
                    {...form.getInputProps("subject")}
                  />

                  <Textarea
                    label="Pesan"
                    placeholder="Jelaskan masalah atau pertanyaan Anda secara detail"
                    required
                    minRows={4}
                    {...form.getInputProps("message")}
                  />

                  <Button
                    type="submit"
                    fullWidth
                    mt="md"
                    leftSection={<IconSend size={16} />}
                    style={{ backgroundColor: COLOR.pink }}
                  >
                    Kirim Pesan
                  </Button>
                </Stack>
              </form>
            </Card>
          </Tabs.Panel>

          <Tabs.Panel value="faq" pt="md">
            <Box maw={800} mx="auto">
              <Title order={4} mb="md" c={COLOR.black} ta="center">
                Frequently Asked Questions (FAQ)
              </Title>
              <Text size="sm" c="gray.6" mb="xl" ta="center">
                Temukan jawaban untuk pertanyaan yang sering diajukan
              </Text>

              <Accordion variant="separated" radius="md">
                {faqData.map((item, index) => (
                  <Accordion.Item key={index} value={`faq-${index}`}>
                    <Accordion.Control>
                      <Text fw={500}>{item.question}</Text>
                    </Accordion.Control>
                    <Accordion.Panel>
                      <Text size="sm" c="gray.7">
                        {item.answer}
                      </Text>
                    </Accordion.Panel>
                  </Accordion.Item>
                ))}
              </Accordion>

              <Box ta="center" mt="xl">
                <Text size="sm" c="gray.6" mb="md">
                  Tidak menemukan jawaban yang Anda cari?
                </Text>
                <Button
                  variant="outline"
                  style={{ borderColor: COLOR.pink, color: COLOR.pink }}
                >
                  Hubungi Customer Service
                </Button>
              </Box>
            </Box>
          </Tabs.Panel>
        </Tabs>

        {/* Footer */}
        {/* <Group
          justify="space-between"
          pt="xl"
          style={{ borderTop: `1px solid ${COLOR.beige}` }}
        >
          <Text size="sm" c="gray.6">
            Made with ❤ for your Moment | Powered by Rajutmomen
          </Text>
          <Text size="sm" c="gray.6">
            Version: 1.2
          </Text>
        </Group> */}
      </Stack>
    </Stack>
  );
}

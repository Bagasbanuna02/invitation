
"use client";

import { COLOR } from "@/lib/color-palet";
import {
    ActionIcon,
    Badge,
    Box,
    Button,
    Card,
    Divider,
    Group,
    SimpleGrid,
    Stack,
    Table,
    Tabs,
    Text,
    ThemeIcon,
    Title
} from "@mantine/core";
import {
    IconCheck,
    IconClock,
    IconCreditCard,
    IconDownload,
    IconEye,
    IconReceipt,
    IconWallet,
    IconX
} from "@tabler/icons-react";

const transactions = [
  {
    id: "TRX001",
    date: "2024-06-20",
    package: "Premium",
    amount: "IDR 69,000",
    status: "success",
    paymentMethod: "Bank Transfer",
    invoice: "INV-2024-001",
  },
  {
    id: "TRX002",
    date: "2024-05-15",
    package: "Business",
    amount: "IDR 99,000",
    status: "pending",
    paymentMethod: "E-Wallet",
    invoice: "INV-2024-002",
  },
  {
    id: "TRX003",
    date: "2024-04-10",
    package: "Premium",
    amount: "IDR 69,000",
    status: "failed",
    paymentMethod: "Credit Card",
    invoice: "INV-2024-003",
  },
];

const packages = [
  {
    name: "Premium",
    originalPrice: "IDR 100,000",
    price: "IDR 69,000",
    discount: "31% OFF",
    features: [
      "1 Undangan Premium",
      "Undangan Aktif Selamanya",
      "Unlimited Kuota Tamu",
      "Foto & Video Gallery",
      "Background",
      "Ucapan & Doa",
      "Tema Premium",
      "Link Streaming",
      "Kado Cashless / Donasi",
      "Layar Penerima Tamu",
    ],
    color: COLOR.pink,
  },
  {
    name: "Business",
    originalPrice: "IDR 200,000",
    price: "IDR 99,000",
    discount: "50.5% OFF",
    features: [
      "2 Undangan Premium",
      "Undangan Aktif Selamanya",
      "Unlimited Kuota Tamu",
      "Foto & Video Gallery",
      "Background",
      "Ucapan & Doa",
      "Tema Premium",
      "Link Streaming",
      "Kado Cashless / Donasi",
      "Layar Penerima Tamu",
    ],
    color: COLOR.pink,
  },
  {
    name: "Enterprise",
    originalPrice: "IDR 500,000",
    price: "IDR 240,000",
    discount: "52% OFF",
    features: [
      "5 Undangan Premium",
      "Undangan Aktif Selamanya",
      "Unlimited Kuota Tamu",
      "Foto & Video Gallery",
      "Background",
      "Ucapan & Doa",
      "Tema Premium",
      "Link Streaming",
      "Kado Cashless / Donasi",
      "Layar Penerima Tamu",
    ],
    color: COLOR.pink,
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "success":
      return "green";
    case "pending":
      return "yellow";
    case "failed":
      return "red";
    default:
      return "gray";
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case "success":
      return <IconCheck size={16} />;
    case "pending":
      return <IconClock size={16} />;
    case "failed":
      return <IconX size={16} />;
    default:
      return <IconClock size={16} />;
  }
};

const getStatusText = (status: string) => {
  switch (status) {
    case "success":
      return "Berhasil";
    case "pending":
      return "Menunggu";
    case "failed":
      return "Gagal";
    default:
      return "Unknown";
  }
};

export default function Dashboard_TransactionsPage() {
  const isAlreadyPaid = false;
  return (
    <Stack p="md">
      <Stack gap="xl">
        {/* Header */}
        {/* <Group justify="space-between">
          <Box>
            <Title order={2} c={COLOR.black}>
              Transaksi
            </Title>
            <Text c="gray.6">Kelola transaksi dan upgrade paket Anda</Text>
          </Box>
          <Button
            leftSection={<IconArrowUp size={16} />}
            style={{ backgroundColor: COLOR.pink }}
          >
            Upgrade Paket
          </Button>
        </Group> */}

        {isAlreadyPaid ? (
          <Tabs defaultValue="history" variant="outline">
            <Tabs.List>
              <Tabs.Tab value="history" leftSection={<IconReceipt size={16} />}>
                Riwayat Transaksi
              </Tabs.Tab>
              <Tabs.Tab value="upgrade" leftSection={<IconWallet size={16} />}>
                Upgrade Paket
              </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="history" pt="md">
              <Card
                padding="lg"
                radius="md"
                withBorder
                style={{ backgroundColor: COLOR.white }}
              >
                <Title order={4} mb="md" c={COLOR.black}>
                  Riwayat Transaksi
                </Title>

                {transactions.length > 0 ? (
                  <Table striped highlightOnHover>
                    <Table.Thead>
                      <Table.Tr>
                        <Table.Th>ID Transaksi</Table.Th>
                        <Table.Th>Tanggal</Table.Th>
                        <Table.Th>Paket</Table.Th>
                        <Table.Th>Jumlah</Table.Th>
                        <Table.Th>Metode Pembayaran</Table.Th>
                        <Table.Th>Status</Table.Th>
                        <Table.Th>Aksi</Table.Th>
                      </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>
                      {transactions.map((transaction) => (
                        <Table.Tr key={transaction.id}>
                          <Table.Td>
                            <Text fw={500} size="sm">
                              {transaction.id}
                            </Text>
                          </Table.Td>
                          <Table.Td>
                            <Text size="sm">{transaction.date}</Text>
                          </Table.Td>
                          <Table.Td>
                            <Text size="sm">{transaction.package}</Text>
                          </Table.Td>
                          <Table.Td>
                            <Text fw={600} size="sm" c={COLOR.pink}>
                              {transaction.amount}
                            </Text>
                          </Table.Td>
                          <Table.Td>
                            <Text size="sm">{transaction.paymentMethod}</Text>
                          </Table.Td>
                          <Table.Td>
                            <Badge
                              color={getStatusColor(transaction.status)}
                              variant="light"
                              leftSection={getStatusIcon(transaction.status)}
                              size="sm"
                            >
                              {getStatusText(transaction.status)}
                            </Badge>
                          </Table.Td>
                          <Table.Td>
                            <Group gap="xs">
                              <ActionIcon
                                variant="light"
                                color="blue"
                                size="sm"
                              >
                                <IconEye size={14} />
                              </ActionIcon>
                              <ActionIcon
                                variant="light"
                                color="green"
                                size="sm"
                              >
                                <IconDownload size={14} />
                              </ActionIcon>
                            </Group>
                          </Table.Td>
                        </Table.Tr>
                      ))}
                    </Table.Tbody>
                  </Table>
                ) : (
                  <Box ta="center" py="xl">
                    <ThemeIcon
                      size={60}
                      radius="xl"
                      variant="light"
                      color="gray"
                    >
                      <IconReceipt size={30} />
                    </ThemeIcon>
                    <Text mt="md" c="gray.6">
                      Belum ada transaksi
                    </Text>
                    <Text size="sm" c="gray.5">
                      Transaksi Anda akan muncul di sini
                    </Text>
                  </Box>
                )}
              </Card>
            </Tabs.Panel>

            <Tabs.Panel value="upgrade" pt="md">
              <Stack gap="lg">
                <Box>
                  <Title order={4} c={COLOR.black} mb="xs">
                    Upgrade Paket
                  </Title>
                  <Text c="gray.6" size="sm">
                    Pilih paket yang sesuai dengan kebutuhan Anda
                  </Text>
                </Box>

                <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
                  {packages.map((pkg, index) => (
                    <Card
                      key={index}
                      padding="lg"
                      radius="md"
                      withBorder
                      style={{ backgroundColor: COLOR.white }}
                    >
                      <Stack gap="md">
                        <Box ta="center">
                          <Title order={4} c={COLOR.black} mb="xs">
                            {pkg.name}
                          </Title>
                          <Group justify="center" gap="xs" mb="sm">
                            <Text td="line-through" c="gray.6" size="sm">
                              {pkg.originalPrice}
                            </Text>
                            <Badge
                              style={{ backgroundColor: COLOR.pinkLight }}
                              variant="filled"
                              size="sm"
                            >
                              {pkg.discount}
                            </Badge>
                          </Group>
                          <Text size="xl" fw={700} c={pkg.color}>
                            {pkg.price}
                          </Text>
                        </Box>

                        <Divider />

                        <Stack gap="xs">
                          {pkg.features.map((feature, i) => (
                            <Group key={i} gap="xs" wrap="nowrap">
                              <ThemeIcon
                                size={16}
                                radius="xl"
                                variant="light"
                                style={{
                                  backgroundColor: COLOR.pinkSoft,
                                  color: COLOR.pink,
                                }}
                              >
                                <IconCheck size={10} />
                              </ThemeIcon>
                              <Text size="sm">{feature}</Text>
                            </Group>
                          ))}
                        </Stack>

                        <Button
                          fullWidth
                          mt="md"
                          radius="md"
                          style={{ backgroundColor: pkg.color }}
                          leftSection={<IconCreditCard size={16} />}
                        >
                          Pilih Paket
                        </Button>
                      </Stack>
                    </Card>
                  ))}
                </SimpleGrid>
              </Stack>
            </Tabs.Panel>
          </Tabs>
        ) : (
          <Stack gap="lg">
            <Box>
              <Title order={4} c={COLOR.black} mb="xs">
                Upgrade Paket
              </Title>
              <Text c="gray.6" size="sm">
                Pilih paket yang sesuai dengan kebutuhan Anda
              </Text>
            </Box>

            <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
              {packages.map((pkg, index) => (
                <Card
                  key={index}
                  padding="lg"
                  radius="md"
                  withBorder
                  style={{ backgroundColor: COLOR.white }}
                >
                  <Stack gap="md">
                    <Box ta="center">
                      <Title order={4} c={COLOR.black} mb="xs">
                        {pkg.name}
                      </Title>
                      <Group justify="center" gap="xs" mb="sm">
                        <Text td="line-through" c="gray.6" size="sm">
                          {pkg.originalPrice}
                        </Text>
                        <Badge
                          style={{ backgroundColor: COLOR.pinkLight }}
                          variant="filled"
                          size="sm"
                        >
                          {pkg.discount}
                        </Badge>
                      </Group>
                      <Text size="xl" fw={700} c={pkg.color}>
                        {pkg.price}
                      </Text>
                    </Box>

                    <Divider />

                    <Stack gap="xs">
                      {pkg.features.map((feature, i) => (
                        <Group key={i} gap="xs" wrap="nowrap">
                          <ThemeIcon
                            size={16}
                            radius="xl"
                            variant="light"
                            style={{
                              backgroundColor: COLOR.pinkSoft,
                              color: COLOR.pink,
                            }}
                          >
                            <IconCheck size={10} />
                          </ThemeIcon>
                          <Text size="sm">{feature}</Text>
                        </Group>
                      ))}
                    </Stack>

                    <Button
                      fullWidth
                      mt="md"
                      radius="md"
                      style={{ backgroundColor: pkg.color }}
                      leftSection={<IconCreditCard size={16} />}
                    >
                      Pilih Paket
                    </Button>
                  </Stack>
                </Card>
              ))}
            </SimpleGrid>
          </Stack>
        )}
      </Stack>
    </Stack>
  );
}

"use client";

import ApplicationTitleSection from "@/components/Application/share-component/title-section";
import Dashboard_TransactionsPage from "@/components/Application/transaction/ui-transaction";
import { Stack } from "@mantine/core";

export default function TransactionPage() {
  return (
    <Stack>
      <ApplicationTitleSection title="Transaksi" hiddenFrom="sm" />
      <Dashboard_TransactionsPage />
    </Stack>
  );
}

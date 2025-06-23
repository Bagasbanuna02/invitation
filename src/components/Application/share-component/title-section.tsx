import { Title } from "@mantine/core";

export default function ApplicationTitleSection({ title }: { title: string }) {
  return (
    <>
      <Title order={4}>{title}</Title>
    </>
  );
}

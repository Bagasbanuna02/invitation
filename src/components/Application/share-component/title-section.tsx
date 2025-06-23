import { MantineBreakpoint, Title } from "@mantine/core";

export default function ApplicationTitleSection({
  title,
  visibleFrom,
  hiddenFrom,
  
}: {
  title: string;
  visibleFrom?: MantineBreakpoint;
  hiddenFrom?: MantineBreakpoint;
}) {
  return (
    <>
      <Title order={4} visibleFrom={visibleFrom} hiddenFrom={hiddenFrom}>{title}</Title>
    </>
  );
}

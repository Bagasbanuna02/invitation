import { MantineStyleProp } from "@mantine/core";
import { COLOR } from "@/lib/color-palet";

export { styleBoxAuth, stylePaperAuth };

const styleBoxAuth: MantineStyleProp = {
  minHeight: "100vh",
  background: `linear-gradient(135deg, ${COLOR.pink} 0%, ${COLOR.pinkSoft} 100%)`,
  display: "flex",
  //   flex: 1,
  //   margin: "0px",
  padding: "40px 20px ",
  alignItems: "center",
  justifyContent: "center",
};

const stylePaperAuth: MantineStyleProp = {
  radius: "md",
  withBorder: true,
  backgroundColor: COLOR.pinkLight,
  transition: "all 0.3s ease",
  padding: "20px",
};

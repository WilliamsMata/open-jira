import { PropsWithChildren } from "react";
import Head from "next/head";
import { Box } from "@mui/material";

import { Navbar, Sidebar } from "../ui";

interface Props {
  title?: string;
}

export const Layout = ({
  title = "OpenJira",
  children,
}: PropsWithChildren<Props>) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Head>
        <title>{title}</title>
      </Head>

      <Navbar />
      <Sidebar />

      <Box sx={{ padding: "0.5rem 1rem" }}>{children}</Box>
    </Box>
  );
};

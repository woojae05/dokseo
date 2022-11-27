import React from "react";
import Header from "../common/header/Header";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/globals";
import { lightTheme, darkTheme } from "../../styles/theme";
import useTheme from "../../hooks/useTheme";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const { darkThemeState } = useTheme();
  const theme = darkThemeState ? darkTheme : lightTheme;
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        {children}
      </ThemeProvider>
    </>
  );
};

export default Layout;

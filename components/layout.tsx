import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import { MantineProvider } from '@mantine/core';
import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme, _params, getRef) => ({
  wrapper: {
    background:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[8]
        : theme.colors.gray[3],
  },
}));

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  const { classes } = useStyles();
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <div className={classes.wrapper}>
        <Header  />
        <main>{children}</main>
        <Footer />
      </div>
    </MantineProvider>
  );
}

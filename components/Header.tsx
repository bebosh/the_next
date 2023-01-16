import { useState } from 'react';
import Image from 'next/image';
import {
  Navbar,
  Header,
  Box,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
} from '@mantine/core';
const HeaderComponent = () => {
  const [opened, setOpened] = useState(false);
  return (
    <Header height={{ base: 80 }} bg="#5F9EA0"  p="md">
      <Box>
        <Image
          style={{ borderRadius: '50%' }}
          src="/images/flower_logo.png"
          height={50}
          width={50}
          alt="logo"
        />
      </Box>
    </Header>
  );
};

export default HeaderComponent;

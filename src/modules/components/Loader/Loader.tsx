import { Loader as CircularProgress, Flex } from '@mantine/core';

import { Wrapper } from './Loader.styled';

export const Loader = () => (
  <Wrapper>
    <Flex justify="center" align="center" gap="md">
      <CircularProgress size="lg" />
      <CircularProgress size="lg" />
      <CircularProgress size="lg" />
    </Flex>
  </Wrapper>
);

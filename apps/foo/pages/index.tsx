import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { css } from '@styled-system/css';

import Box from '../components/box';

const theme = {
  colors: {
    primary: 'hotpink',
  },
};

export const Index = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <p css={(theme) => ({ color: theme.colors.primary })}>Welcome!</p>
        <Box p={2}>Styled System</Box>
        <p css={css({ color: 'primary', m: 2 })}>@styled-system/css</p>
      </ThemeProvider>
    </div>
  );
};

export default Index;

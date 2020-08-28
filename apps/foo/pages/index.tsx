import React from 'react';
import { ThemeProvider } from 'emotion-theming';
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
      </ThemeProvider>
    </div>
  );
};

export default Index;

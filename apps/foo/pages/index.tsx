import React from 'react';
import { ThemeProvider } from 'emotion-theming';

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
      </ThemeProvider>
    </div>
  );
};

export default Index;

import React from 'react';
import ThemeProvider from '../src/theme/Provider';

const themeDecorator = (Story) => <ThemeProvider><Story /></ThemeProvider>;

export default themeDecorator;

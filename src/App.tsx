import { Global, css, ThemeProvider } from '@emotion/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import theme from '@styles/theme';
import GoogleForm from '@pages/GoogleForm';
import GoogleFormPreview from '@pages/GoogleFormPreview';

function App() {
  return (
    <main>
      <ThemeProvider theme={theme}>
        <Global styles={globalCss.global} />
        <Router>
          <Routes>
            <Route path='/' element={<GoogleForm />} />
            <Route path='/preview' element={<GoogleFormPreview />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </main>
  );
}

const globalCss = {
  global: css({
    html: {
      backgroundColor: `${theme.colors.mauve}`,
    },

    body: {
      margin: '0 auto',
      border: '0',
      boxSizing: 'border-box',
      width: '770px',
    },
  }),
};

export default App;

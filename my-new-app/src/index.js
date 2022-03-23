import * as React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import router from '@sitevision/api/common/router';
import App from './components/App';

router.get('/', (req, res) => {


  res.agnosticRender(renderToStaticMarkup(<App />),
    {}
  );
});

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import global_en from './translations/en/global.json'
import global_id from './translations/id/global.json'
import i18next from 'i18next'
import { I18nextProvider } from 'react-i18next'

i18next.init({
  interpolation : {escapeValue: true},
  lng: 'en',
  resources: {
    en: {
      global: global_en
    },
    id: {
      global: global_id
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>

  </React.StrictMode>,
)

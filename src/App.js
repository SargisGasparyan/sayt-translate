import { FormattedMessage } from 'react-intl';
import './App.css';
import React from 'react'
import { I18nProvider,LOCALES } from './i18n';

function App() {
  const [locale,setLocale]=React.useState(LOCALES.ENGLISH)
  return (
    <I18nProvider locale={locale}>
    <div className="App">
      <h1><FormattedMessage id="hellow"/></h1>  
      <button onClick={()=>setLocale(LOCALES.ENGLISH)}>en</button>  
      <button onClick={()=>setLocale(LOCALES.GERMAN)}>de</button>  
      <button onClick={()=>setLocale(LOCALES.FRENCH)}>fr</button>  
</div>
</I18nProvider>
  );
}
export default App;

import React, {Fragment} from 'react'
import {IntlProvider} from "react-intl"
import { LOCALES } from './locales'
import messages from './messages'

const Provider = ({children,locale=LOCALES.ENGLISH})=>{
    return (
        <IntlProvider 
            locale={locale}
            messages={messages[locale]}
            textComponent={Fragment}
    >
        {children}
    </IntlProvider>
    )
}
export default Provider
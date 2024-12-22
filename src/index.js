import './index.css'
import { createRoot } from 'react-dom/client'
import React from 'react'

import App from './app'

const elemento = document.getElementById('root')
const root = createRoot(elemento)
root.render(
    <App></App>
)
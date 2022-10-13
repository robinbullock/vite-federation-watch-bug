import React from 'react'
import {createRoot} from 'react-dom/client';

import RemoteApp from 'remote/App'

const App = () => <><h2>Home app</h2><RemoteApp /></>

createRoot(document.getElementById('root')).render(<App />)

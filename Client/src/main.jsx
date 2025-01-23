
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import WishlistProvider from "../context/wislistContext.jsx";

 
createRoot(document.getElementById('root')).render(
<BrowserRouter> 
<WishlistProvider>
<App />
</WishlistProvider>


 
 </BrowserRouter>


)

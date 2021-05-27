import { ImageProvider } from '../contexts/ImageContext';

import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <ImageProvider>
      <Component {...pageProps} />
    </ImageProvider>
  )
  
}

export default MyApp

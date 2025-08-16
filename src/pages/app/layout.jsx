import { CartProvider } from "../../context/CartContext"; 
import "../../styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}

import "./globals.css";

export const metadata = {
  title: "Gobernacion de Antioquia | Propuesta de mejora",
  description: "Pagina informativa institucional",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

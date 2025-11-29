// app/layout.jsx
export const metadata = {
  title: 'Truck Store',
  description: 'Buy heavy trucks online',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

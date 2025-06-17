import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <nav>
          <ul>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/roster'>Roster</Link>
            </li>
            <li>
              <Link href='/schedule'>Schedule</Link>
            </li>
            <li>
              <Link href='/mascot'>Mascot</Link>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
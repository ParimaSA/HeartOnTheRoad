import { Josefin_Sans, Prompt } from 'next/font/google';
import "./globals.css";
import NavBar from '@/components/Navbar';

const josefinSans = Josefin_Sans({
  variable: "--font-josefin-sans",
  subsets: ["latin"],
  display: "swap",
});

const prompt = Prompt({
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata = {
  title: "HeartOnTheRoad",
  description: "How does traffic congestion impact heart rate?",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={prompt.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}

import { Button } from "@material-tailwind/react";
import { Inter } from "next/font/google";
import { Link } from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div>
        <p>Hello world!</p>
        <h2>
          <Link href="/">Games</Link>
        </h2>
      </div>
    </main>
  );
}

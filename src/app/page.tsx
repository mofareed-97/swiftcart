import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
        An example app built using Next.js 13 server components.
      </h1>
    </main>
  );
}

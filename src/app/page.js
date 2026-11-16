import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-dvh flex-1 items-center justify-center bg-gradient-to-b from-white to-blue-50 px-6">
      <Image
        src="/logo.png"
        alt="The Laban Wala logo"
        width={1068}
        height={1075}
        className="w-56 h-auto sm:w-72"
        priority
      />
    </main>
  );
}

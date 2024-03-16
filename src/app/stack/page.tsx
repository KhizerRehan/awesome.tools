import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen p-24">
      <h1 className="mb-3 text-2xl font-semibold">Stack Used </h1>
      <ul className="mt-10 list-disc">
        <li className=" text-sky-600 cursor-pointer">
          <Link href={"https://ui.shadcn.com/"}>shadcn/ui</Link>
        </li>
        <li className=" text-sky-600 cursor-pointer">
          <Link href={"https://tailwindcss.com/"}>tailwindcss</Link>
        </li>
        <li className=" text-sky-600 cursor-pointer">
          <Link href={"https://github.com/lukeed/clsx"}>npm: clsx</Link>
        </li>
      </ul>

      <br />

      <summary>
        Awesome Tools is deployed to{" "}
        <span className=" text-2xl font-bold">Vercel</span>
      </summary>
    </main>
  );
}

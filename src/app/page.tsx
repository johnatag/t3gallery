import Link from "next/link";
import { Gallery } from "./_components/gallery.component";
import { db } from "~/server/db";

export const dynamic = "force-dynamic"

export default async function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap">
        <Gallery />
      </div>
    </main>
  );
}
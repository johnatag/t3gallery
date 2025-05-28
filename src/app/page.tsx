import Link from "next/link";
import { Gallery } from "./_components/gallery.component";
import { db } from "~/server/db";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export const dynamic = "force-dynamic"

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="w-full h-full text-2xl text-center">Please Sign in above</div>
      </SignedOut>
      <SignedIn>
        <div className="flex flex-wrap">
          <Gallery />
        </div>        
      </SignedIn>

    </main>
  );
}
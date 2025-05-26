import Link from "next/link";
import { Gallery } from "./components/gallery.component";

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap">{
        <Gallery />
      }</div>
    </main>
  );
}
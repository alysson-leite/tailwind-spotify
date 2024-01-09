/* eslint-disable react/no-unescaped-entities */
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Footer } from "./components/Footer";
import { MostPlayed } from "./components/MostPlayed";
import { Playlists } from "./components/Playlists";
import { Sidebar } from "./components/Sidebar";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>
          <MostPlayed />

          <h2 className="font-semibold text-2xl mt-10">
            Spotify's Playlists
          </h2>
          <Playlists />
          
        </main>
      </div>
      <Footer />
    </div>
  );
}

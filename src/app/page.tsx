import {
  ChevronLeft,
  ChevronRight,
  Play,
  Sidebar,
} from "lucide-react";
import Image from "next/image";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
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
          <div className="grid grid-cols-3 gap-4 mt-4">
            <a
              href="#"
              className="bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors"
            >
              <Image
                src="/ImagineDragonsEvolve.jpg"
                width={88}
                height={88}
                alt="imagem do album de imagine dragons"
              />
              <strong>Wasting Ligth</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 txt-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors"
            >
              <Image
                src="/ImagineDragonsEvolve.jpg"
                alt="imagem do album de imagine dragons"
              />
              <strong>Wasting Ligth</strong>
            </a>
            <a
              href="#"
              className="bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors"
            >
              <Image
                src="/ImagineDragonsEvolve.jpg"
                alt="imagem do album de imagine drag ons"
              />
              <strong>Wasting Ligth</strong>
            </a>
            <a
              href="#"
              className="bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors"
            >
              <Image
                src="/ImagineDragonsEvolve.jpg"
                alt="imagem do album de imagine dragons"
              />
              <strong>Wasting Ligth</strong>
            </a>
            <a
              href="#"
              className="bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors"
            >
              <Image
                src="/ImagineDragonsEvolve.jpg"
                alt="imagem do album de imagine dragons"
              />
              <strong>Wasting Ligth</strong>
            </a>
            <a
              href="#"
              className="bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors"
            >
              <Image
                src="/ImagineDragonsEvolve.jpg"
                alt="imagem do album de imagine dragons"
              />
              <strong>Wasting Ligth</strong>
            </a>
          </div>

          <h2 className="font-semibold text-2xl mt-10">
            Made for Diego Schell Fernandes
          </h2>

          <div className="grid grid-grid-cols-8 gap-4 mt-4">
            <a href="" className="bg-white/5 p-3 rounded-md hover:bg-white/10">
              <Image
                src="/ImagineDragonsEvolve.jpg"
                className="w-full"
                width={120}
                height={120}
                alt="Capa album Imagine Dragons"
              />
              <strong>Daily Mix 1</strong>
              <span className="text-xs text-zinc-400">
                Wallows, COIN, girl in red and more
              </span>
            </a>
            <a href="" className="bg-white/5 p-3 rounded-md hover:bg-white/10">
              <Image
                src="/ImagineDragonsEvolve.jpg"
                className="w-full"
                width={120}
                height={120}
                alt="Capa album Imagine Dragons"
              />
              <strong>Daily Mix 1</strong>
              <span className="text-xs text-zinc-400">
                Wallows, COIN, girl in red and more
              </span>
            </a>
            <a href="" className="bg-white/5 p-3 rounded-md hover:bg-white/10">
              <Image
                src="/ImagineDragonsEvolve.jpg"
                className="w-full"
                width={120}
                height={120}
                alt="Capa album Imagine Dragons"
              />
              <strong>Daily Mix 1</strong>
              <span className="text-xs text-zinc-400">
                Wallows, COIN, girl in red and more
              </span>
            </a>
            <a href="" className="bg-white/5 p-3 rounded-md hover:bg-white/10">
              <Image
                src="/ImagineDragonsEvolve.jpg"
                className="w-full"
                width={120}
                height={120}
                alt="Capa album Imagine Dragons"
              />
              <strong>Daily Mix 1</strong>
              <span className="text-xs text-zinc-400">
                Wallows, COIN, girl in red and more
              </span>
            </a>
            <a href="" className="bg-white/5 p-3 rounded-md hover:bg-white/10">
              <Image
                src="/ImagineDragonsEvolve.jpg"
                className="w-full"
                width={120}
                height={120}
                alt="Capa album Imagine Dragons"
              />
              <strong>Daily Mix 1</strong>
              <span className="text-xs text-zinc-400">
                Wallows, COIN, girl in red and more
              </span>
            </a>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

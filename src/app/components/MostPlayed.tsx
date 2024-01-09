import { Play } from "lucide-react";
import Image from "next/image";

export function MostPlayed(){
    return(
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-4">
            <a
              href="#"
              className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden transition-colors hover:bg-white/20"
            >
              <Image
                src="/ImagineDragonsEvolve.jpg"
                width={88}
                height={88}
                alt="imagem do album de imagine dragons"
              />
              <strong>Radioactive</strong>
              
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 txt-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors"
            >
              <Image
                src="/arctic.jpeg"
                alt="imagem do album de arctic monkeys"
                width={88}
                height={88}
              />
              <strong>Do I Wanna Know</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 txt-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors"
            >
              <Image
                src="/guns.jpeg"
                alt="imagem do album de guns'n roses"
                width={88}
                height={88}
              />
              <strong>Sweet Child O Mine</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 txt-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors"
            >
              <Image
                src="/pearl.jpeg"
                alt="imagem do album de imagine dragons"
                width={88}
                height={88}
              />
              <strong>Black</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 txt-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors"
            >
              <Image
                src="/foo.jpg"
                alt="imagem do album de Foo Fighters"
                width={88}
                height={88}
              />
              <strong>Pretender</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 txt-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors"
            >
              <Image
                src="/nirvana.jpeg"
                alt="imagem do album de nirvana"
                width={88}
                height={88}
              />
              <strong>Come As You Are</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 txt-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
          </div>
    )
}
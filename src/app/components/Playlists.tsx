/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export function Playlists(){
    return(
        <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-4 mt-4">
            <a href="" className="bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10">
              <Image
                src="/megahit.jpeg"
                className="w-full"
                width={120}
                height={120}
                alt="imagem da playlist de mega hits mix"
              />
              <strong>Mega Hit Mix</strong>
              <span className="text-xs text-zinc-400">
                A mega mix of 74 favorities from the last...
              </span>
            </a>
            <a href="" className="bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10">
              <Image
                src="/lofi.jpeg"
                className="w-full"
                width={120}
                height={120}
                alt="Imagem da playlist de Lofi Morning"
              />
              <strong>Mellow Lofi Morning</strong>
              <span className="text-xs text-zinc-400">
                Laid-back beats for an easygoing morning.
              </span>
            </a>
            <a href="" className="bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10">
              <Image
                src="/rise.jpeg"
                className="w-full"
                width={120}
                height={120}
                alt="Imagem da playlist Rise"
              />
              <strong>Rise</strong>
              <span className="text-xs text-zinc-400">
                Positive and uplifting ambient instrumental...
              </span>
            </a>
            <a href="" className="bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10">
              <Image
                src="/rock.jpeg"
                className="w-full"
                width={120}
                height={120}
                alt="Imagem da playlist de rock classic"
              />
              <strong>Rock Classics</strong>
              <span className="text-xs text-zinc-400">
                Rock legends & epic songs that continue...
              </span>
            </a>
            <a href="" className="bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10">
              <Image
                src="/booster.jpeg"
                className="w-full"
                width={120}
                height={120}
                alt="Imagem da playlist de Mood Booster"
              />
              <strong>Mood Booster</strong>
              <span className="text-xs text-zinc-400">
                Get happy with today's dose of feel-good...
              </span>
            </a>
          </div>
    )
}
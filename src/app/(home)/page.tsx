import Image from "next/image";
import LogoThreads from "@/assets/threads-logo.svg";
import { HomeIcon, Search, PenSquare, Heart, User } from "lucide-react";
import Link from "next/link";
import DropdownMenuHome from "./dropdown";
import HomePost from "./post";

const menus = [
  {
    Logo: HomeIcon,
    alt: "Sua página inicial",
    route: "/",
  },
  {
    Logo: Search,
    alt: "Pesquise coisas de seu interesse",
    route: "/search",
  },
  {
    Logo: PenSquare,
    alt: "O que você anda pensando?",
    route: "/post",
  },
  {
    Logo: Heart,
    alt: "Atividade",
    route: "/activity",
  },
  {
    Logo: User,
    alt: "Seu perfil",
    route: "/profile",
  },
];

export default function Home() {
  return (
    <main>
      <nav className="flex justify-between items-center py-1 px-6 ">
        <Image src={LogoThreads} height={32} alt="Logo do threads" />
        <ul className="flex">
          {menus.map((menu) => (
            <li
              title={menu.alt}
              key={menu.alt}
              className="px-7 py-5 hover:bg-neutral-800 rounded-xl transition-all duration-300 ease-in-out"
            >
              <Link href={menu.route}>
                <menu.Logo size={28} className="text-neutral-600" />
              </Link>
            </li>
          ))}
        </ul>

        <DropdownMenuHome />
      </nav>

      <article className="max-w-lg m-auto">
        <section>
          <HomePost />
        </section>

        <hr className="mt-4 h-[0.5px] opacity-20" />
      </article>
    </main>
  );
}

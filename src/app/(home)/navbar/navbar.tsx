"use client";

import { cn } from "@/lib/utils";
import { HomeIcon, Search, PenSquare, Heart, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

const Navbar = () => {
  const currentRoute = usePathname();

  return (
    <ul className="flex">
      {menus.map((menu) => (
        <li
          title={menu.alt}
          key={menu.alt}
          className="px-7 py-5 hover:bg-neutral-800 rounded-xl transition-all duration-300 ease-in-out"
        >
          <Link href={menu.route}>
            <menu.Logo
              size={28}
              className={cn("text-neutral-600", {
                "text-threads-text": currentRoute === menu.route,
              })}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;

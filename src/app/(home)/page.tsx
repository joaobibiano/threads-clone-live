import Image from "next/image";
import LogoThreads from "@/assets/threads-logo.svg";
import {
  HomeIcon,
  Search,
  PenSquare,
  Heart,
  User,
  MessageCircle,
  Repeat2,
  Send,
} from "lucide-react";
import Link from "next/link";
import DropdownMenuHome from "./dropdown";
import HomePost from "./post";

import styles from "./styles.module.css";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { PostAvatar } from "./post/post-avatar";
import { cn } from "@/lib/utils";
import { RepliesAvatar } from "./post/replies-avatar";

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

        <hr className="my-4 h-[0.5px] opacity-20" />

        <section className={styles.container}>
          <div className={styles.avatar}>
            <PostAvatar
              src="https://github.com/joaobibiano.png"
              fallbackInitials="JB"
            />
          </div>
          <div className={styles.username}>
            <p>ojoaobibiano</p>
          </div>
          <div className={styles.time}>10h ...</div>
          <div className={styles.separator}>
            <span className="border-l-zinc-700 h-full border-l-[2px] block ml-5 my-2"></span>
          </div>
          <div className={cn(styles.reply_avatar, "m-auto")}>
            <RepliesAvatar
              data={[
                {
                  src: "https://github.com/eduardobertozi.png",
                  fallbackInitials: "EB",
                },
                {
                  src: "https://github.com/talissonoliveira.png",
                  fallbackInitials: "TO",
                },
              ]}
            />
          </div>
          <div className={styles.post}>
            <p className="">
              Recomendar o NextJS ou remix como default way para criar um app
              react foi o melhor conselho que o core team poderia fazer. No
              começo eu torci o nariz, mas hoje vejo que é o que mais faz
              sentido. Além do que obviamente a Vercel vai dominar o react em
              breve.
            </p>
          </div>
          <div className={cn(styles.actions, "flex gap-2 mt-3")}>
            <Heart />
            <MessageCircle />
            <Repeat2 />
            <Send />
          </div>
          <div className={cn(styles.likes_and_replies, "mt-3")}>
            <span className="text-sm text-neutral-500">
              7 replies · 23 likes
            </span>
          </div>
        </section>
      </article>
    </main>
  );
}

import Image from "next/image";
import LogoThreads from "@/assets/threads-logo.svg";
import {
  Heart,
  MessageCircle,
  Repeat2,
  Send,
  MoreHorizontal,
} from "lucide-react";
import DropdownMenuHome from "./dropdown";
import HomePost from "./post";

import styles from "./styles.module.css";
import { PostAvatar } from "./post/post-avatar";
import { cn } from "@/lib/utils";
import { RepliesAvatar } from "./post/replies-avatar";
import Navbar from "./navbar";
import { Button } from "@/components/ui/button";
import formatDistanceStrict from "date-fns/formatDistanceStrict";
import ReactMarkdown from "react-markdown";

const posts = [
  {
    id: 1,
    user: {
      profilePicture: {
        url: "https://github.com/joaobibiano.png",
        initials: "JB",
      },
      name: "ojoaobibiano",
    },
    createdAt: "2023-09-19T15:00:00.000Z",
    content:
      "Clone do Threads com NextJS 👀? O que acham ![img](/images/eu_mesmo.jpeg)",
    replies: {
      count: 7,
      avatars: [
        {
          src: "https://github.com/eduardobertozi.png",
          fallbackInitials: "EB",
        },
        {
          src: "https://github.com/talissonoliveira.png",
          fallbackInitials: "TO",
        },
      ],
    },
    likes: 23,
  },
  {
    id: 2,
    user: {
      profilePicture: {
        url: "https://github.com/someuser.png",
        initials: "SU",
      },
      name: "someuser",
    },
    createdAt: "2023-09-19T16:30:00.000Z",
    content:
      "Just launched my new portfolio website using React and Gatsby. I'm excited to showcase my projects and skills! Check it out: https://www.myportfolio.com",
    replies: {
      count: 5,
      avatars: [
        {
          src: "https://github.com/user1.png",
          fallbackInitials: "U1",
        },
        {
          src: "https://github.com/user2.png",
          fallbackInitials: "U2",
        },
      ],
    },
    likes: 15,
  },
  {
    id: 3,
    user: {
      profilePicture: {
        url: "https://github.com/anotheruser.png",
        initials: "AU",
      },
      name: "anotheruser",
    },
    createdAt: "2023-09-19T17:45:00.000Z",
    content:
      "Just started learning ReactJS, and it's amazing! Any tips for beginners?",
    replies: {
      count: 12,
      avatars: [
        {
          src: "https://github.com/user3.png",
          fallbackInitials: "U3",
        },
        {
          src: "https://github.com/user4.png",
          fallbackInitials: "U4",
        },
      ],
    },
    likes: 8,
  },
];

export default function Home() {
  return (
    <main>
      <nav className="flex justify-between items-center py-1 px-6 ">
        <Image src={LogoThreads} height={32} alt="Logo do threads" />

        <Navbar />

        <DropdownMenuHome />
      </nav>

      <article className="max-w-lg m-auto">
        <section>
          <HomePost />
        </section>

        <hr className="my-4 h-[0.5px] opacity-20" />

        <div className="space-y-6">
          {posts.map((post) => (
            <>
              <section key={post.id} className={styles.container}>
                <div className={styles.avatar}>
                  <PostAvatar
                    src={post.user.profilePicture.url}
                    fallbackInitials={post.user.profilePicture.initials}
                  />
                </div>
                <div className={styles.username}>
                  <p>{post.user.name}</p>
                </div>
                <div className={cn(styles.time, "flex items-center gap-1")}>
                  <span
                    className="min-w-[60px] text-gray-500"
                    title={new Date(post.createdAt).toLocaleString()}
                  >
                    {formatDistanceStrict(
                      new Date(post.createdAt),
                      new Date(),
                      {
                        addSuffix: false,
                      }
                    )}
                  </span>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-none"
                  >
                    <MoreHorizontal />
                  </Button>
                </div>
                <div className={styles.separator}>
                  <span className="border-l-zinc-700 h-full border-l-[2px] block ml-5 my-2"></span>
                </div>
                <div className={cn(styles.reply_avatar, "m-auto")}>
                  <RepliesAvatar data={post.replies.avatars} />
                </div>
                <div className={styles.post}>
                  <ReactMarkdown
                    components={{
                      img: ({ node, ...props }) => (
                        <img
                          className={cn(props.className, "mt-6 rounded-lg")}
                          {...props}
                        />
                      ),
                    }}
                  >
                    {post.content}
                  </ReactMarkdown>
                </div>
                <div className={cn(styles.actions, "flex gap-2 mt-3")}>
                  <Heart />
                  <MessageCircle />
                  <Repeat2 />
                  <Send />
                </div>
                <div className={cn(styles.likes_and_replies, "mt-3")}>
                  <span className="text-sm text-neutral-500">
                    {post.replies.count} replies · {post.likes} likes
                  </span>
                </div>
              </section>

              <hr className="my-4 h-[0.5px] opacity-20" />
            </>
          ))}
        </div>
      </article>
    </main>
  );
}

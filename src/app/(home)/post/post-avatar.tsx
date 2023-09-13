"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";

type PostAvatarProps = {
  src?: string;
  fallbackInitials: string;
};

export const PostAvatar = ({ src, fallbackInitials }: PostAvatarProps) => (
  <Avatar>
    <AvatarImage src={src} alt={fallbackInitials} />
    <AvatarFallback>{fallbackInitials}</AvatarFallback>
  </Avatar>
);

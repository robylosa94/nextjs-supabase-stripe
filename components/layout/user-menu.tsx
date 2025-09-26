"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { createClient } from "@/utils/supabase/client";
import { User } from "@supabase/supabase-js";
import { CircleUserRound } from "lucide-react";
import { useRouter } from "next/navigation";

interface UserMenuProps {
  user: User;
}

const UserMenu = ({ user }: UserMenuProps) => {
  const router = useRouter();
  const logout = async () => {
    const supabaseClient = await createClient();
    const { error } = await supabaseClient.auth.signOut();
    if (!error) {
      router.refresh();
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <CircleUserRound />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{user.email}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;

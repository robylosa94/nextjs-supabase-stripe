import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import UserMenu from "./user-menu";
import { User } from "@supabase/supabase-js";

interface NavbarProps {
  user?: User | null;
}

const Navbar = ({ user }: NavbarProps) => {
  return (
    <header className="bg-white">
      <div className="flex items-center justify-between max-w-7xl mx-auto p-8">
        <Link href="/" className="flex items-center">
          <Image
            src="https://flowbite.com/docs/images/logo.svg"
            className="me-3"
            width={31}
            height={32}
            alt="FlowBite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Flowbite
          </span>
        </Link>
        <div>
          {user ? (
            <div className="flex gap-4 items-center">
              <Link
                href="/courses"
                className="underline uppercase font-bold text-xs hover:no-underline"
              >
                Corsi
              </Link>
              <UserMenu user={user} />
            </div>
          ) : (
            <Button asChild>
              <Link href="/login">Login</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;

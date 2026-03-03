"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {cn} from "@/lib/utils";
import {SignedIn, SignedOut, SignInButton, UserButton, useUser} from "@clerk/nextjs";

const navItems = [
  { Label: "Library", href: "/" },
  { Label: "Add New", href: "/books/new" },
];

const Navbar = () => {
  const pathName = usePathname()
  const {user} = useUser()
  return (
    <header className="w-full fixed z-50 bg-('--bg-primary')">
      <div className="wrapper navbar-height py-4 flex justify-between items-center">
        <Link href="/" className="flex gap-0.5 items-center">
          <Image
            src="/assets/logo.png"
            alt="AI Voice Book"
            width={42}
            height={26}
          />
          <span className="logo-text">AI Voice Book</span>
        </Link>

        <nav className="w-fit flex gap-7.5 items-center">
          {navItems.map(({ Label, href }) => {
            const isActive = pathName === href ||
                  (href !== '/' && pathName.startsWith(href));
            return (
              <Link href={href} key={Label}
                    className={cn('nav-link-base', isActive ? 'nav-link-active' : 'text-black hover:opacity-70')}
              >
                {Label}
              </Link>
            );
          })}
          <div className="flex gap-7.5 items-center">
              <SignedOut>
                  <SignInButton />
              </SignedOut>
              <SignedIn>
                  <div className="nav-user-link">
                      <UserButton />
                      {user?.fullName && (
                          <Link href="/subscriptions" className="nav-user-link">
                              {user.firstName}
                          </Link>
                      )}
                  </div>
              </SignedIn>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

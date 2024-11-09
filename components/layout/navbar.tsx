"use client";

import { useContext } from "react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { useSession } from "next-auth/react";

import { marketingConfig } from "@/config/marketing";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { useScroll } from "@/hooks/use-scroll";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ModalContext } from "@/components/modals/providers";
import { Icons } from "@/components/shared/icons";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

interface NavBarProps {
  scroll?: boolean;
  large?: boolean;
}

export function NavBar({ scroll = false }: NavBarProps) {
  const scrolled = useScroll(50);
  const { data: session, status } = useSession();
  const { setShowSignInModal } = useContext(ModalContext);
  const links = marketingConfig.mainNav;
  const selectedLayout = useSelectedLayoutSegment();

  return (
    <header
      className={`sticky top-0 z-40 flex w-full justify-center bg-background/60 backdrop-blur-xl transition-all ${
        scroll ? (scrolled ? "border-b" : "bg-transparent") : "border-b"
      }`}
    >
      <MaxWidthWrapper className="flex h-14 items-center justify-between py-4">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-1.5">
            <span className="font-satoshi text-xl font-bold">
              {siteConfig.name}
            </span>
          </Link>
        </div>

        {links && links.length > 0 ? (
          <nav className="hidden flex-1 justify-center gap-6 md:flex">
            {links.map((item, index) => (
              <Link
                key={index}
                href={item.disabled ? "#" : item.href}
                prefetch={true}
                className={cn(
                  "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
                  item.href.startsWith(`/${selectedLayout}`)
                    ? "text-foreground"
                    : "text-foreground/60",
                  item.disabled && "cursor-not-allowed opacity-80"
                )}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        ) : null}

        <div className="flex items-center space-x-3">
          <Link href="" className="hidden md:block">
            <Button className="gap-2 px-4" variant="outline" size="sm" rounded="xl">
              <span>Login</span>
            </Button>
          </Link>
          <Link href="" className="hidden md:block">
            <Button
              style={{ backgroundColor: "#FFC300", color: "black" }}
              className="gap-2 px-4"
              variant="default"
              size="sm"
              rounded="xl"
            >
              <span>Get Started</span>
            </Button>
          </Link>
        </div>
      </MaxWidthWrapper>
    </header>
  );
}

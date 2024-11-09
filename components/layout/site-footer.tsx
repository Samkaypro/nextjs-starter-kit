"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { footerLinks, siteConfig } from "@/config/site"

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className="w-full">
      {/* Newsletter Section */}
      <div className="relative py-16">
  {/* Top background half */}
  <div className="absolute inset-0 h-1/2 bg-[#A3B4F640]"></div>
  
  {/* Bottom background half */}
  <div className="absolute inset-0 top-1/2 h-1/2 bg-[#4052A3]"></div>
  
  {/* Content container */}
  <div className="relative mx-auto max-w-6xl rounded-3xl border-[6px] border-[#CCD5F9] bg-white p-12 text-center shadow-sm">
    <div className="mx-auto mb-8 w-24">
      <Image
        src="/placeholder.svg"
        alt="Vendcliq Logo"
        width={96}
        height={96}
        className="h-auto w-full"
      />
    </div>
    <div className="mb-8 text-3xl font-bold">
      <span className="inline-block  bg-[#A3B4F640] px-6 py-2 ">
        Vendcliq
      </span>
      Newsletter: Elevate Your Shop Now
    </div>
    <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
      Get weekly tips, market insights, and AI-powered strategies to optimize your inventory and boost sales.
    </p>
    <form className="mx-auto flex max-w-md gap-2">
      <Input
        type="email"
        placeholder="Email address"
        className="border-[#CCD5F9] bg-white"
      />
      <Button
  style={{ backgroundColor: '#FFC300', color: 'black' }}
  className="flex items-center justify-center hover:bg-[#FFC300]/90"
>
  Start now
</Button>
    </form>
  </div>
</div>

      {/* Main Footer */}
      <div style={{ backgroundColor: '#4052A3' }} className="text-white">
        <div className="container mx-auto max-w-6xl px-4 py-16">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
            {/* Logo and Description */}
            <div className="space-y-4">
              <div className="size-8 bg-white" /> {/* Logo placeholder */}
              <p className="text-sm opacity-80">
                Vera Africa: Building a network of thriving distributors through innovative technology and community support.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="opacity-80 hover:opacity-100">
                  <Linkedin className="size-5" />
                </Link>
                <Link href="#" className="opacity-80 hover:opacity-100">
                  <Youtube className="size-5" />
                </Link>
                <Link href="#" className="opacity-80 hover:opacity-100">
                  <Twitter className="size-5" />
                </Link>
                <Link href="#" className="opacity-80 hover:opacity-100">
                  <Instagram className="size-5" />
                </Link>
              </div>
            </div>

            {/* Footer Links */}
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h3 className="mb-4 text-lg font-medium">{section.title}</h3>
                <ul className="space-y-3">
                  {section.items?.map((link) => (
                    <li key={link.title}>
                      <Link
                        href={link.href}
                        className="text-sm opacity-80 hover:opacity-100"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Footer Bottom */}
          <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm md:flex-row">
            <p className="opacity-80">
              2024 © Vera Africa Copyrights and All Rights Reserved.
            </p>
            <div className="flex gap-6 opacity-80">
              <Link href="/terms" className="hover:opacity-100">
                Terms of Service
              </Link>
              <Link href="#" className="hover:opacity-100">
                Cookies Settings
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
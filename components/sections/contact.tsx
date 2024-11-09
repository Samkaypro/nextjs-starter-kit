"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail, Twitter } from "lucide-react"
import Link from "next/link"

export default function Contact() {
  return (
    <section className="container mx-auto max-w-7xl px-4 py-16">
      <div className="grid gap-12 lg:grid-cols-2">
        {/* Left Column - Contact Info */}
        <div>
          <h1 className="mb-4 text-5xl font-bold leading-tight text-[#4052A3] md:text-6xl">
            Get in
            <br />
            Touch
          </h1>
          <p className="mb-12 text-lg text-muted-foreground">
            We&apos;re here to support your shop&apos;s success. How can we help you today?
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Phone className="size-5 text-[#4052A3]" />
              <span className="text-muted-foreground">+2348136664520</span>
            </div>

            <div className="flex items-center gap-3 rounded-lg bg-[#4052A3] px-4 py-3 text-white">
              <Mail className="size-5" />
              <span>hello@vendcliq.com</span>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="size-5 text-[#4052A3]" />
              <span className="text-muted-foreground">1a Gbemisola street, Allen, Ikeja</span>
            </div>

            <p className="pt-4 text-muted-foreground">
              Opening hours: 9am - 5pm Monday -Friday
            </p>

            <div className="flex gap-4 pt-4">
              <Link href="#" className="text-[#4052A3] hover:opacity-80">
                <Instagram className="size-5" />
              </Link>
              <Link href="#" className="text-[#4052A3] hover:opacity-80">
                <Facebook className="size-5" />
              </Link>
              <Link href="#" className="text-[#4052A3] hover:opacity-80">
                <Linkedin className="size-5" />
              </Link>
              <Link href="#" className="text-[#4052A3] hover:opacity-80">
                <Twitter className="size-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div>
          <form className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="firstName" className="text-sm font-medium">
                  First Name
                </label>
                <Input
                  id="firstName"
                  placeholder="Your first name"
                  className="border-0 bg-[#E3E9FA]"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="text-sm font-medium">
                  Last Name
                </label>
                <Input
                  id="lastName"
                  placeholder="Your last name"
                  className="border-0 bg-[#E3E9FA]"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Your email"
                className="border-0 bg-[#E3E9FA]"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium">
                Phone Number
              </label>
              <Input
                id="phone"
                type="tel"
                placeholder="Your phone number"
                className="border-0 bg-[#E3E9FA]"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Your message"
                className="min-h-[150px] border-0 bg-[#E3E9FA]"
              />
            </div>

            <Button 
              style={{ backgroundColor: '#FFC300', color: 'black' }}
              className="gap-5 px-8"
              variant="default"
              size="sm"
              rounded="xl"
            >
              Send a Message
            </Button>



            
          </form>
        </div>
      </div>
    </section>
  )
}
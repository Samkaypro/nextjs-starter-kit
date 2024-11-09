import { SidebarNavItem, SiteConfig } from "types";
import { env } from "@/env.mjs";

const site_url = env.NEXT_PUBLIC_APP_URL;

export const siteConfig: SiteConfig = {
  name: "VendCliq",
  description:
    "Vendcliq is committed to revolutionizing the distribution industry in Nigeria.",
  url: site_url,
  ogImage: `${site_url}/_static/og.jpg`,
  links: {
    twitter: "https://twitter.com/",
    github: "https://github.com/",
  },
  mailSupport: "support@vendcliq.com",
};

export const footerLinks: SidebarNavItem[] = [
  {
    title: "Company",
    items: [
      {
        title: "About us", href: "/about",
        icon: ""
      },
      {
        title: "Terms of use", href: "/terms",
        icon: ""
      },
      {
        title: "Privacy", href: "/privacy",
        icon: ""
      },
    ],
  },
  {
    title: "Get in Touch",
    items: [
      {
        title: "Contact Us", href: "/contact",
        icon: ""
      },
      {
        title: "Partnership", href: "#",
        icon: ""
      },
    ],
  },
  {
    title: "Resource",
    items: [
      {
        title: "Blog", href: "/blog",
        icon: ""
      },
      {
        title: "FAQs", href: "#",
        icon: ""
      },
      {
        title: "Help Center", href: "#",
        icon: ""
      },
      {
        title: "Testimonials", href: "#",
        icon: ""
      },
    ],
  },
];

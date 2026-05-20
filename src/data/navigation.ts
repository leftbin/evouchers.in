import { EXTERNAL_LINKS } from "@/lib/constants";

export interface NavItem {
  label: string;
  href: string;
}

export interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface FooterGroup {
  title: string;
  links: FooterLink[];
}

export const navItems: NavItem[] = [
  { label: "For Users", href: "/for-users" },
  { label: "For Merchants", href: "/for-merchants" },
  { label: "For Agents", href: "/for-agents" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks: FooterGroup[] = [
  {
    title: "Product",
    links: [
      { label: "For Users", href: "/for-users" },
      { label: "For Merchants", href: "/for-merchants" },
      { label: "For Agents", href: "/for-agents" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "API Documentation", href: EXTERNAL_LINKS.apiDocs, external: true },
      { label: "Help Center", href: EXTERNAL_LINKS.helpCenter, external: true },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

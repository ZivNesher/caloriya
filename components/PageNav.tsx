import Link from "next/link";
import { userIds, users, type UserId } from "@/lib/users";

const links: Array<{ href: string; id: UserId | "compete"; label: string }> = [
  ...userIds.map((id) => ({ href: id === "ziv" ? "/" : `/${id}`, id, label: users[id].label })),
  { href: "/compete", id: "compete", label: "תחרות" },
];

export function PageNav({ current }: { current: UserId | "compete" }) {
  return (
    <nav className="page-nav" aria-label="ניווט בין דפים">
      {links.map((link) => (
        <Link
          key={link.id}
          href={link.href}
          className={link.id === current ? "page-nav-link active" : "page-nav-link"}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  // Navigation links
  const navLinks = [
    { name: "Home", link: "/" },
    { name: "Create New  Listing", link: "/createItem" },
    { name: "My Listings", link: "/mylistings" },
    { name: "Favorites", link: "/favorites" },
    { name: "Settings", link: "/settings" },
    { name: "Sign-in", link: "/signin" },
  ];
  return (
    <header className="flex justify-between px-5  items-center  shadow-md py-3">
      <div>
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
        </Link>
      </div>
      <nav>
        <ul className="flex items-center gap-10">
          {navLinks.map(({ name, link }) => (
            <li key={link}>
              <Link href={link} className="text-black hover:underline font-bold">
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

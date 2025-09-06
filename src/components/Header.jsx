import Image from "next/image";
import Link from "next/link";
export default function Header() {
  const navLinks = [
    { name: "Home", link: "/" },
    { name: "Place Item", link: "/createItem" },
    { name: "Cart", link: "/cart" },
    { name: "Profile", link: "/profile" },
  ];
  return (
    <header className="flex justify-between px-5  items-center  shadow-md py-3">
      <div>
        <Image src="/logo.png" alt="Logo" width={40} height={40} />
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

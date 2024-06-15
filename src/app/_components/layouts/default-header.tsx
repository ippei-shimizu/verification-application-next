import Link from "next/link";

export default function DefaultHeader() {
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/literal", label: "リテラル型の検証" },
  ];
  return (
    <header className="border-b py-6 px-4 mb-6">
      <nav>
        <ul className="flex gap-x-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

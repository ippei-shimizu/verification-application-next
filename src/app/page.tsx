import Link from "next/link";

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href={"/literal"}>リテラル型の検証</Link>
        </li>
        <li>
          <Link href={"/useEffect"}>useEffect</Link>
        </li>
      </ul>
    </div>
  );
}

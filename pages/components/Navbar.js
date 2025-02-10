import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{ padding: "10px", textAlign: "center", backgroundColor: "#333" }}>
      <Link href="/" style={{ margin: "10px", color: "white" }}>Home</Link>
      <Link href="/about" style={{ margin: "10px", color: "white" }}>About</Link>
      <Link href="/contact" style={{ margin: "10px", color: "white" }}>Contact</Link>
    </nav>
  );
}

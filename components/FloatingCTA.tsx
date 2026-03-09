import Link from "next/link";

export default function FloatingCTA() {
  return (
    <Link
      href="/contact"
      className="fixed bottom-6 right-6 bg-green-700 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-800 transition"
    >
      Contact Us
    </Link>
  );
}
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen bg-white flex flex-col items-center justify-center">
      <h2>Page not found</h2>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3">
        <Link href="/">Go Back</Link>
      </button>
    </div>
  );
}
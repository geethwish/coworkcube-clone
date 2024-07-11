import Contact from "@/components/shared/ContactForm";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to MySite</h1>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-gray-100 p-4 rounded">Content Block 1</div>
        <div className="bg-gray-100 p-4 rounded">Content Block 2</div>
        <div className="bg-gray-100 p-4 rounded">Content Block 3</div>
      </div>
      <Contact />
    </div>
  );
}

import { Link } from "@heroui/link";
import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
        {children}
      </main>
      <footer className="w-full flex items-center justify-center py-3">
        <Link
          isExternal
          className="flex items-center gap-1 text-current"
          href="https://github.com/AhmedEsam2002"
          title="heroui.com homepage"
        >
          <span className="text-default-600">Built with ❤️ by </span>
          <p className="bg-gradient-to-r from-[#FF72E1] to-[#F54C7A] bg-clip-text text-transparent">
            Ahmed Esam
          </p>
        </Link>
      </footer>
    </div>
  );
}

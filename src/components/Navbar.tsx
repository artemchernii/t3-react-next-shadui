import Link from "next/link";
import { GeistSans } from "geist/font/sans";

export const Navbar = () => {
  return (
    <nav className="border-b border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo/Brand */}
          <Link
            href="/"
            className={`flex items-center space-x-2 ${GeistSans.variable}`}
          >
            <span className="text-xl font-bold text-neutral-900">
              T3 Gallery
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-6">
            <Link
              href="/invoices"
              className="text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900"
            >
              Invoices
            </Link>
            <Link
              href="/dashboard"
              className="text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900"
            >
              Dashboard
            </Link>
            <Link
              href="/settings"
              className="text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900"
            >
              Settings
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

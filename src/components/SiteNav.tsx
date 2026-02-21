import Link from "next/link";
import { TreeDeciduous } from "lucide-react";

export function SiteNav() {
  return (
    <nav className="bg-white/80 backdrop-blur-sm border-b border-charcoal-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <TreeDeciduous className="w-6 h-6 text-forest-600 group-hover:text-forest-700 transition-colors" />
          <span className="font-heading text-xl font-semibold text-charcoal-900">
            TreeValue Pro
          </span>
        </Link>
        <div className="flex items-center gap-6 text-sm font-medium text-charcoal-600">
          <Link href="/calculator" className="hover:text-forest-700 transition-colors">
            Calculator
          </Link>
          <Link href="/resources" className="hover:text-forest-700 transition-colors">
            Resources
          </Link>
        </div>
      </div>
    </nav>
  );
}

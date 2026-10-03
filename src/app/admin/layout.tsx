'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  const router = useRouter();
  const isLoginPage = pathname === '/admin/login';

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/admin/login');
    router.refresh();
  };

  if (isLoginPage) {
    return <>{children}</>;
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-navy text-white flex-shrink-0 flex flex-col">
        <div className="p-6">
          <h1 className="text-xl font-bold">Admin Dashboard</h1>
        </div>
        <nav className="flex-1 px-4 space-y-2">
          <Link href="/admin" className="block px-4 py-2 rounded hover:bg-white/10 transition-colors">
            Dashboard
          </Link>
          <Link href="/admin/experts" className="block px-4 py-2 rounded hover:bg-white/10 transition-colors">
            Experts
          </Link>
          <Link href="/admin/services" className="block px-4 py-2 rounded hover:bg-white/10 transition-colors">
            Services
          </Link>
          <Link href="/admin/insights" className="block px-4 py-2 rounded hover:bg-white/10 transition-colors">
            Insights (Articles)
          </Link>
          <Link href="/admin/contact" className="block px-4 py-2 rounded hover:bg-white/10 transition-colors">
            Contact Info
          </Link>
          <Link href="/admin/inquiries" className="block px-4 py-2 rounded hover:bg-white/10 transition-colors">
            Inquiries
          </Link>
        </nav>
        <div className="p-4 border-t border-white/10">
          <Link href="/" className="block px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors">
            View Website
          </Link>
          <button onClick={handleLogout} className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors">
            Logout
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm p-4 flex justify-between items-center">
          <h2 className="text-lg font-medium text-gray-800">Welcome, Dr. Ashish Pathak</h2>
        </header>
        <div className="flex-1 overflow-y-auto p-8">
          {children}
        </div>
      </main>
    </div>
  )
}


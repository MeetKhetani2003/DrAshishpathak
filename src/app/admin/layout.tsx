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
    <div className="flex min-h-screen flex-col bg-gray-50">
      <header className="bg-navy text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Dr. Ashish Pathak Admin</h1>
          <nav className="flex items-center space-x-6">
            <Link href="/admin/experts" className="hover:text-gold transition-colors">
              Experts
            </Link>
            <Link href="/admin/services" className="hover:text-gold transition-colors">
              Services
            </Link>
            <Link href="/admin/contact" className="hover:text-gold transition-colors">
              Contact Info
            </Link>
            <Link href="/admin/inquiries" className="hover:text-gold transition-colors">
              Inquiries
            </Link>
            <button onClick={handleLogout} className="hover:text-gold transition-colors text-sm text-gray-300 ml-4 border-l border-gray-600 pl-4">
              Logout
            </button>
            <Link href="/" className="hover:text-gold transition-colors text-sm text-gray-300 ml-4 border-l border-gray-600 pl-4">
              Back to Site
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1 container mx-auto p-4 py-8">
        {children}
      </main>
    </div>
  )
}


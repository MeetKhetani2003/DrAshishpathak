import Link from 'next/link';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <header className="bg-navy text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">MK Digital Admin</h1>
          <nav>
            <Link href="/admin/experts" className="hover:text-gold transition-colors">
              Expert Board
            </Link>
            <Link href="/" className="ml-6 hover:text-gold transition-colors text-sm text-gray-300">
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

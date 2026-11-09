export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-neutral-300 font-sans text-neutral-900 antialiased">
      {children}
    </div>
    )

}

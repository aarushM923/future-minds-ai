export default function Navbar() {
  const items = [
    {href: '#home', label: 'Home'},
    {href: '#about', label: 'About'},
    {href: '#programs', label: 'Programs'},
    {href: '#gallery', label: 'Gallery'},
    {href: '#involved', label: 'Get Involved'},
    {href: '#news', label: 'News & Impact'},
    {href: '#contact', label: 'Contact'},
  ]
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
      <nav className="container flex items-center justify-between h-16">
        <a href="#home" className="font-extrabold tracking-tight text-xl text-primary">Future Minds AI</a>
        <div className="hidden md:flex items-center gap-6">
          {items.map(i => <a key={i.href} href={i.href} className="text-sm">{i.label}</a>)}
        </div>
        <a href="#involved" className="btn btn-primary text-sm">Join Us</a>
      </nav>
    </header>
  )
}

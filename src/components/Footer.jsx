export default function Footer() {
  return (
    <footer className="border-t border-gray-100">
      <div className="container py-10 text-sm text-gray-600 flex flex-col md:flex-row gap-3 md:gap-0 items-center justify-between">
        <p>© 2025 Future Minds AI</p>
        <div className="flex gap-4">
          <a href="#about">About</a>
          <a href="#involved">Get Involved</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  )
}

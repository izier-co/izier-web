export default function Footer() {
  return (
    <footer className="bg-primary text-white text-[12px] font-mono">
      <div className="max-w-6xl mx-auto p-3 border border-dashed border-white">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 divide-x divide-white/40">
          {[
            {
              title: 'Company',
              items: ['About', 'Blog', 'Changelog', 'Careers'],
            },
            {
              title: 'Product',
              items: ['Case Studies', 'Enterprise', 'Pricing'],
            },
            {
              title: 'Resources',
              items: ['Docs', 'Support', 'Status', 'Trust Center'],
            },
            {
              title: 'Courses',
              items: ['Scaling Software', 'Learn Agile', 'DevOps Basics'],
            },
            {
              title: 'Open Source',
              items: ['GitHub', 'Community', 'Roadmap'],
            },
          ].map((section, idx) => (
            <div key={idx} className="px-3">
              <p className="underline font-bold mb-2">{section.title}</p>
              <ul className="space-y-1">
                {section.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-6 border border-dashed border-white py-4">
        <div className="mb-2 flex flex-wrap gap-x-4">
          <span>Privacy</span>
          <span>Terms</span>
          <span>Cookies</span>
          <span>Do Not Share My Info</span>
        </div>
        <p className="text-xs">&copy; {new Date().getFullYear()} Izier. All rights reserved.</p>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-wrap gap-4">
        <a href="#" className="underline">
          GitHub
        </a>
        <a href="#" className="underline">
          X
        </a>
        <a href="#" className="underline">
          LinkedIn
        </a>
        <a href="#" className="underline">
          YouTube
        </a>
        <a href="#" className="underline">
          Facebook
        </a>
      </div>
    </footer>
  )
}

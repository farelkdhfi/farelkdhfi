import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
  ];

  const handleClick = () => setOpen(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
        <a
          href="#"
          className="group text-sm font-semibold tracking-[-0.03em] text-neutral-950"
        >
          FAREL<span className="text-neutral-300">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-500 transition-colors hover:text-neutral-950"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            className="group flex items-center gap-1.5 rounded-full bg-neutral-950 px-4 py-2.5 text-[11px] font-medium uppercase tracking-[0.1em] text-white transition-transform hover:scale-[1.03]"
          >
            Let's Talk
            <ArrowUpRight
              size={13}
              strokeWidth={1.7}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-black/[0.07] bg-white/70 backdrop-blur-md md:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X size={17} /> : <Menu size={17} />}
        </button>
      </nav>

      {open && (
        <div className="mx-4 mt-1 rounded-[1.5rem] border border-black/[0.06] bg-white/95 p-3 shadow-2xl shadow-black/[0.06] backdrop-blur-xl md:hidden">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={handleClick}
              className="block rounded-xl px-4 py-3 text-sm text-neutral-600 transition-colors hover:bg-neutral-50 hover:text-neutral-950"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={handleClick}
            className="mt-1 block rounded-xl bg-neutral-950 px-4 py-3 text-sm text-white"
          >
            Let's Talk
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
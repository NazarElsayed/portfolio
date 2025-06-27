import Link from 'next/link'

const links = [
  {
    name: 'Home',
    href: '/'
  },
  {
    name: 'Work',
    href: '/work'
  },
  {
    name: 'Blog',
    href: '/blog'
  },
  {
    name: 'Contact',
    href: '/contact'
  }
] as const

export default function TopNavLinks() {
  return (
    links.map((link) => (
      <Link key={link.name} href={link.href} className="px-5">
        {link.name}
      </Link>
    ))
  )
}
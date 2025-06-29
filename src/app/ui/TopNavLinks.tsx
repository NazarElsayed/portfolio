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
    <ul className="flex list-none m-0 p-0 gap-10">
      {links.map((link) => (
        <li key={link.name}>
          <Link key={link.name} href={link.href}>
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}
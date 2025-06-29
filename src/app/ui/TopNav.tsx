import TopNavLinks from "./TopNavLinks";

export default function TopNav() {
  return (
    <header className={`visible justify-center flex h-20 bg-black px-3 py-16 md:px-2`}>
      <nav aria-label="Main navigation">
        <TopNavLinks />
      </nav>
    </header>
  )
}
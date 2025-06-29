import TopNavLinks from "./TopNavLinks";

export default function TopNav() {
  return (
    <header className="flex justify-center items-center bg-black py-16">
      <nav aria-label="Main navigation">
        <TopNavLinks />
      </nav>
    </header>
  )
}
export default function Footer() {
  return (
    <footer className="border-t border-border/40 py-8">
      <div className="container mx-auto px-4 text-center text-muted-foreground text-sm max-w-7xl">
        <p>&copy; {new Date().getFullYear()} ProductVerse. All rights reserved.</p>
        <p>A premium digital experience by Firebase Studio.</p>
      </div>
    </footer>
  );
}

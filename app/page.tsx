import { ShoppingBag, Search, User, Heart } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-8">
            <a href="/" className="text-xl font-bold tracking-tight">
              STORE
            </a>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                New Arrivals
              </a>
              <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Women
              </a>
              <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Men
              </a>
              <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Sale
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-muted rounded-full transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <button className="p-2 hover:bg-muted rounded-full transition-colors">
              <User className="h-5 w-5" />
            </button>
            <button className="p-2 hover:bg-muted rounded-full transition-colors">
              <Heart className="h-5 w-5" />
            </button>
            <button className="p-2 hover:bg-muted rounded-full transition-colors relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-foreground text-background text-xs flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-muted">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="max-w-xl">
            <p className="text-sm font-medium tracking-widest text-muted-foreground uppercase">
              New Collection
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance">
              Elevate Your Style
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Discover our curated collection of premium essentials designed for modern living.
            </p>
            <div className="mt-8 flex gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-md bg-foreground px-6 py-3 text-sm font-medium text-background hover:bg-foreground/90 transition-colors"
              >
                Shop Now
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-md border border-input px-6 py-3 text-sm font-medium hover:bg-muted transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight">Featured Products</h2>
          <a href="#" className="text-sm font-medium hover:underline underline-offset-4">
            View All
          </a>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { name: "Classic White Tee", price: "$49", category: "Essentials" },
            { name: "Leather Crossbody Bag", price: "$129", category: "Accessories" },
            { name: "Wool Blend Coat", price: "$299", category: "Outerwear" },
            { name: "Cotton Chinos", price: "$89", category: "Bottoms" },
          ].map((product, index) => (
            <a
              key={index}
              href="#"
              className="group"
            >
              <div className="aspect-[3/4] overflow-hidden rounded-lg bg-muted">
                <div className="h-full w-full bg-muted-foreground/10 group-hover:bg-muted-foreground/20 transition-colors flex items-center justify-center">
                  <ShoppingBag className="h-12 w-12 text-muted-foreground/40" />
                </div>
              </div>
              <div className="mt-4">
                <p className="text-xs text-muted-foreground">{product.category}</p>
                <h3 className="mt-1 font-medium group-hover:underline underline-offset-4">
                  {product.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{product.price}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              2026 STORE. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

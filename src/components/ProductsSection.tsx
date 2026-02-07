import vegPizza from "@/assets/veg-pizza.jpg";
import nonvegPizza from "@/assets/nonveg-pizza.jpg";
import sides from "@/assets/sides.jpg";
import beverages from "@/assets/beverages.jpg";
import combos from "@/assets/combos.jpg";

const categories = [
  {
    name: "Veg Pizzas",
    description: "Fresh vegetables, premium cheese, and authentic Italian sauces",
    image: vegPizza,
  },
  {
    name: "Non-Veg Pizzas",
    description: "Succulent meats, bold flavors, and gourmet toppings",
    image: nonvegPizza,
  },
  {
    name: "Sides",
    description: "Crispy garlic bread, wings, and delicious appetizers",
    image: sides,
  },
  {
    name: "Beverages",
    description: "Refreshing drinks to complement your meal",
    image: beverages,
  },
  {
    name: "Combos",
    description: "Value meals perfect for sharing with family and friends",
    image: combos,
  },
];

export function ProductsSection() {
  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Menu</span>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mt-4 mb-6">
            TASTE THE <span className="text-primary">CHICAGO</span> DIFFERENCE
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore our premium pizza categories crafted with passion and the finest ingredients.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={category.name}
              className={`group relative overflow-hidden rounded-xl border border-border bg-card transition-all duration-500 hover:border-primary/50 hover:shadow-glow ${
                index === 4 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative p-6 -mt-16">
                <h3 className="font-display text-2xl text-foreground mb-2">{category.name}</h3>
                <p className="text-muted-foreground text-sm">{category.description}</p>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
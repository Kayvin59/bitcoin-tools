import { CategoryFilter } from "@/components/category-filter"
import { ItemGrid } from "@/components/item-grid"
import { getCategories, getItems } from "./actions"

export default async function Home() {
  const categories = await getCategories()
  const items = await getItems()

  return (
    <main>
      <div className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Secure your Bitcoins with the best digital safes</h1>
          <p className="text-center text-gray-300 max-w-2xl mx-auto mb-8">
          Explore secure and tailored storage options: Vaults, DIY solutions, Portable Wallets, Offline Wallets, Smart Cards, and Backup Solutions.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <CategoryFilter categories={categories} />
        <ItemGrid items={items} />
      </div>
    </main>
  )
}


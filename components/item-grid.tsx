import { ItemCard } from "@/components/item-card"
import type { Item } from "@/types"

interface ItemGridProps {
  items: Item[]
}

export function ItemGrid({ items }: ItemGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  )
}


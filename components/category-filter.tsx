"use client"

import { cn } from "@/lib/utils"
import type { Category } from "@/types"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface CategoryFilterProps {
  categories: Category[]
}

export function CategoryFilter({ categories }: CategoryFilterProps) {
  const pathname = usePathname()
  const currentCategory = pathname.split("/").pop() || "all"

  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {categories.map((category) => (
        <Link
          key={category.id}
          href={category.slug === "all" ? "/" : `/category/${category.slug}`}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium transition-colors",
            currentCategory === category.slug
              ? "bg-orange-500 text-white"
              : "bg-gray-100 hover:bg-orange-500 text-gray-800 hover:text-white",
          )}
        >
          {category.name}
        </Link>
      ))}
    </div>
  )
}


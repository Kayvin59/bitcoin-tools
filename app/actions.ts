"use server"

import { createClient } from "@/lib/supabase/server"
import type { Category, Item } from "@/types"
import { cookies } from "next/headers"

export async function getCategories(): Promise<Category[]> {
  const cookieStore = cookies()
  const supabase = await createClient(cookieStore)
  const { data, error } = await supabase.from("categories").select("*").order("id")

  if (error) {
    console.error("Error fetching categories:", error)
    return []
  }
  return data
}

export async function getItems(categorySlug = "all"): Promise<Item[]> {
  const cookieStore = cookies()
  const supabase = await createClient(cookieStore)

  let query = supabase.from("items").select("*")

  if (categorySlug !== "all") {
    // First get the category id
    const { data: categoryData } = await supabase.from("categories").select("id").eq("slug", categorySlug).single()

    if (categoryData) {
      query = query.eq("category_id", categoryData.id)
    }
  }

  const { data, error } = await query.order("name")

  if (error) {
    console.error("Error fetching items:", error)
    return []
  }
  
  return data
}


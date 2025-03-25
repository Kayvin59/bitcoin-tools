export interface Category {
    id: number
    name: string
    slug: string
}
  
export interface Item {
    id: number
    name: string
    description: string
    logo_url: string
    category_id: number
    website_url: string
    github_url: string | null
    twitter_url: string | null
    discord_url: string | null
    created_at: string
}
    
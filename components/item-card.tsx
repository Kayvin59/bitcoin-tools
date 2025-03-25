import type { Item } from "@/types"
import { Github, Globe, MessageCircle, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface ItemCardProps {
  item: Item
}

export function ItemCard({ item }: ItemCardProps) {
  return (
    <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-6">
        <div className="group flex items-center mb-4 hover:cursor-pointer">
          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
            {item.logo_url ? (
              <Image
                src={item.logo_url || "https://placehold.co/32"}
                alt={`${item.name} logo`}
                width={32}
                height={32}
                className="rounded"
              />
            ) : (
              <div className="w-8 h-8 bg-orange-500 rounded" />
            )}
          </div>
          <h3 className="text-xl font-bold group-hover:text-orange-500 group-hover:underline">{item.name}</h3>
        </div>
        <p className="text-gray-600 mb-6 line-clamp-3">{item.description}</p>
        <div className="flex space-x-3">
          {item.website_url && (
            <Link
              href={item.website_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-orange-500 transition-colors"
            >
              <Globe size={20} />
              <span className="sr-only">Website</span>
            </Link>
          )}
          {item.github_url && (
            <Link
              href={item.github_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-orange-500 transition-colors"
            >
              <Github size={20} />
              <span className="sr-only">GitHub</span>
            </Link>
          )}
          {item.twitter_url && (
            <Link
              href={item.twitter_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-orange-500 transition-colors"
            >
              <Twitter size={20} />
              <span className="sr-only">Twitter</span>
            </Link>
          )}
          {item.discord_url && (
            <Link
              href={item.discord_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-orange-500 transition-colors"
            >
              <MessageCircle size={20} />
              <span className="sr-only">Discord</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}


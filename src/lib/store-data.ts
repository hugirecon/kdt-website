const BACKEND_URL = process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL || "http://localhost:9000"
const PUBLISHABLE_KEY = process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY || ""
const REGION_ID = "reg_01KMHD7MMJHAHGSHKE21D6YSB5"

export interface MedusaProduct {
  id: string
  title: string
  handle: string
  description: string | null
  thumbnail: string | null
  images: { id: string; url: string }[]
  categories: { id: string; name: string; handle: string }[]
  tags: { id: string; value: string }[]
  metadata: Record<string, unknown> | null
  variants: {
    id: string
    title: string
    calculated_price?: {
      calculated_amount: number
      currency_code: string
    }
  }[]
}

export interface MedusaCategory {
  id: string
  name: string
  handle: string
}

async function medusaFetch<T>(path: string, params: Record<string, string> = {}): Promise<T | null> {
  try {
    const query = new URLSearchParams(params).toString()
    const url = `${BACKEND_URL}${path}${query ? `?${query}` : ""}`
    const res = await fetch(url, {
      headers: {
        "x-publishable-api-key": PUBLISHABLE_KEY,
      },
      next: { revalidate: 60 },
    })
    if (!res.ok) {
      console.error(`Medusa API error: ${res.status} ${res.statusText} for ${url}`)
      return null
    }
    return res.json()
  } catch (err) {
    console.error("Medusa API fetch failed:", err)
    return null
  }
}

export async function getProducts(): Promise<MedusaProduct[]> {
  const data = await medusaFetch<{ products: MedusaProduct[] }>("/store/products", {
    fields: "*variants,*variants.calculated_price",
    region_id: REGION_ID,
  })
  return data?.products ?? []
}

export async function getProductByHandle(handle: string): Promise<MedusaProduct | null> {
  const data = await medusaFetch<{ products: MedusaProduct[] }>("/store/products", {
    handle,
    fields: "*variants,*variants.calculated_price",
    region_id: REGION_ID,
  })
  return data?.products?.[0] ?? null
}

export async function getCategories(): Promise<MedusaCategory[]> {
  const data = await medusaFetch<{ product_categories: MedusaCategory[] }>("/store/product-categories", {})
  return data?.product_categories ?? []
}

/**
 * Format a Medusa price (in cents) to a display string like "$11.50"
 */
export function formatPrice(amountInCents: number, currencyCode = "usd"): string {
  const amount = amountInCents / 100
  if (currencyCode === "usd") {
    // Use clean format: $11.50, $35 (no decimals if whole number)
    return amount % 1 === 0 ? `$${amount}` : `$${amount.toFixed(2)}`
  }
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currencyCode,
  }).format(amount)
}

/**
 * Extract the price string from a Medusa product
 */
export function getProductPrice(product: MedusaProduct): string | null {
  const variant = product.variants?.[0]
  if (variant?.calculated_price?.calculated_amount != null) {
    return formatPrice(
      variant.calculated_price.calculated_amount,
      variant.calculated_price.currency_code
    )
  }
  return null
}

/**
 * Extract category name from a Medusa product  
 */
export function getProductCategory(product: MedusaProduct): string {
  return product.categories?.[0]?.name?.toLowerCase() ?? "gear"
}

/**
 * Extract category tag/label from a Medusa product
 */
export function getProductTag(product: MedusaProduct): string {
  if (product.tags?.length) return product.tags[0].value
  if (product.categories?.length) return product.categories[0].name
  return "Gear"
}

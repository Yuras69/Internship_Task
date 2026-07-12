import AxiosInstance from "@/lib/AxiosInstance"
import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const Product = () => {
  const [products, setProducts] = useState<any[]>([])

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await AxiosInstance.get("/posts")
        if (response.status === 200) {
          setProducts(response.data)
        }
      } catch (error) {
        console.error("Error fetching products:", error)
      }
    }
    getProduct()
  }, [])

  return (
    <section className="mx-auto max-w-6xl px-6 py-10">
      <div className="mb-8">
        <p className="text-sm font-semibold text-primary uppercase">
          Product collection
        </p>
        <h1 className="mt-2 font-heading text-4xl font-bold text-foreground">
          Explore our products
        </h1>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="rounded-lg border bg-card p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <p className="text-sm font-medium text-muted-foreground">
              Product #{product.id}
            </p>
            <h3 className="mt-3 line-clamp-2 text-lg font-semibold text-foreground capitalize">
              {product.title}
            </h3>
            <Link
              to={`/product/${product.id}`}
              className="mt-5 inline-flex rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
            >
              View details
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Product

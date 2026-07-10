import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AxiosInstance from '@/lib/AxiosInstance'

const ProductDetails = () => {
  const { id } = useParams()

  const [product, setProduct] = useState([])

  const getProduct = async () => {
    const axiosResponse = await AxiosInstance.get(`/posts/${id}`)
    setProduct([axiosResponse.data])
  }

  useEffect(() => {
    getProduct()
  }, [])

  return (
    <div>
      <h1>Product Details Page</h1>

      {product.map((item) => (
        <div key={item.id}>
          <p><strong>Title:</strong> {item.title}</p>
          <p><strong>ID:</strong> {item.id}</p>
          <p><strong>Body:</strong> {item.body}</p>
          <p><strong>User ID:</strong> {item.userId}</p>
        </div>
      ))}
    </div>
  )
}

export default ProductDetails
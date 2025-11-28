'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface Product {
  name: string
  category: string
  specs: {
    range: string
    charging: string
    battery: string
    seating?: string
  }
  price: string
}

export function ProductComparison() {
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([
    {
      name: 'Gorilla EMV 54',
      category: 'E-Motorcycle',
      specs: {
        range: '120km',
        charging: '1 hour',
        battery: '72V 32Ah'
      },
      price: '$2,999'
    },
    {
      name: 'EV5 Dolphin',
      category: 'E-Car',
      specs: {
        range: '400km',
        charging: '6-8 hours',
        battery: '75kWh',
        seating: '5'
      },
      price: '$29,999'
    }
  ])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-gray-900  p-6"
    >
      <h3 className="text-xl font-bold mb-6">Compare Vehicles</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Features</TableHead>
            {selectedProducts.map((product) => (
              <TableHead key={product.name}>{product.name}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Category</TableCell>
            {selectedProducts.map((product) => (
              <TableCell key={`${product.name}-category`}>{product.category}</TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell>Range</TableCell>
            {selectedProducts.map((product) => (
              <TableCell key={`${product.name}-range`}>{product.specs.range}</TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell>Charging Time</TableCell>
            {selectedProducts.map((product) => (
              <TableCell key={`${product.name}-charging`}>{product.specs.charging}</TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell>Battery</TableCell>
            {selectedProducts.map((product) => (
              <TableCell key={`${product.name}-battery`}>{product.specs.battery}</TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell>Price</TableCell>
            {selectedProducts.map((product) => (
              <TableCell key={`${product.name}-price`}>{product.price}</TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </motion.div>
  )
}


'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Filter } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function ProductFilters() {
  const [searchTerm, setSearchTerm] = useState('')
  const categories = ['All', 'E-Motorcycle', 'E-Van', 'E-Car', 'E-SUV', 'E-Bus']
  const priceRanges = ['All', 'Under $5,000', '$5,000-$20,000', '$20,000-$50,000', 'Over $50,000']

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gray-900 p-6 mb-8"
    >
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            type="text"
            placeholder="Search vehicles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-black border-gray-800"
          />
        </div>
        <Select defaultValue="All">
          <SelectTrigger className="w-full md:w-[200px] bg-black border-gray-800">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select defaultValue="All">
          <SelectTrigger className="w-full md:w-[200px] bg-black border-gray-800">
            <SelectValue placeholder="Price Range" />
          </SelectTrigger>
          <SelectContent>
            {priceRanges.map((range) => (
              <SelectItem key={range} value={range}>
                {range}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
          <Filter className="w-4 h-4 mr-2" />
          Filter
        </Button>
      </div>
    </motion.div>
  )
}


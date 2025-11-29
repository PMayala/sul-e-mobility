"use client"

import dynamic from "next/dynamic"
import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

// -------------------------------------------
// TYPE DEFINITION
// -------------------------------------------
export type LocationType = {
  city: string
  address: string
  country: string
  type: string
  lat: number
  lng: number
}

// -------------------------------------------
// ANIMATED MARKER SVG (REAL ANIMATION)
// -------------------------------------------
const AnimatedSVG = () => (
  <motion.div
    initial={{ scale: 0, y: -8, opacity: 0 }}
    animate={{
      scale: [1, 1.2, 1],
      y: 0,
      opacity: 1,
    }}
    transition={{
      duration: 1.2,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
    }}
  >
    <img
      src="/images/marker-red.png"
      alt="marker"
      className="h-10 w-10 drop-shadow-[0_0_12px_#ff1f1faa]"
    />
  </motion.div>
)

// -------------------------------------------
// INNER MAP (CLIENT-ONLY)
// -------------------------------------------
function MapInner({ locations }: { locations: LocationType[] }) {
  const { MapContainer, TileLayer, useMap } = require("react-leaflet")

  // Component that places animated marker at correct position
  function AnimatedMarker({ lat, lng }: { lat: number; lng: number }) {
    const map = useMap()
    const markerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
      if (!map || !markerRef.current) return

      const updateMarker = () => {
        const point = map.project([lat, lng], map.getZoom())
        markerRef.current!.style.transform =
          `translate(${point.x}px, ${point.y}px) translate(-50%, -100%)`
      }

      updateMarker()
      map.on("move", updateMarker)
      map.on("zoom", updateMarker)

      return () => {
        map.off("move", updateMarker)
        map.off("zoom", updateMarker)
      }
    }, [map, lat, lng])

    return (
      <div
        ref={markerRef}
        className="absolute pointer-events-none z-[500]"
        style={{ position: "absolute" }}
      >
        <AnimatedSVG />
      </div>
    )
  }

  const center: [number, number] = [-1.95, 30.05]

  return (
    <div className="relative w-full h-full">
      {/* Animated markers overlay container */}
      <div className="absolute inset-0 z-[500] pointer-events-none" />

      <MapContainer
        center={center}
        zoom={8}
        scrollWheelZoom={false}
        className="w-full h-full z-[100]"
      >
        <TileLayer
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
        />

        {/* REAL animated markers */}
        {locations.map((loc) => (
          <AnimatedMarker key={loc.city} lat={loc.lat} lng={loc.lng} />
        ))}
      </MapContainer>
    </div>
  )
}

// -------------------------------------------
// DYNAMIC IMPORT (SSR FIX)
// -------------------------------------------
const DynamicMap = dynamic(() => Promise.resolve(MapInner), {
  ssr: false,
})

// -------------------------------------------
// MAIN COMPONENT
// -------------------------------------------
export default function PresenceMap({ locations }: { locations: LocationType[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden border border-gray-800 shadow-lg"
    >
      <DynamicMap locations={locations} />
    </motion.div>
  )
}

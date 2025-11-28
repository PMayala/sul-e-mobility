"use client"

import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import L, { LatLngExpression } from "leaflet"
import { MapPin } from "lucide-react"
import { renderToString } from "react-dom/server"

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
// ANIMATED MARKER SVG
// -------------------------------------------
const AnimatedSVG = () => (
  <motion.div
    initial={{ scale: 0, y: -8, opacity: 0 }}
    animate={{
      scale: [1, 1.15, 1],
      y: 0,
      opacity: 1,
    }}
    transition={{
      duration: 1.2,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeOut",
    }}
    className="flex justify-center items-center"
  >
    <img
      src="/images/marker-red.svg"
      className="h-10 w-10 drop-shadow-[0_0_10px_#ff0000aa]"
    />
  </motion.div>
)

// -------------------------------------------
// DIVICON THAT HOLDS THE ANIMATED SVG
// -------------------------------------------
const getAnimatedIcon = () =>
  new L.DivIcon({
    html: renderToString(<AnimatedSVG />),
    className: "",
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  })

// -------------------------------------------
// DYNAMIC IMPORT (NO SSR = FIXED)
// -------------------------------------------
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
)

const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
)

const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
)

const Popup = dynamic(
  () => import("react-leaflet").then((mod) => mod.Popup),
  { ssr: false }
)

// -------------------------------------------
// MAIN COMPONENT
// -------------------------------------------
type PresenceMapProps = {
  locations: LocationType[]
}

export default function PresenceMap({ locations }: PresenceMapProps) {
  const center: LatLngExpression = [-1.95, 30.05]

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden border border-gray-800 shadow-lg"
    >
      {/* Prevent SSR crash */}
      <MapContainer
        center={center}
        zoom={8}
        scrollWheelZoom={false}
        className="w-full h-full"
      >
        <TileLayer
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
          attribution="&copy; OpenMapTiles &copy; OpenStreetMap contributors"
        />

        {locations.map((loc) => (
          <Marker
            key={loc.city}
            position={[loc.lat, loc.lng] as LatLngExpression}
            icon={getAnimatedIcon()}
          >
            <Popup>
              <div className="text-sm">
                <h3 className="font-bold text-red-600 flex items-center gap-1">
                  <MapPin className="h-4 w-4" /> {loc.city}
                </h3>
                <p className="text-gray-700 mt-1">{loc.address}</p>
                <p className="text-xs text-gray-500">{loc.type}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </motion.div>
  )
}

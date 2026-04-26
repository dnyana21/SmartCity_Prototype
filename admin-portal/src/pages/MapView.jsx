import { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Custom premium markers
const createCustomIcon = (color) => {
  return new L.DivIcon({
    className: 'custom-leaflet-icon',
    html: `
      <div style="
        width: 32px; 
        height: 32px; 
        background: ${color}; 
        border-radius: 50%; 
        border: 3px solid white; 
        box-shadow: 0 4px 10px rgba(0,0,0,0.3);
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
      ">
        <div style="width: 8px; height: 8px; background: white; border-radius: 50%;"></div>
        <div style="position: absolute; bottom: -6px; left: 50%; transform: translateX(-50%); width: 0; height: 0; border-left: 6px solid transparent; border-right: 6px solid transparent; border-top: 8px solid ${color};"></div>
      </div>
    `,
    iconSize: [32, 40],
    iconAnchor: [16, 40],
    popupAnchor: [0, -40],
  })
}

const icons = {
  high: createCustomIcon('#EF4444'),    // Danger
  medium: createCustomIcon('#F59E0B'),  // Warning
  low: createCustomIcon('#10B981'),     // Success
}

// Dummy geolocated complaints
const mapData = [
  { id: 'JAL-101', lat: 21.0077, lng: 75.5626, category: 'Roads', priority: 'high', status: 'Pending' },
  { id: 'JAL-102', lat: 21.0110, lng: 75.5650, category: 'Water', priority: 'medium', status: 'In Progress' },
  { id: 'JAL-103', lat: 21.0020, lng: 75.5580, category: 'Sanitation', priority: 'low', status: 'Resolved' },
  { id: 'JAL-104', lat: 21.0095, lng: 75.5700, category: 'Streetlight', priority: 'high', status: 'Pending' },
  { id: 'JAL-105', lat: 21.0050, lng: 75.5600, category: 'Roads', priority: 'medium', status: 'In Progress' },
]

function MapView() {
  const [filter, setFilter] = useState('all')

  const filteredData = filter === 'all' ? mapData : mapData.filter(d => d.priority === filter)

  return (
    <div className="h-[calc(100vh-8rem)] w-full relative animate-fade-in flex flex-col">
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-primary tracking-tight">Live Issue Map</h1>
          <p className="text-text-secondary mt-1">Geospatial analysis of active complaints</p>
        </div>
        
        {/* Floating Filters */}
        <div className="flex bg-white rounded-full p-1 shadow-sm border border-border self-start">
          {['all', 'high', 'medium', 'low'].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-1.5 rounded-full text-sm font-bold capitalize transition-all ${
                filter === f ? 'bg-primary text-white shadow-md' : 'text-text-secondary hover:text-primary'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 relative rounded-[2rem] overflow-hidden shadow-lg border border-border bg-white">
        {/* Legend Overlay */}
        <div className="absolute top-6 right-6 z-[1000] bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-border p-4 w-48">
          <h3 className="text-xs font-bold text-text-muted uppercase tracking-wider mb-3">Priority Legend</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full bg-danger border-2 border-white shadow-sm"></div>
              <span className="text-sm font-semibold text-text-secondary">High Priority</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full bg-warning border-2 border-white shadow-sm"></div>
              <span className="text-sm font-semibold text-text-secondary">Medium Priority</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full bg-success border-2 border-white shadow-sm"></div>
              <span className="text-sm font-semibold text-text-secondary">Low Priority</span>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-border flex items-center justify-between">
            <span className="text-xs font-semibold text-text-muted">Showing</span>
            <span className="text-sm font-bold text-primary">{filteredData.length} pts</span>
          </div>
        </div>

        <MapContainer 
          center={[21.0077, 75.5626]} 
          zoom={14} 
          style={{ height: '100%', width: '100%', zIndex: 10 }}
          zoomControl={false}
        >
          {/* Using a premium minimal tile layer */}
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          />
          
          {filteredData.map((complaint) => (
            <Marker 
              key={complaint.id} 
              position={[complaint.lat, complaint.lng]}
              icon={icons[complaint.priority]}
            >
              <Popup className="premium-popup">
                <div className="p-1 min-w-[200px]">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-bold text-primary text-base">{complaint.id}</span>
                    <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded border ${
                      complaint.status === 'Resolved' ? 'bg-success/10 text-success border-success/20' :
                      complaint.status === 'In Progress' ? 'bg-accent/10 text-accent border-accent/20' :
                      'bg-warning/10 text-warning border-warning/20'
                    }`}>
                      {complaint.status}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-text-secondary"><span className="font-bold text-text-primary">Category:</span> {complaint.category}</p>
                    <p className="text-sm text-text-secondary"><span className="font-bold text-text-primary">Priority:</span> <span className="capitalize">{complaint.priority}</span></p>
                  </div>
                  <button className="w-full mt-3 py-2 bg-primary hover:bg-primary-light text-white text-xs font-bold rounded-lg transition-colors">
                    View Details
                  </button>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .leaflet-control-attribution {
          background: rgba(255,255,255,0.8) !important;
          backdrop-filter: blur(4px);
          border-top-left-radius: 8px;
          padding: 2px 8px !important;
          font-size: 10px !important;
          color: #64748b !important;
        }
        .leaflet-control-attribution a {
          color: #2563eb !important;
        }
        /* Fix overlapping controls */
        .leaflet-top, .leaflet-bottom {
          z-index: 400 !important;
        }
      `}} />
    </div>
  )
}

export default MapView

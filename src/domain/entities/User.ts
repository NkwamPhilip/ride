export interface User {
  id: string
  phoneNumber: string
  email?: string
  name: string
  role: 'rider' | 'driver'
  isVerified: boolean
  createdAt: Date
  updatedAt: Date
}

export interface Driver extends User {
  role: 'driver'
  vehicleDetails?: VehicleDetails
  rating?: number
  totalTrips?: number
}

export interface Rider extends User {
  role: 'rider'
  rating?: number
  totalTrips?: number
}

export interface VehicleDetails {
  make: string
  model: string
  year: number
  licensePlate: string
  color: string
}


export interface Hotel {
    id: string;
    name: string;
    rating: number;
    reviews: number;
    price: number;
    image: string;
    location: string;
    distance: string;
    amenities: string[];
    freeCancellation?: boolean;
    breakfast?: boolean;
  }
  
  export interface SearchParams {
    location: string;
    checkIn: string;
    checkOut: string;
    guests: number;
    rooms: number;
  }
export type Property = {
  id: string;
  title: string;
  description: string;
  images: string[];
  facilities: {
    bedrooms: number;
    bathrooms: number;
    smartHomeSystem: boolean;
    gym: boolean;
    parking: number;
    area: string;
    pool: boolean;
    gardenView: boolean;
  };
  pricing: {
    rent: boolean;
    buy: boolean;
    annualPayment?: number;
    minRentalDuration?: string;
    purchasePrice?: number;
  };
  agent: {
    name: string;
    role: string;
    phone: string;
    email: string;
    image: string;
  };
  inspection: {
    note: string;
    time: string;
  };
  location: {
    address: string;
    latitude: number;
    longitude: number;
  };
};

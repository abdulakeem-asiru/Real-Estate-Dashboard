import { NextResponse } from 'next/server';

export function GET() {
  const property = [
    {
      id: 'hayfield-willow-001',
      title: 'Hayfield Ashton Place Residences at Willow Brook Valley',
      description:
        'Elegant and serene residential community with charming modern homes surrounded by lush greenery and a tranquil brook.',
      images: [
        'https://via.placeholder.com/800x400?text=Main+House',
        'https://via.placeholder.com/800x400?text=Interior+1',
        'https://via.placeholder.com/800x400?text=Interior+2'
      ],
      facilities: {
        bedrooms: 4,
        bathrooms: 3,
        smartHomeSystem: true,
        gym: true,
        parking: 2,
        area: '1400 sq ft',
        pool: true,
        gardenView: true
      },
      pricing: {
        rent: true,
        buy: false,
        annualPayment: 14000,
        minRentalDuration: '3 Years'
      },
      agent: {
        name: 'Sophia Williams',
        role: 'Real Estate Agent',
        phone: '+123456789',
        email: 'sophia.williams@example.com',
        image: 'https://via.placeholder.com/100x100?text=Sophia'
      },
      inspection: {
        note: 'Inspections are still happening',
        time: 'Mon-Fri, 10:00am-5:00PM'
      },
      location: {
        address: '1668 Lincoln Drive Harrisburg, PA 17101 USA',
        latitude: 40.2732,
        longitude: -76.8867
      }
    },
    {
      id: 'green-acres-002',
      title: 'Green Acres Heights',
      description:
        'Luxury apartments in a gated estate with smart home features and panoramic city views.',
      images: [
        'https://via.placeholder.com/800x400?text=Green+Acres',
        'https://via.placeholder.com/800x400?text=Living+Room',
        'https://via.placeholder.com/800x400?text=Balcony'
      ],
      facilities: {
        bedrooms: 3,
        bathrooms: 2,
        smartHomeSystem: true,
        gym: true,
        parking: 1,
        area: '1100 sq ft',
        pool: false,
        gardenView: false
      },
      pricing: {
        rent: false,
        buy: true,
        purchasePrice: 95000
      },
      agent: {
        name: 'Daniel Adeyemi',
        role: 'Property Consultant',
        phone: '+2348012345678',
        email: 'daniel.adeyemi@example.com',
        image: 'https://via.placeholder.com/100x100?text=Daniel'
      },
      inspection: {
        note: 'Inspection only on Saturdays',
        time: 'Saturdays, 12:00pm-4:00PM'
      },
      location: {
        address: '34B Ikoyi Crescent, Lagos, Nigeria',
        latitude: 6.4541,
        longitude: 3.3947
      }
    }
  ];

  return NextResponse.json(property);
}

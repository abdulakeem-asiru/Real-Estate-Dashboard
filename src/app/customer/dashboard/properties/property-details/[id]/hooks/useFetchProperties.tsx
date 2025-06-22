'use client'
import {useEffect, useState} from 'react'
import { Property } from '@/types';
import { PropertyDetails } from '@/app/admin/data/Listing';

function useFetchProperties(id : string) {
  const [property, setProperty] = useState<Property | null>(null)
  const [loading, setLoading] = useState<boolean>(true);
   const [error, setError] = useState<string | null>(null);

useEffect(() =>{
 const fetchProperties =async() =>{
    setLoading(true)
    try {
      const all: Property[] =  PropertyDetails
      const property = all.find((p) => p.id === id);
      setProperty(property || null)
      setLoading(false)
    } 
    catch (error) {
  if (error instanceof Error) {
    setError(error.message);
  } else {
    setError("An unexpected error occurred");
  }
}
  finally{
      setLoading(false);
     }
  }
  fetchProperties();
  }, [id])

  return {property, loading, error }
}

export default useFetchProperties

'use client';

import { Filters } from '@/app/types/property/filtertypes';
import { itemData } from '@/app/types/property/propertyData';
import React, {
  createContext,
  useState,
  useEffect,
  ReactNode,
  Dispatch,
  SetStateAction
} from 'react';

interface PropertyContextType {
  properties: itemData[];
  setProperties: Dispatch<SetStateAction<itemData[]>>;
  filters: Filters;
  setFilters: any;
  updateFilter: (key: keyof Filters, value: string) => void;
}

export const PropertyContext = createContext<PropertyContextType | undefined>(undefined);

export const AppContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [allProperties, setAllProperties] = useState<itemData[]>([]);
  const [properties, setProperties] = useState<itemData[]>([]);
  const [filters, setFilters] = useState<Filters>({
    keyword: '',
    location: '',
    region: '',
    status: '',
    category: '',
    beds: '',
    baths: '',
    garages: '',
    tag: '',
  });

  // Fetch properties from the API route
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await fetch('/api/itemData');
        const data: itemData[] = await res.json();
        setAllProperties(data);
        setProperties(data); // set initially unfiltered list
      } catch (error) {
        console.error('Failed to fetch properties:', error);
      }
    };

    fetchProperties();
  }, []);

  // Apply filters whenever `filters` or `allProperties` change
  useEffect(() => {
    const filteredProperties = allProperties.filter((property) => {
      return (
        (!filters.keyword || property.item_title.toLowerCase().includes(filters.keyword.toLowerCase()))
      );
    });

    setProperties(filteredProperties);
  }, [filters, allProperties]);

  const updateFilter = (key: keyof Filters, value: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: value,
    }));
  };

  return (
    <PropertyContext.Provider
      value={{
        properties,
        setProperties,
        filters,
        setFilters,
        updateFilter
      }}
    >
      {children}
    </PropertyContext.Provider>
  );
};

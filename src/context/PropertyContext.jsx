import React, { createContext, useState, useContext, useEffect } from 'react';
import { PROPERTIES } from '../data/mockData';

const PropertyContext = createContext();

export const useProperties = () => useContext(PropertyContext);

export const PropertyProvider = ({ children }) => {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        // Load from localStorage or fall back to mock data
        const storedProperties = localStorage.getItem('jsRealityGroup_properties');
        if (storedProperties) {
            setProperties(JSON.parse(storedProperties));
        } else {
            setProperties(PROPERTIES);
            localStorage.setItem('jsRealityGroup_properties', JSON.stringify(PROPERTIES));
        }
    }, []);

    const addProperty = (newProperty) => {
        const updatedProperties = [...properties, { ...newProperty, id: Date.now() }];
        setProperties(updatedProperties);
        localStorage.setItem('jsRealityGroup_properties', JSON.stringify(updatedProperties));
    };

    const updateProperty = (id, updatedData) => {
        const updatedProperties = properties.map(prop =>
            prop.id === parseInt(id) ? { ...prop, ...updatedData } : prop
        );
        setProperties(updatedProperties);
        localStorage.setItem('jsRealityGroup_properties', JSON.stringify(updatedProperties));
    };

    const deleteProperty = (id) => {
        const updatedProperties = properties.filter(prop => prop.id !== id);
        setProperties(updatedProperties);
        localStorage.setItem('jsRealityGroup_properties', JSON.stringify(updatedProperties));
    };

    return (
        <PropertyContext.Provider value={{ properties, addProperty, updateProperty, deleteProperty }}>
            {children}
        </PropertyContext.Provider>
    );
};

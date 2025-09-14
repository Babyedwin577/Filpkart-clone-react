import { useState } from 'react';

export const useFilters = (filters, setFilters) => {
  const [expandedCategories, setExpandedCategories] = useState({});

  const toggleCategory = (key) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleChange = (key, option) => {
    setFilters((prev) => {
      const activeAlready = prev[key].includes(option);
      return {
        ...prev,
        [key]: activeAlready
          ? prev[key].filter((item) => item !== option)
          : [...prev[key], option],
      };
    });
  };

  const clearAll = () => {
    const cleared = Object.keys(filters).reduce((acc, key) => {
      if (key === 'priceMin') acc[key] = 0;
      else if (key === 'priceMax') acc[key] = Infinity;
      else acc[key] = [];
      return acc;
    }, {});
    setFilters(cleared);
  };

  const removeFilter = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: prev[key].filter((item) => item !== value),
    }));
  };

  return {
    expandedCategories,
    toggleCategory,
    handleChange,
    clearAll,
    removeFilter,
  };
};
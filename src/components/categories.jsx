import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Categories({ categories, selectedCategory, onSelectCategory }) {
    const [showCategories, setShowCategories] = useState(false);

    useEffect(() => {
        AOS.init();
    }, []);

    const toggleCategories = () => {
        setShowCategories(!showCategories);
        AOS.refresh();
    };

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    return (
        <div>
            <div>
                <button 
                    className="border border-gray-300 bg-blue-300 hover:bg-blue-200 px-2 py-1 rounded font-medium mb-2 mt-2"
                    onClick={toggleCategories}
                    data-aos= 'flip-left'
                >
                    View categories
                </button>
            </div>
            {showCategories && (
                <ul className="flex flex-wrap items-center justify-center gap-3 mb-2">
                    {categories.map(category => (
                        <li
                            key={category.id}
                            className={`cursor-pointer border rounded hover:bg-slate-100 p-1${selectedCategory === category.id ? ' font-bold' : ''}`}
                            onClick={() => onSelectCategory(category.id)}
                        >
                            {capitalizeFirstLetter(category.name)}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Categories;

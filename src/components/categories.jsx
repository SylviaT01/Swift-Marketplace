import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Categories({ categories, selectedCategory, onSelectCategory }) {

    useEffect(() => {
        AOS.init();
    }, []);

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    return (
        <div>
            <h3 className="font-semibold mb-2">Categories</h3>
            <ul className="flex flex-wrap items-center justify-center gap-4 mb-4">
                {categories.map(category => (
                    <li
                        key={category.id}
                        className={`cursor-pointer border-2 rounded hover:bg-slate-100 p-1${selectedCategory === category.id ? ' font-bold' : ''}`}
                        onClick={() => onSelectCategory(category.id)}
                        
                    >
                        {capitalizeFirstLetter(category.name)}
                        
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Categories;

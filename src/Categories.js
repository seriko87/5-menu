import React from "react";

const Categories = ({ category, checkCategory }) => {
  return (
    <div className='buttons'>
      {category.map((item, index) => {
        return (
          <button
            className='menuButtons'
            onClick={() => checkCategory(item)}
            key={index}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;

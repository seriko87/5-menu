import React from "react";

const Menu = ({ props }) => {
  return (
    <div className='listItems'>
      {props.map((items) => {
        return (
          <div key={items.id} className='items'>
            <img src={items.img} alt={items.title} />
            <div className='itemsTop'>
              <header>
                <h3>{items.title}</h3>
                <p className='price'>${items.price}</p>
              </header>

              <p className='info'>{items.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;

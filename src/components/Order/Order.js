import React from 'react';
import classes from './Order.module.css';
function Order(props) {
  const ingredients = [];
  for (let ingName in props.ingredients) {
    ingredients.push({ name: ingName, amount: props.ingredients[ingName] });
  }
  return (
    <div className={classes.Order}>
      <p>
        Ingredients:{' '}
        {ingredients.map((ig) => (
          <span
            key={ig.name}
            style={{
              textTransform: 'capitalize',
              display: 'inline-block',
              margin: '0 8px',
              border: '1px solid #ccc',
              padding: '5px',
            }}
          >
            {ig.name} ({ig.amount})
          </span>
        ))}
      </p>

      <p>
        Price: <strong>USD {props.price.toFixed(2)}</strong>
      </p>
    </div>
  );
}

export default Order;

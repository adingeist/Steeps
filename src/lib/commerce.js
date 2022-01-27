import Commerce from '@chec/commerce.js';

// Create new commerce store we can use across our application
export const commerce = new Commerce(
  process.env.REACT_APP_CHEC_PUBLIC_KEY,
  true
);

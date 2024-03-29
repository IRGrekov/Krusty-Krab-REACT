import PropTypes from 'prop-types'

export const ingredientPropType = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  proteins: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  carbohydrates: PropTypes.number.isRequired,
  calories: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  image_mobile: PropTypes.string.isRequired,
  image_large: PropTypes.string.isRequired,
  __v: PropTypes.number.isRequired,
})

// _id: '60666c42cc7b410027a1a9b1',
// name: 'Краторная булка N-200i',
// type: 'bun',
// proteins: 80,
// fat: 24,
// carbohydrates: 53,
// calories: 420,
// price: 1255,
// image: 'https://code.s3.yandex.net/react/code/bun-02.png',
// image_mobile: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
// image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png',
// __v: 0,

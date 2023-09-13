import PropTypes from "prop-types";
const Product = ({product, add, remove}) => {
  const {name, price, id, brand} = product;
  return (
    <div key={id} className="card w-60 bg-base-100 shadow-xl rounded-xl">
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{brand}</p>
        <p className="text-primary">{price}</p>
        <div className="card-actions justify-center items-center">
          <button
            onClick={() => add(product)}
            className="btn btn-outline btn-secondary min-h-0 h-10 mt-5 rounded-xl"
          >
            Add
          </button>
          <button
            onClick={() => remove(product)}
            className="btn btn-outline btn-secondary min-h-0 h-10 mt-5 rounded-xl"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
  add: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};

export default Product;

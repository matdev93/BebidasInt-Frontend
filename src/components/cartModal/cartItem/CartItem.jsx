import "./CartItem.scss";

const CartItem = ({cartItem}) => {

    const {image, name, quantity, price} = cartItem

  return (
    <div className="cart-item-container">
        <img src={image} alt={name}/>
        <div className="item-details">
            <span className="name">{name} </span>
            <span className="price">{quantity} x {price}</span>
        </div>
    </div>
  )
}

export default CartItem
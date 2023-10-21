import { Link } from "react-router-dom";


const OrdersCard = ({showOrders}) => {
    // const {,name, price, image} = showOrders;
    console.log(showOrders);
    const handleDelete = (_id) => {
      console.log(_id);
      fetch(`http://localhost:5001/cart/${_id}`, {
        method : "DELETE",
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
    }
    return (
        <div>
            <div
            
            className="card  card-side bg-base-100 shadow-xl"
          >
            <figure>
              <img 
                src={showOrders.image}
                alt="Movie"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{showOrders.name}</h2>
              <p>{showOrders.price}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
                <button onClick={() => handleDelete(showOrders._id)} className="btn btn-primary">Remove</button>
              </div>
            </div>
          </div>
        </div>
    );
};

export default OrdersCard;
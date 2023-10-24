import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const OrdersCard = ({showOrders, userOrder, setOrder}) => {
    // const {,name, price, image} = showOrders;
    console.log(showOrders);
    const notify = () => toast("Product Deleted");
    const handleDelete = (_id) => {
      console.log(_id);
      fetch(`https://brand-shop-server-beryl-five.vercel.app/cart/${_id}`, {
        method : "DELETE",
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if(data.deletedCount > 0){
          const remaining = userOrder.filter(uorder => uorder._id !== _id)
          setOrder(remaining)
          notify()
        }
      })
      .catch(error => {
      console.error("Error deleting order: ", error);
    });
     
    }

    
    
    return (
        <div>
          <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
            <div 
            
            className="card  card-side bg-base-100 shadow-xl mb-10 border-2 border-dashed"
          >
            <figure>
              <img 
                className="w-52"
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
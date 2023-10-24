import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import OrdersCard from "../../Components/OrdersCard";

const Cart = () => {
  const { user, loading } = useContext(AuthContext);
  const signedUser = user ? user.email : null;
  console.log(signedUser);

  const orders = useLoaderData();
  console.log(orders);

  const [userOrder, setOrder] = useState([]);

  const orderUser = orders.email;
  console.log(orderUser);

  

  useEffect(() => {
    const getOrders = orders.filter((order) => order.email === signedUser);
    console.log(getOrders);
    setOrder(getOrders);
  }, [orders, signedUser]);

  


  return (
    <div>
      <div className="px-10">
        {userOrder.length > 0 ? (
          userOrder.map((showOrders) => (
            <OrdersCard key={showOrders._id} showOrders={showOrders} userOrder={userOrder} setOrder={setOrder}></OrdersCard>
          )))
          :
          (<div className="h-screen flex justify-center items-center">
            <h4>No products added to cart yet.</h4>
          </div>)}
      </div>
    </div>
  );
};

export default Cart;

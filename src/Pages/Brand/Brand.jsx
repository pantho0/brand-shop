import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SingleBrand from "../../Components/SingleBrand/SingleBrand";


const Brand = () => {
    const brand = useParams();
    const loadedProduct = useLoaderData();
    const [items, setItem] = useState([]);
    console.log(items);
    console.log(brand);

    useEffect(()=>{
      const currentBrand = loadedProduct.filter(item => item.brandName === brand.brandName)
      console.log(currentBrand);
      setItem(currentBrand)
    },[])


    return (
        <div className="grid md:grid-cols-3 justify-between gap-4" >
            {
                items.map(item => <SingleBrand key={item.i} item={item}></SingleBrand>)
            }
        </div>
    );
};

export default Brand;
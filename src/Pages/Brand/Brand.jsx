import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SingleBrand from "../../Components/SingleBrand/SingleBrand";


const Brand = () => {
    const brand = useParams();
    const loadedProduct = useLoaderData();
    const [items, setItem] = useState(loadedProduct) || []
    console.log(items);
    console.log(brand);

    useEffect(()=>{
      const currentBrand = items.filter(item => item.brandName === brand.brandName)
      console.log(currentBrand);
      setItem(currentBrand)
    },[])


    return (
        <div>
            {
                items.map(item => <SingleBrand key={item.i} item={item}></SingleBrand>)
            }
        </div>
    );
};

export default Brand;
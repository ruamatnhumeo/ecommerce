import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./Product.scss";

import { getProduct } from "../../../../flux/actions/productAction";
import ProductImgList from "../../components/ProductImgList";
import ProductInformation from "../../components/ProductInformation";

const data = {
  name: "ALLOVER SPORTY LOGO LARGE FIT SHORT SLEEVE SHIRT",
  color: "COLOR",
  price: "1,090",
  composition: "100% Cotton",
  id: " 626938TILR85011",
  size: {
    "38": 2,
    "39": 1
  },
  category: "men",
  description: [
    "Cotton poplin",
    "Allover Sporty logo printed",
    "Large fit",
    "Short sleeve",
    "Button-down collar",
    "Balenciaga engraved buttons",
    "Rounded bottom",
    "1 patch pocket at chest",
    "Made in Italy",
    "Dry cleaning"
  ],
  imgList: [
    "https://www.balenciaga.com/66/38/38920834pd_12_a_f.jpg",
    "https://www.balenciaga.com/66/38/38920834pd_12_a_d.jpg",
    "https://www.balenciaga.com/66/38/38920834pd_10_a_g.jpg",
    "https://www.balenciaga.com/66/38/38920834pd_12_a_i.jpg",
    "https://www.balenciaga.com/66/38/38920834pd_10_a_h.jpg",
    "https://www.balenciaga.com/66/38/38920834pd_12_a_a.jpg"
  ]
};

function Product() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  let productData;
  const user = useSelector((state) => state.auth.user);
  let isAdmin = false;
  const currency = '$';

  if (user) {
    isAdmin = user.isAdmin;
  }

  useEffect(() => {
    productData = dispatch(getProduct(productId));
  }, []);

  const productExceptImgs = {...data,
    imgList: null,
  };

  console.log(productExceptImgs)

  return (
    <div className="product">
      <ProductImgList imgList={data.imgList} isAdmin={isAdmin}/>
      <ProductInformation productInfo={productExceptImgs} currency={currency} isAdmin={isAdmin}/>
    </div>
  );
}

export default Product;


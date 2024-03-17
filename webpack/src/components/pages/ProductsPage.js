import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HookEffects } from "../../hooks/HooksEffects";

const ProductsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  HookEffects(`/products/${id}`, (data) => setProduct(data), setLoading);

  return (
    <div className="container">
      { loading ? <p>Loading...</p> : JSON.stringify( product )}
    </div>
  );
};

export default ProductsPage;
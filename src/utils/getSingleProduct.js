
const getSingleProduct = async (id) => {
    const res = await fetch(`http://localhost:3000/api/products/${id}`,{
        cache: "no-cache"
    })
    return res.json();
};

export default getSingleProduct;
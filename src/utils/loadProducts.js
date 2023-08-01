const loadProducts = async (categoryId) => {

    let url = "http://localhost:3000/api/products"

    if(categoryId){
        url +="?categoryId="+categoryId;
    }

    const res = await fetch(url,{
        cache: "no-cache"
    })
    return res.json();
};

export default loadProducts;
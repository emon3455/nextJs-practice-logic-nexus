
const getAllCategories = async () => {
    const res = await fetch("http://localhost:3000/api/categories",{
        cache: "force-cache"
    })
    return res.json();
};

export default getAllCategories;
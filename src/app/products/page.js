import SingleProduct from '@/components/SingleProduct';
import loadProducts from '@/utils/loadProducts';
import React from 'react';

const ProductsPage = async ({ searchParams: { categoryId } }) => {

    const products = await loadProducts(categoryId);

    return (
        <div className='container mx-auto'>

            <h2 className='text-2xl text-center text-violet-600 font-bold my-5'>Buy Your Desire Products</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
                {products.map((product) => (
                    <SingleProduct product={product} key={product._id} />
                ))}
            </div>

        </div>
    );
};

export default ProductsPage;
import getAllCategories from '@/utils/loadCategory';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Categories = async () => {

    const categories = await getAllCategories();

    return (
        <div>
            <h2 className='text-2xl font-semibold'>All Categories:</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mb-5">
                {categories.map((category) => (
                    <Link key={category._id} href={`/products?categoryId=${category._id}`}>
                        <div className="card card-compact bg-base-100 shadow-2xl h-full justify-between">
                            <figure>
                                <Image
                                    src={category.imageUrl}
                                    alt={category.name}
                                    width={300}
                                    height={300}
                                    className="max-h-[150px] sm:max-h-[250px] xl:max-h-[300px] object-cover w-auto"
                                />
                            </figure>
                            <div className="card-body flex-grow-0">
                                <h2 className="card-title">{category.name}</h2>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Categories;
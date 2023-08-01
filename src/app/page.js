import Categories from '@/components/home/Categories'
import getAllCategories from '@/utils/loadCategory'
import Image from 'next/image'

const Home = () => {

  return (
    <main className="container mx-auto p-4">

        <h2 className='text-4xl font-bold text-center my-10 text-violet-600'>Welcome To Logic Nexus!!</h2>

        <Categories></Categories>

    </main>
  )
}

export default Home;

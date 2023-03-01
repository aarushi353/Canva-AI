import React,{ useState, useEffect } from 'react'
import Loader from "../components/Loader";
import FieldForm from "../components/FieldForm";
const Home = () => {
  const [loading, setLoading] = useState(true);
  // const [allPosts, setAllPosts] = useState(null);
  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">Community Showcase</h1>
        <p className="mt-2 text-[#666e75] text-[16px] max-w=[500px]">Browse through the collection of visually stunning AI generated images.</p>
      </div>

      <div className="mt-16">
        <FieldForm />
      </div>

      <div className="mt-10">
        {loading ? (
          <div className="flex justify-center items-center">
            <Loader />
          </div>
        ):(
       <>
       
       </>
       )}
      </div>
    </section>
  )
}

export default Home

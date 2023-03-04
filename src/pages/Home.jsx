import React,{ useState, useEffect } from 'react'
import Loader from "../components/Loader";
import FieldForm from "../components/FieldForm";
import Card from '../components/Card';
const RenderCards = ({ data, title }) => {
  if(data?.length > 0) {
    return data.map((post) => <Card key={post._id} {...post} />)
  }

  return (
    <h2 className="mt-5 font-bold text-[#22D3EE] text-xl uppercase">{title}</h2>
  )
}

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);
  const [searchText, setSearchText] = useState('');
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
        {searchText && (
          <h2 className='="font-medium text-[#666e75] text-xl mb-3'>Showing results for <span className="text-[#222328]">{searchText}</span></h2>
        )}
        <div classNamw="grid lg:grids-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
        {searchText ? (
                <RenderCards
                  data={searchedResults}
                  title="No Search Results Found"
                />
              ) : (
                <RenderCards
                  data={allPosts}
                  title="No Posts Yet"
                />
              )}
        </div>
       </>
       )}
      </div>
    </section>
  )
}

export default Home

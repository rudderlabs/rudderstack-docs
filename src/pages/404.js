import React from 'react';
import DocsNavigation from '../components/DocsNavigation';
import Link from "gatsby-link"
import "../css/docs.css"

const Banner404 = props => {
  return (
    <div className="mx-auto banner-404 pb-12 lg:pb-80">
        <DocsNavigation />
      <section className="overflow-auto ">
        <div className="max-w-6xl mt-20 md:mt-40 px-3 md:px-3 mx-auto flex flex-wrap flex-col md:items-center md:text-center">
          <h1 className="text-9xl md:text-20xl md:-mt-16 font-bold font-custom leading-snug text-blueNew-midnight text-center">
            404
          </h1>
          <div className="text-3xl frtxt-contnt md:-mt-28 text-center">
            <p>Page not found!</p>
          </div>

          <div className="block sm:flex justify-center items-center">
            <Link className='btn-primary-lg border-none bg-darkScheme-btnPrimaryBg text-darkScheme-textPrimary sm:mr-4 md:mb-0 mb-4 px-16' to="/" 
                >Go to home</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Banner404

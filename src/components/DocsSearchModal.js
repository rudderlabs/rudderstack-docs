import React, { useState, useEffect, useCallback , useRef} from "react"
import { InstantSearch, Configure } from "react-instantsearch-dom"
import algoliasearch from "algoliasearch/lite"
import DocsSearchBox from "./DocsSearchBox"
import DocSearchContentWrapper from "./DocSearchContentWrapper"

const searchClient = algoliasearch(
    process.env.GATSBY_ALGOLIA_APP_ID,
    process.env.GATSBY_ALGOLIA_SEARCH_APIKEY
)

// SearchBox Modal
export const SearchBoxModal = ({ closeModal, isModalOpen}) => {
    const modalRef = useRef()
    const [currentSearchText, setCurrentSearchText] = useState("")
    const [currentRefineHitsCount, setCurrentRefineHitsCount] = useState(0)

    const handleClickOutside = useCallback(e => {
        if (!modalRef?.current?.contains(e.target)) {
          closeModal(false)
        }
      }, [closeModal])
    
      useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
      }, [handleClickOutside]);

      useEffect(()=>{
        isModalOpen && modalRef.current.focus();
      })
    
    return (
        <div  id="docs-modal" className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className={`searchOverlay ${isModalOpen ? 'active' : ''}`}></div>
                <div ref={modalRef} className="flex text-center justify-center">
                    <div className="relative bg-white rounded-lg max-h-85 text-left overflow-hidden shadow-gray-300 transform transition-all sm:my-8 w-full sm:max-w-lg">
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <InstantSearch
                                searchClient={searchClient}
                                indexName={process.env.GATSBY_ALGOLIA_INDEX_PREFIX + "_gatsby_docs_v2"}
                            >
                                <Configure hitsPerPage={5} />
                                <div className="docsSearchWrapper">
                                    <DocsSearchBox
                                        onRefineTextChange={val => {
                                            setCurrentSearchText(val);
                                        }}
                                        pleaceholderText="Search RudderStack Docs..."
                                        isSearchOpen={isModalOpen}
                                        currentSearchText={currentSearchText}
                                    />
                                </div>
                                <div id="docsSearchHitsContainer">
                                    <div data-reactroot>
                                        <DocSearchContentWrapper
                                            isSearchOpen={isModalOpen}
                                            onRefineHitsCountChange={setCurrentRefineHitsCount}
                                            currentSearchText={currentSearchText}
                                            currentRefineHitsCount={currentRefineHitsCount}
                                        />
                                    </div>
                                </div>
                            </InstantSearch>
                        </div>
                    </div>
                </div>
        </div>
    )
}
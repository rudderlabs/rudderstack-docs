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
export const SearchBoxModal = ({ closeModal}) => {
    const modalRef = useRef()
    const [isSearchOpen, setSearchOpen] = useState(false)
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
    
    return (
        <div  id="docs-modal" className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
                <div ref={modalRef} className="flex text-center justify-center max-h-max">
                    <div className="relative bg-white rounded-lg text-left overflow-hidden shadow-gray-300 transform transition-all sm:my-8 w-full sm:max-w-lg">
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <InstantSearch
                                searchClient={searchClient}
                                indexName={process.env.GATSBY_ALGOLIA_INDEX_PREFIX + "_gatsby_docs_v2"}
                            >
                                <Configure hitsPerPage={10} />
                                <div className="docsSearchWrapper">
                                    <DocsSearchBox
                                        onRefineTextChange={val => {
                                            setCurrentSearchText(val);
                                        }}
                                        isSearchOpen={isSearchOpen}
                                        currentSearchText={currentSearchText}
                                        setSearchOpen={setSearchOpen}
                                    />
                                </div>
                                <div id="docsSearchHitsContainer">
                                    <div data-reactroot>
                                        <DocSearchContentWrapper
                                            isSearchOpen={isSearchOpen}
                                            onRefineHitsCountChange={setCurrentRefineHitsCount}
                                            currentSearchText={currentSearchText}
                                            setSearchOpen={setSearchOpen}
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
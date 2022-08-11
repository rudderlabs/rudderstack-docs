import React, { useState } from "react"
import { InstantSearch, Configure } from "react-instantsearch-dom"
import algoliasearch from "algoliasearch/lite"
import DocsSearchBox from "./DocsSearchBox"
import DocSearchContentWrapper from "./DocSearchContentWrapper"

const searchClient = algoliasearch(
    process.env.GATSBY_ALGOLIA_APP_ID,
    process.env.GATSBY_ALGOLIA_SEARCH_APIKEY
)

// SearchBox Modal
export const SearchBoxModal = ({ }) => {
    const [isSearchOpen, setSearchOpen] = useState(false)
    const [currentSearchText, setCurrentSearchText] = useState("")
    const [currentRefineHitsCount, setCurrentRefineHitsCount] = useState(0)
    
    return (
        <div id="docs-modal" className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
            <div className="fixed z-10 inset-0 overflow-y-auto">
                <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
                    <div className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
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
        </div>
    )
}
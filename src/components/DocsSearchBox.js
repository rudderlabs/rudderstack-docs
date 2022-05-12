import React, {useEffect} from "react"
import { connectSearchBox } from "react-instantsearch-dom"

// SearchBox Implementation.
const SearchBox = ({
  currentRefinement,
  isSearchStalled,
  refine,
  onRefineTextChange,
  pleaceholderText,
  isSearchOpen,
  setSearchOpen
}) => {

  const innerSearch = React.createRef();

  useEffect(() => {
    isSearchOpen && innerSearch.current.focus();
  })

  return (<>
    <div className="docsSearch">
      <span className="docsSearchIcon">
        <svg
          preserveAspectRatio="xMidYMid meet"
          height="1em"
          width="1em"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="currentColor"
          className="icon-7f6730be--text-3f89f380"
        >
          <g>
            <circle cx="10.5" cy="10.5" r="7.5"></circle>
            <line x1="21" y1="21" x2="15.8" y2="15.8"></line>
          </g>
        </svg>
      </span>
      <input
        type="text"
        autoCapitalize="off"
        autoComplete="off"
        autoCorrect="off"
        placeholder={pleaceholderText ? pleaceholderText : "Search..."}
        role="textbox"
        spellCheck="false"
        value={currentRefinement}
        className="bg-white h-12 pr-5 w-full"
        ref={innerSearch}
        onChange={event => {
          refine(event.currentTarget.value)
          onRefineTextChange(event.currentTarget.value)
        }}
      />
      <span className={`searchTextClearIcon ${currentRefinement !== '' ? 'active' : ''}`} onClick={() => {refine('');onRefineTextChange('')}}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="1.7em" height="1.7em">
          <path d="M216,43.99963H68.5293a12.05811,12.05811,0,0,0-10.28907,5.82715L12.57031,125.942a3.99551,3.99551,0,0,0,0,4.11523l45.669,76.11621a12.05879,12.05879,0,0,0,10.29,5.82617H216a12.01312,12.01312,0,0,0,12-12v-144A12.01312,12.01312,0,0,0,216,43.99963Zm4,156a4.004,4.004,0,0,1-4,4H68.5293a4.017,4.017,0,0,1-3.42871-1.9414h-.001L20.665,127.99963,65.10059,53.942a4.017,4.017,0,0,1,3.42871-1.94239H216a4.004,4.004,0,0,1,4,4Zm-57.17188-93.17187-21.17187,21.17187,21.17187,21.17188a3.99957,3.99957,0,1,1-5.65625,5.65625L136,133.65588l-21.17188,21.17188a3.99957,3.99957,0,0,1-5.65625-5.65625l21.17188-21.17188-21.17188-21.17187a3.99957,3.99957,0,0,1,5.65625-5.65625L136,122.34338l21.17187-21.17187a3.99957,3.99957,0,0,1,5.65625,5.65625Z"/>
        </svg>
      </span>
      <span className="searchToggleIcon" onClick={() => setSearchOpen(false)} role="search">
        <svg preserveAspectRatio="xMidYMid meet" width="1.5em" height="1.5em" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"><g><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></g></svg>
      </span>
    </div>
  </>)
}

const DocsSearchBox = connectSearchBox(SearchBox)

export default DocsSearchBox

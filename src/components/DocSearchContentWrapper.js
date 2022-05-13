import React, {useEffect} from 'react'
import DocsSearchContent from './DocsSearchContent'
import { connectHits } from "react-instantsearch-dom"

const DocSearchHits = ({hits, onRefineHitsCountChange, currentSearchText, setSearchOpen }) => {

    useEffect(() => {
      if (!hits.length) {
        onRefineHitsCountChange(0)
        return <> </>
      } else {
          onRefineHitsCountChange(hits.length)
      }
    }, [onRefineHitsCountChange])
  
    return (
        <div>
            <DocsSearchContent 
              hits={hits}
              currentSearchText={currentSearchText}
              setSearchOpen={setSearchOpen}
            />
        </div>
    )
  }

const DocSearchContentWrapper = connectHits(DocSearchHits)

export default DocSearchContentWrapper;
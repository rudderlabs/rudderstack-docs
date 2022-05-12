import React, { useEffect, useState } from "react"

const ScriptContentBody = props => {
  const [addScript, setAddScript] = useState(
    props.script_content_ie_type.condition === "all_option" ||
      props.script_content_ie_type.condition === "exclude_option"
      ? true
      : false
  )

  useEffect(() => {
    // console.log("addScript", addScript, props.body_script)
  }, [addScript])

  useEffect(() => {
    let tmpAddScript =
      props.script_content_ie_type.condition === "all_option" ||
      props.script_content_ie_type.condition === "exclude_option"
        ? true
        : false

    let pathToIncludeExcludeSliced = []
    let currPathSliced = props.currentSlug.split("/").filter(ll => ll !== "")

    props.script_content_ie_type[`${props.script_content_ie_type.condition}`] &&
      props.script_content_ie_type[
        `${props.script_content_ie_type.condition}`
      ].paths
        .sort()
        .forEach(oo => {
          pathToIncludeExcludeSliced = oo.split("/").filter(ll => ll !== "")

          if (props.script_content_ie_type.condition === "include_option") {
            if (tmpAddScript !== true) {
              if (currPathSliced.length > 0) {
                for (let ii = 0; ii < currPathSliced.length; ii++) {
                  if (
                    pathToIncludeExcludeSliced[ii] === "*" &&
                    pathToIncludeExcludeSliced[ii - 1] ===
                      currPathSliced[ii - 1]
                  ) {
                    tmpAddScript = true
                    break
                  } else if (
                    pathToIncludeExcludeSliced[ii] === currPathSliced[ii] &&
                    ii === pathToIncludeExcludeSliced.length - 1
                  ) {
                    tmpAddScript = true
                  } else if (
                    pathToIncludeExcludeSliced[ii] !== currPathSliced[ii]
                  ) {
                    tmpAddScript = false
                  }
                }
              }
              setAddScript(tmpAddScript)
            }
          } else if (
            props.script_content_ie_type.condition === "exclude_option"
          ) {
            if (tmpAddScript !== false) {
              if (currPathSliced.length > 0) {
                for (let ii = 0; ii < currPathSliced.length; ii++) {
                  if (
                    pathToIncludeExcludeSliced[ii] === "*" &&
                    pathToIncludeExcludeSliced[ii - 1] ===
                      currPathSliced[ii - 1]
                  ) {
                    tmpAddScript = false
                    break
                  } else if (
                    pathToIncludeExcludeSliced[ii] === currPathSliced[ii] &&
                    ii === pathToIncludeExcludeSliced.length - 1
                  ) {
                    tmpAddScript = false
                  } else if (
                    pathToIncludeExcludeSliced[ii] !== currPathSliced[ii]
                  ) {
                    tmpAddScript = true
                  }
                }
              }
              setAddScript(tmpAddScript)
            }
          } else {
            setAddScript(tmpAddScript)
          }
        })
  }, [props.exclude_paths, props.currentSlug])

  let myScript = props.body_script ? props.body_script : ""
  myScript = myScript.replace("<noscript>", "")
  myScript = myScript.replace("</noscript>", "")

  return addScript ? <noscript> {props.body_script}</noscript> : null
}

export default ScriptContentBody

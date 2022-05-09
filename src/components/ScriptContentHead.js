import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const ScriptContentHead = (props) => {
  const [addScript, setAddScript] = useState(false);
  const [delay_load_ms] = useState(
    props.delay_load && props.delay_load > 0 ? props.delay_load : 0
  );

  useEffect(() => {
    setTimeout(() => {
      setAddScript(
        (props.disable ? !props.disable === true : true) &&
          (props.script_content_ie_type.condition === "all_option" ||
            props.script_content_ie_type.condition === "exclude_option")
          ? true
          : false
      );
    }, 0);
  }, []);

  useEffect(() => {}, [addScript]);

  useEffect(() => {
    setTimeout(() => {
      let tmpAddScript =
        props.script_content_ie_type.condition === "all_option" ||
        props.script_content_ie_type.condition === "exclude_option"
          ? true
          : false;

      let pathToIncludeExcludeSliced = [];
      let currPathSliced = props.currentSlug
        .split("/")
        .filter((ll) => ll !== "");

      props.script_content_ie_type[
        `${props.script_content_ie_type.condition}`
      ] &&
        props.script_content_ie_type[
          `${props.script_content_ie_type.condition}`
        ].paths
          .sort()
          .forEach((oo) => {
            pathToIncludeExcludeSliced = oo
              .split("/")
              .filter((ll) => ll !== "");

            if (props.script_content_ie_type.condition === "include_option") {
              if (tmpAddScript !== true) {
                if (currPathSliced.length > 0) {
                  for (let ii = 0; ii < currPathSliced.length; ii++) {
                    if (
                      pathToIncludeExcludeSliced[ii] === "*" &&
                      pathToIncludeExcludeSliced[ii - 1] ===
                        currPathSliced[ii - 1]
                    ) {
                      tmpAddScript = true;
                      break;
                    } else if (
                      pathToIncludeExcludeSliced[ii] === currPathSliced[ii] &&
                      ii === pathToIncludeExcludeSliced.length - 1
                    ) {
                      tmpAddScript = true;
                    } else if (
                      pathToIncludeExcludeSliced[ii] !== currPathSliced[ii]
                    ) {
                      tmpAddScript = false;
                    }
                  }
                }
                setAddScript(props.disable === false ? tmpAddScript : false);
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
                      tmpAddScript = false;
                      break;
                    } else if (
                      pathToIncludeExcludeSliced[ii] === currPathSliced[ii] &&
                      ii === pathToIncludeExcludeSliced.length - 1
                    ) {
                      tmpAddScript = false;
                    } else if (
                      pathToIncludeExcludeSliced[ii] !== currPathSliced[ii]
                    ) {
                      tmpAddScript = true;
                    }
                  }
                }
                setAddScript(props.disable === false ? tmpAddScript : false);
              }
            } else {
              setAddScript(props.disable === false ? tmpAddScript : false);
            }
          });
    }, delay_load_ms);
  }, [props.exclude_paths, props.currentSlug]);

  return addScript ? (
    <Helmet>
      {props.head_scripts &&
        props.head_scripts.map((l_script) => {
          let s_props = {};

          if (l_script.async && l_script.async === true) {
            s_props = { ...s_props, async: "" };
          }
          if (l_script.defer && l_script.defer === true) {
            s_props = { ...s_props, defer: "" };
          }

          if (l_script.charset && l_script.charset !== "") {
            s_props = { ...s_props, charset: l_script.charset };
          }

          if (l_script.src && l_script.src !== "") {
            s_props = { ...s_props, src: l_script.src };
          }

          if (l_script.crossorigin && l_script.crossorigin !== "") {
            s_props = { ...s_props, crossorigin: l_script.crossorigin };
          }

          if (l_script.type && l_script.type !== "") {
            s_props = { ...s_props, type: l_script.type };
          }
          return (
            <script key={l_script._key} {...s_props}>
              {l_script.script_content}
            </script>
          );
        })}
    </Helmet>
  ) : null;
};

export default ScriptContentHead;

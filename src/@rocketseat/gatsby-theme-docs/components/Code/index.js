import React, { useState} from 'react';
import PropTypes from 'prop-types';
import Highlight, { defaultProps } from 'prism-react-renderer';
import rangeParser from 'parse-numeric-range';
import theme from 'prism-react-renderer/themes/dracula';
import { copyToClipboard } from '@rocketseat/gatsby-theme-docs/src/util/copy-to-clipboard';
import {
  CopyCode,
  LineNo,
  Pre,
  PreHeader,
} from './styles';

import Prism from 'prism-react-renderer/prism';
(typeof global !== 'undefined' ? global : window).Prism = Prism;

const additional_languages = [
  'groovy',
  'ruby',
  'kotlin',
  'php',
  'java',
  'dart',
  'json',
  'perl',
  'rust',
  'haml',
  'swift',
  'csharp'
]
additional_languages.forEach(lang => require('prismjs/components/prism-' + lang))

const calculateLinesToHighlight = (meta) => {
  const RE = /{([\d,-]+)}/;

  if (RE.test(meta)) {
    const strlineNumbers = RE.exec(meta)[1];
    const lineNumbers = rangeParser(strlineNumbers);
    return (index) => lineNumbers.includes(index + 1);
  }

  return () => false;
};

export default function CodeHighlight({
  codeString,
  className,
  live,
  highlight,
  title,
  lineNumbers,
}) {
  const [copied, setCopied] = useState(false);
  const language = className && className.replace(/language-/, '');

  const shouldHighlightLine = calculateLinesToHighlight(highlight);

  const handleClick = () => {
    setCopied(true);
    copyToClipboard(codeString);

    setTimeout(() => {
      setCopied(false);
    }, 4000);
  };

  return (
    <>
      {title && <PreHeader>{title}</PreHeader>}
      <div className="gatsby-highlight">
        <Highlight
          {...defaultProps}
          code={codeString}
          language={language}
          theme={theme}
        >
          {({
            className: blockClassName,
            style,
            tokens,
            getLineProps,
            getTokenProps,
          }) => (
            <Pre
              className={blockClassName}
              style={style}
              hasTitle={title}
              hasLanguage={!!language}
            >
              <CopyCode
                onClick={handleClick}
                disabled={copied}
                hasTitle={title}
              >
                {copied ? 'Copied!' : 'Copy'}
              </CopyCode>
              <code>
                {tokens.map((line, index) => {
                  const lineProps = getLineProps({ line, key: index });

                  if (shouldHighlightLine(index)) {
                    lineProps.className = `${lineProps.className} highlight-line`;
                  }

                  return (
                    <div {...lineProps}>
                      {lineNumbers && <LineNo>{index + 1}</LineNo>}
                      {line.map((token, key) => (
                        <span {...getTokenProps({ token, key })} />
                      ))}
                    </div>
                  );
                })}
              </code>
            </Pre>
          )}
        </Highlight>
      </div>
    </>
  );
}

CodeHighlight.propTypes = {
  codeString: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  highlight: PropTypes.string,
  live: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  title: PropTypes.string,
  lineNumbers: PropTypes.string,
  language: PropTypes.string
};

CodeHighlight.defaultProps = {
  live: false,
  title: null,
  lineNumbers: null,
  highlight: null,
};

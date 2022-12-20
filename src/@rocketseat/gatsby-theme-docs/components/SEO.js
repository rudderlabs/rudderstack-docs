import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import urljoin from "url-join";
import { useStaticQuery, graphql } from "gatsby";

export default function SEO({ description, title, slug, image, children }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            defaultTitle
            siteTitleShort
            siteTitle
            siteImage
            siteDescription
            siteLanguage
            siteUrl
            siteAuthor
          }
        }
      }
    `
  );

  const {
    siteTitle,
    siteTitleShort,
    siteUrl,
    siteImage,
    siteLanguage,
    siteAuthor,
    siteIcon
  } = site.siteMetadata;

  //const metaTitle = title ? `${title} - ${siteTitle}` : defaultTitle
  // const metaDescription = description || siteDescription
  const metaTitle =
    title !== "Home"
      ? `${title} | RudderStack Docs `
      : "RudderStack Technical Documentation and Guides | RudderStack Docs";
  const metaDescription =
    title !== "Home"
      ? `Read detailed technical documentation on ${title} in RudderStack Docs.`
      : "Check out our technical documentation and learn how to use RudderStack features, SDKs, and destination and source integrations.";
  const metaUrl = urljoin(`${siteUrl}/docs/`, slug);
  const metaImage = urljoin(`${siteUrl}/docs/`, 'https://www.rudderstack.com/images/rudderstack_thumbnail.png');

  const schemaOrgJSONLD = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "RudderStack",
      url: "https://www.rudderstack.com/"
    },
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: "About RudderStack | Rudderstack.com",
      url: "https://www.rudderstack.com/about/",
      mainContentOfPage:
        "RudderStack Built for Engineers & Data Scientists We have been data engineers and data scientists in our past jobs, understand their challenges and pain points, and are building the best product for them."
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      url: "https://www.rudderstack.com/",
      name: "RudderStack",
      description:
        "RudderStack is the easiest way to stream data from your website or warehouse. With RudderStack, you can easily collect customer data from every platform.",
      sameAs: [
        "https://twitter.com/RudderStack",
        "https://www.linkedin.com/company/rudderstack/",
        "https://www.youtube.com/channel/UCgV-B77bV_-LOmKYHw8jvBw"
      ],
      logo: [
        {
          "@type": "ImageObject",
          url:
            "https://cdn.sanity.io/images/97bpcflt/production/dc6a0b7ddbd8dec31dfd07a80f178e1e288c047d-148x16.png",
          height: "16",
          width: "148",
          accessibilityHazard: ["noFlashingHazard", "noMotionSimulationHazard"],
          accessMode: ["textual", "visual"]
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      url: metaUrl,
      name: title,
      description
    }
  ];
  return (
    <Helmet
      htmlAttributes={{
        lang: siteLanguage
      }}
      title={metaTitle}
    >
      {siteIcon && <link rel="icon" href={siteIcon} />}
      <meta name="title" content={metaTitle} />
      <meta name="description" content={metaDescription} />
      <meta name="image" content={metaImage} />

      <meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1" />
      <meta name="MobileOptimized" content="320" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="google" content="notranslate" />
      <meta name="referrer" content="no-referrer-when-downgrade" />

      <meta property="og:url" content={metaUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:locale" content={siteLanguage} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:image:secure_url" content={metaImage} />
      <meta property="og:image:alt" content="Banner" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:site" content={siteAuthor} />
      <meta name="twitter:creator" content={siteAuthor} />
      <meta name="twitter:image" content={metaImage} />
      <meta name="twitter:image:src" content={metaImage} />
      <meta name="twitter:image:alt" content="Banner" />
      <meta name="twitter:image:width" content="1200" />
      <meta name="twitter:image:height" content="630" />

      {schemaOrgJSONLD.map((item) => (
        <script type="application/ld+json">{JSON.stringify(item)}</script>
      ))}

      {children}
    </Helmet>
  );
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  slug: PropTypes.string,
  image: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.node
  ])
};

SEO.defaultProps = {
  title: "",
  description: "",
  slug: "",
  image: "",
  children: ""
};

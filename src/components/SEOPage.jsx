import { useSEOInfo } from "../seo/useSeoInfo";
import { Helmet } from "react-helmet";

export default function SEOPage({ title }) {
  const getSEOInfo = useSEOInfo();
  const url = window.location.href;

  return (
    <>
      <Helmet>
        <title>{title}</title>

        {/* meta tags */}
        <meta charSet="utf-8" />
        <meta name="description" content={getSEOInfo?.description} />
        <meta name="keywords" content={getSEOInfo?.keywords} />
        <meta name="author" content={getSEOInfo?.schoolInfo?.name_en} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href={url} />

        {/* open graph for google */}
        <meta property="og:title" content={`Google — ${getSEOInfo?.name_en}`} />
        <meta property="og:url" content="https://google.com" />
        <meta property="og:site_name" content="Google" />
        <meta property="og:image" content={getSEOInfo?.schoolInfo?.school_information?.school_picture} />
        <meta property="og:type" content="website" />
        <meta property="og:description"
          content={getSEOInfo?.googleSEO?.description}
        />

        {/* open graph for facebook */}
        <meta property="og:title" content={`Facebook — ${getSEOInfo?.name_en}`} />
        <meta property="og:url" content={getSEOInfo?.facebookSEO?.link} />
        <meta property="og:site_name" content="Facebook" />
        <meta property="og:image" content={getSEOInfo?.schoolInfo?.school_information?.school_picture} />
        <meta property="og:type" content="website" />
        <meta property="og:description"
          content={getSEOInfo?.facebookSEO?.description}
        />
      </Helmet>
    </>
  );
}

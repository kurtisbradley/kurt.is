import NextHead from 'next/head';

const Head = ({
  title = 'kurt.is',
  description = 'Full Stack Developer',
  image = 'https://kurt.is/og.png',
  children,
}) => {
  return (
    <NextHead>
      {/* Title */}
      <title>{title}</title>
      <meta name="og:title" content={title} />

      {/* Description */}
      <meta name="description" content={description} />
      <meta name="og:description" content={description} />

      {/* Image */}
      <meta name="twitter:image" content={image} />
      <meta name="og:image" content={image} />

      {/* URL */}
      <meta name="og:url" content="https://kurt.is/" />

      {/* General */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
      <meta name="theme-color" content="#0f0f0f" />

      {/* Favicons */}
      <link rel="icon" href="./favicon-32.png" sizes="32x32" />
      <link rel="icon" href="./favicon-128.png" sizes="128x128" />
      <link rel="icon" href="./favicon-192.png" sizes="192x192" />
      <link rel="apple-touch-icon" href="./favicon-180.png" sizes="180x180" />
      <link rel="manifest" href="./manifest.webmanifest" />
      
      {/* Search */}
      <meta name="robots" content="noindex, nofollow" />
      <link rel="canonical" href="https://kurt.is/" />

      {children}
    </NextHead>
  );
};

export default Head;

import Head from 'next/head'

interface Props {
  title?: string
  description?: string
}

// todo tags
// https://htmlhead.dev/
const Header = ({
  title = 'JBethuel - Software Engineer',
  description = 'JBethuel - Software Engineer'
}: Props) => (
  <Head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content={description} />

    {/* facebook */}
    <meta property="fb:app_id" content="123456789" />
    <meta property="og:url" content="https://example.com/page.html" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Content Title" />
    <meta property="og:image" content="https://example.com/image.jpg" />
    <meta
      property="og:image:alt"
      content="A description of what is in the image (not a caption)"
    />
    <meta property="og:description" content="Description Here" />
    <meta property="og:site_name" content="Site Name" />
    <meta property="og:locale" content="en_US" />
    <meta property="article:author" content="" />

    {/* twitter */}
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content="@site_account" />
    <meta name="twitter:creator" content="@individual_account" />
    <meta name="twitter:url" content="https://example.com/page.html" />
    <meta name="twitter:title" content="Content Title" />
    <meta
      name="twitter:description"
      content="Content description less than 200 characters"
    />
    <meta name="twitter:image" content="https://example.com/image.jpg" />
    <meta
      name="twitter:image:alt"
      content="A text description of the image conveying the essential nature of an image to users who are visually impaired. Maximum 420 characters."
    />

    <title>{title}</title>
  </Head>
)

export default Header
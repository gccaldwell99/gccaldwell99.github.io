import cn from 'classnames'
import Link from 'next/link'

type Props = {
  title: string
  src: string
  slug?: string
  altLink?: string
}

const CoverImage = ({ title, src, slug, altLink }: Props) => {
  const image = (
    <img
      src={src}
      alt={`Cover Image for ${title}`}
      width={300}
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
    />
  )
  let href = altLink ? altLink : `/posts/[slug]`;
  let as = altLink ? altLink : `/posts/${slug}`;
  return (
    <div>
      {slug ? (
        <Link as={`${as}`} href={`${href}`}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}

export default CoverImage

import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const PostTitle = ({ children }: Props) => {
  return (
    <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight md:leading-none mb-6 text-center md:text-left">
      {children}
    </h3>
  )
}

export default PostTitle

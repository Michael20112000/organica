'use client'

import type { FC } from 'react'
import {
  BlocksRenderer as StrapiBlocksRenderer,
  type BlocksContent,
} from '@strapi/blocks-react-renderer'

interface BlocksRendererProps {
  content: unknown[]
  className?: string
}

export const BlocksRenderer: FC<BlocksRendererProps> = props => {
  return (
    <StrapiBlocksRenderer
      content={props.content as BlocksContent}
      blocks={{
        heading: ({ children }) => (
          <h1 className={props.className}>{children}</h1>
        ),
      }}
      modifiers={{
        italic: ({ children }) => <em>{children}</em>,
      }}
    />
  )
}

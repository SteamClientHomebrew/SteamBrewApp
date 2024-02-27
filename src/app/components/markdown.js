"use client"

import {unified} from 'unified'

import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'

export async function markdownToHtml(markdown) {

    const result = await unified()
    .use(remarkParse)
    .use(remarkRehype, {allowDangerousHtml: true})
    .use(rehypeStringify, {allowDangerousHtml: true})
        .process(markdown)

    return String(result);
}
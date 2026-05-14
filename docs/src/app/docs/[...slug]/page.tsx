import {source} from "@/lib/source"
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
  PageLastUpdate,
} from "fumadocs-ui/layouts/docs/page"
import {createRelativeLink} from "fumadocs-ui/mdx"
import {getMDXComponents} from "@/lib/mdx-components"
import type {Metadata} from "next"
import {baseUrl} from "@/lib/metadata"

interface PageProps {
  params: Promise<{slug: string[]}>
}

export default async function Page(props: PageProps) {
  const params = await props.params
  const page = source.getPage(params.slug)

  if (!page) {
    return null
  }

  const {body: MDX, lastModified} = page.data

  return (
    <DocsPage
      toc={page.data.toc}
      full={page.data.full}
      tableOfContent={{
        style: "clerk",
      }}
    >
      <DocsTitle>{page.data.title}</DocsTitle>
      {page.data.description ? (
        <DocsDescription className="mb-2">{page.data.description}</DocsDescription>
      ) : null}
      <DocsBody>
        <MDX
          components={getMDXComponents({
            a: createRelativeLink(source, page),
          })}
        />
      </DocsBody>
      {lastModified ? (
        <div className="mt-4 border-t pt-4">
          <PageLastUpdate date={lastModified} />
        </div>
      ) : null}
    </DocsPage>
  )
}

export async function generateStaticParams() {
  return source.generateParams()
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params
  const page = source.getPage(params.slug)

  if (!page) {
    return {
      title: "Not Found",
      metadataBase: new URL(baseUrl),
    }
  }

  return {
    title: page.data.title,
    description: page.data.description,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: page.url,
    },
  }
}

import { GetStaticProps } from 'next'

import Layout from '../../components/Layout'
import BasicMeta from '../../components/meta/BasicMeta'
import OpenGraphMeta from '../../components/meta/OpenGraphMeta'
import TwitterCardMeta from '../../components/meta/TwitterCardMeta'
import ExhibitionList from '../../components/ExhibitionList'

import config from '../../lib/config'
import {
  countExhibitions,
  listExhibitionContent,
  ExhibitionContent,
} from '../../lib/exhibitions'

type Props = {
  exhibitions: ExhibitionContent[]
  pagination: {
    current: number
    pages: number
  }
}

export default function ExhibitionsPage({ exhibitions, pagination }: Props) {
  const url = '/exhibitions'
  const title = 'All exhibitions'

  return (
    <Layout>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <TwitterCardMeta url={url} title={title} />
      <ExhibitionList exhibitions={exhibitions} pagination={pagination} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const exhibitions = listExhibitionContent(1, config.exhibitions_per_page)
  const pagination = {
    current: 1,
    pages: Math.ceil(countExhibitions() / config.exhibitions_per_page),
  }
  return {
    props: {
      exhibitions,
      pagination,
    },
  }
}

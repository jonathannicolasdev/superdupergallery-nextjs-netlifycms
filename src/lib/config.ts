import config from '../../config.json'

type Config = {
  readonly base_url: string
  readonly site_title: string
  readonly site_description: string
  readonly site_keywords: { keyword: string }[]
  readonly exhibitions_per_page: number
  readonly artworks_per_page: number
  readonly artists_per_page: number
  readonly posts_per_page: number
  readonly twitter_account: string
  readonly github_account: string
}

export default config as Config

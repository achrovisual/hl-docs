import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from 'vuepress-theme-succinct'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme(),
})
import './App.scss'
import React from 'react'
import type { AppProps } from 'next/app'
import {
  AnimatePresence,
  domAnimation, LazyMotion,
  m
} from 'framer-motion'

import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import Head from 'next/head'

export default function MyApp ({ Component, pageProps, router }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false
      }
    }
  }))
  const fade = {
    name: 'Fade',
    variants: {
      initial: {
        opacity: 0,
        scale: 0.95
      },
      animate: {
        opacity: 1,
        scale: 1
      },
      exit: {
        opacity: 0,
        scale: 0.95
      }
    },
    transition: {
      duration: 0.15,
      easing: 'ease'
    }
  }
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <div className='app-wrap'>
          <Head>
            <title>Trends Near You</title>
          </Head>
          <LazyMotion features={domAnimation}>
            <AnimatePresence exitBeforeEnter>
              <m.div
                key={router.route.concat(fade.name)}
                className='page-wrap'
                initial='initial'
                animate='animate'
                exit='exit'
                variants={fade.variants}
                transition={fade.transition}
              >
                <Component {...pageProps} />
              </m.div>
            </AnimatePresence>
          </LazyMotion>
        </div>
      </Hydrate>
    </QueryClientProvider>
  )
}

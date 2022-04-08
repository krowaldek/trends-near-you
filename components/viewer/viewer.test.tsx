import { render, screen } from '@testing-library/react'
import React from 'react'
import { MediaEntityV1 } from 'twitter-api-v2'
import { it, expect } from 'vitest'
import Viewer from '.'

const data = () => {
  const media = [
    {
      id: 1511433229240344600,
      id_str: '1511433229240344578',
      indices: [
        117,
        140
      ],
      media_url: 'http://pbs.twimg.com/media/FPmwg5qXoAIuuvw.jpg',
      media_url_https: 'https://pbs.twimg.com/media/FPmwg5qXoAIuuvw.jpg',
      url: 'https://t.co/45HEttTYoU',
      display_url: 'pic.twitter.com/45HEttTYoU',
      expanded_url: 'https://twitter.com/laligafrauds/status/1511433247405719552/photo/1',
      type: 'photo',
      sizes: {
        thumb: {
          w: 150,
          h: 150,
          resize: 'crop'
        },
        medium: {
          w: 1024,
          h: 615,
          resize: 'fit'
        },
        large: {
          w: 1024,
          h: 615,
          resize: 'fit'
        },
        small: {
          w: 680,
          h: 408,
          resize: 'fit'
        }
      }
    },
    {
      id: 1511433232906137600,
      id_str: '1511433232906137605',
      indices: [
        117,
        140
      ],
      media_url: 'http://pbs.twimg.com/media/FPmwhHUXMAUBHbd.jpg',
      media_url_https: 'https://pbs.twimg.com/media/FPmwhHUXMAUBHbd.jpg',
      url: 'https://t.co/45HEttTYoU',
      display_url: 'pic.twitter.com/45HEttTYoU',
      expanded_url: 'https://twitter.com/laligafrauds/status/1511433247405719552/photo/1',
      type: 'photo',
      sizes: {
        thumb: {
          w: 150,
          h: 150,
          resize: 'crop'
        },
        small: {
          w: 680,
          h: 383,
          resize: 'fit'
        },
        medium: {
          w: 1200,
          h: 675,
          resize: 'fit'
        },
        large: {
          w: 1200,
          h: 675,
          resize: 'fit'
        }
      }
    },
    {
      id: 1511433236978798600,
      id_str: '1511433236978798604',
      indices: [
        117,
        140
      ],
      media_url: 'http://pbs.twimg.com/media/FPmwhWfXEAwQUGh.jpg',
      media_url_https: 'https://pbs.twimg.com/media/FPmwhWfXEAwQUGh.jpg',
      url: 'https://t.co/45HEttTYoU',
      display_url: 'pic.twitter.com/45HEttTYoU',
      expanded_url: 'https://twitter.com/laligafrauds/status/1511433247405719552/photo/1',
      type: 'photo',
      sizes: {
        large: {
          w: 1920,
          h: 1080,
          resize: 'fit'
        },
        thumb: {
          w: 150,
          h: 150,
          resize: 'crop'
        },
        medium: {
          w: 1200,
          h: 675,
          resize: 'fit'
        },
        small: {
          w: 680,
          h: 383,
          resize: 'fit'
        }
      }
    },
    {
      id: 1511433243916124200,
      id_str: '1511433243916124176',
      indices: [
        117,
        140
      ],
      media_url: 'http://pbs.twimg.com/media/FPmwhwVWQBAdI2T.jpg',
      media_url_https: 'https://pbs.twimg.com/media/FPmwhwVWQBAdI2T.jpg',
      url: 'https://t.co/45HEttTYoU',
      display_url: 'pic.twitter.com/45HEttTYoU',
      expanded_url: 'https://twitter.com/laligafrauds/status/1511433247405719552/photo/1',
      type: 'photo',
      sizes: {
        small: {
          w: 680,
          h: 453,
          resize: 'fit'
        },
        thumb: {
          w: 150,
          h: 150,
          resize: 'crop'
        },
        large: {
          w: 2048,
          h: 1365,
          resize: 'fit'
        },
        medium: {
          w: 1200,
          h: 800,
          resize: 'fit'
        }
      }
    }
  ] as unknown as MediaEntityV1[]

  return media
}

it('should show list of tweets ', async () => {
  const media = data()
  render(<Viewer media={media} isShow />)
  expect(screen.getAllByTestId('media')).toHaveLength(media.length)
})

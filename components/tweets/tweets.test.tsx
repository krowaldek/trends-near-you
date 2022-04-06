import { render, screen } from '@testing-library/react'
import React from 'react'
import { TweetV1 } from 'twitter-api-v2'
import { it, expect } from 'vitest'
import Tweets from '.'

const data = () => {
  const tweets = [
    {
      created_at: 'Wed Apr 06 08:54:36 +0000 2022',
      id: 1511628428126179300,
      id_str: '1511628428126179332',
      text: 'RT @DropeRelikia: Estão falando que ficamos 10 anos sem ganhar um titulo, vale lembrar que a primeira liga é titulo sim, tinha atlético pr,…',
      truncated: false,
      entities: {
        hashtags: [],
        symbols: [],
        user_mentions: [
          {
            screen_name: 'DropeRelikia',
            name: 'Pedro Brito',
            id: 197064534,
            id_str: '197064534',
            indices: [
              3,
              16
            ]
          }
        ],
        urls: []
      },
      metadata: {
        iso_language_code: 'pt',
        result_type: 'recent'
      },
      source: '<a href="https://mobile.twitter.com" rel="nofollow">Twitter Web App</a>',
      in_reply_to_status_id: null,
      in_reply_to_status_id_str: null,
      in_reply_to_user_id: null,
      in_reply_to_user_id_str: null,
      in_reply_to_screen_name: null,
      user: {
        id: 200890430,
        id_str: '200890430',
        name: 'Bruno Gualberto',
        screen_name: 'fluzaobruninho',
        location: 'Rio de Janeiro - Brasil',
        description: 'Sou tricolor de coração Fluzão pra sempre!!!',
        url: null,
        entities: {
          description: {
            urls: []
          }
        },
        protected: false,
        followers_count: 126,
        friends_count: 152,
        listed_count: 0,
        created_at: 'Sun Oct 10 15:15:03 +0000 2010',
        favourites_count: 14126,
        utc_offset: null,
        time_zone: null,
        geo_enabled: true,
        verified: false,
        statuses_count: 14018,
        lang: null,
        contributors_enabled: false,
        is_translator: false,
        is_translation_enabled: false,
        profile_background_color: '1AD636',
        profile_background_image_url: 'http://abs.twimg.com/images/themes/theme1/bg.png',
        profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme1/bg.png',
        profile_background_tile: true,
        profile_image_url: 'http://pbs.twimg.com/profile_images/883363739726204928/cQ3DVTsR_normal.jpg',
        profile_image_url_https: 'https://pbs.twimg.com/profile_images/883363739726204928/cQ3DVTsR_normal.jpg',
        profile_banner_url: 'https://pbs.twimg.com/profile_banners/200890430/1460512264',
        profile_link_color: 'C21135',
        profile_sidebar_border_color: 'F00827',
        profile_sidebar_fill_color: '09EB36',
        profile_text_color: 'EB1539',
        profile_use_background_image: true,
        has_extended_profile: false,
        default_profile: false,
        default_profile_image: false,
        following: null,
        follow_request_sent: null,
        notifications: null,
        translator_type: 'none',
        withheld_in_countries: []
      },
      geo: null,
      coordinates: null,
      place: null,
      contributors: null,
      retweeted_status: {
        created_at: 'Tue Apr 05 13:13:31 +0000 2022',
        id: 1511331196281753600,
        id_str: '1511331196281753602',
        text: 'Estão falando que ficamos 10 anos sem ganhar um titulo, vale lembrar que a primeira liga é titulo sim, tinha atléti… https://t.co/Ur5kv997OW',
        truncated: true,
        entities: {
          hashtags: [],
          symbols: [],
          user_mentions: [],
          urls: [
            {
              url: 'https://t.co/Ur5kv997OW',
              expanded_url: 'https://twitter.com/i/web/status/1511331196281753602',
              display_url: 'twitter.com/i/web/status/1…',
              indices: [
                117,
                140
              ]
            }
          ]
        },
        metadata: {
          iso_language_code: 'pt',
          result_type: 'recent'
        },
        source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
        in_reply_to_status_id: null,
        in_reply_to_status_id_str: null,
        in_reply_to_user_id: null,
        in_reply_to_user_id_str: null,
        in_reply_to_screen_name: null,
        user: {
          id: 197064534,
          id_str: '197064534',
          name: 'Pedro Brito',
          screen_name: 'DropeRelikia',
          location: 'Rio de Janeiro, Penha',
          description: 'Carioca, suburbano, tricolor de coração, jogador de poker amador e Pai da Alice!',
          url: null,
          entities: {
            description: {
              urls: []
            }
          },
          protected: false,
          followers_count: 358,
          friends_count: 1271,
          listed_count: 1,
          created_at: 'Thu Sep 30 15:29:27 +0000 2010',
          favourites_count: 33380,
          utc_offset: null,
          time_zone: null,
          geo_enabled: false,
          verified: false,
          statuses_count: 9671,
          lang: null,
          contributors_enabled: false,
          is_translator: false,
          is_translation_enabled: false,
          profile_background_color: 'C0DEED',
          profile_background_image_url: 'http://abs.twimg.com/images/themes/theme1/bg.png',
          profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme1/bg.png',
          profile_background_tile: false,
          profile_image_url: 'http://pbs.twimg.com/profile_images/1487780297227882499/3Kg3hAdT_normal.jpg',
          profile_image_url_https: 'https://pbs.twimg.com/profile_images/1487780297227882499/3Kg3hAdT_normal.jpg',
          profile_banner_url: 'https://pbs.twimg.com/profile_banners/197064534/1439835766',
          profile_link_color: '1DA1F2',
          profile_sidebar_border_color: 'C0DEED',
          profile_sidebar_fill_color: 'DDEEF6',
          profile_text_color: '333333',
          profile_use_background_image: true,
          has_extended_profile: true,
          default_profile: true,
          default_profile_image: false,
          following: null,
          follow_request_sent: null,
          notifications: null,
          translator_type: 'none',
          withheld_in_countries: []
        },
        geo: null,
        coordinates: null,
        place: null,
        contributors: null,
        is_quote_status: false,
        retweet_count: 27,
        favorite_count: 260,
        favorited: false,
        retweeted: false,
        possibly_sensitive: false,
        lang: 'pt'
      },
      is_quote_status: false,
      retweet_count: 27,
      favorite_count: 0,
      favorited: false,
      retweeted: false,
      lang: 'pt'
    },
    {
      created_at: 'Wed Apr 06 08:54:35 +0000 2022',
      id: 1511628421926953000,
      id_str: '1511628421926952965',
      text: "RT @ActuFoot_: Guardiola sur le jeu plus que défensif de l’Atlético hier :\n\n« On sentait qu'ils allaient jouer en 5-3-2, puis ils se sont a…",
      truncated: false,
      entities: {
        hashtags: [],
        symbols: [],
        user_mentions: [
          {
            screen_name: 'ActuFoot_',
            name: 'Actu Foot',
            id: 771606164,
            id_str: '771606164',
            indices: [
              3,
              13
            ]
          }
        ],
        urls: []
      },
      metadata: {
        iso_language_code: 'fr',
        result_type: 'recent'
      },
      source: '<a href="http://twitter.com/download/iphone" rel="nofollow">Twitter for iPhone</a>',
      in_reply_to_status_id: null,
      in_reply_to_status_id_str: null,
      in_reply_to_user_id: null,
      in_reply_to_user_id_str: null,
      in_reply_to_screen_name: null,
      user: {
        id: 801821363367514100,
        id_str: '801821363367514112',
        name: 'Ayoub 🇹🇳🇵🇸',
        screen_name: 'Ayoubjbr76',
        location: 'Rouen, France',
        description: '@om_officiel 🇵🇸🇹🇳',
        url: null,
        entities: {
          description: {
            urls: []
          }
        },
        protected: false,
        followers_count: 1178,
        friends_count: 1810,
        listed_count: 4,
        created_at: 'Thu Nov 24 16:14:44 +0000 2016',
        favourites_count: 102813,
        utc_offset: null,
        time_zone: null,
        geo_enabled: true,
        verified: false,
        statuses_count: 138918,
        lang: null,
        contributors_enabled: false,
        is_translator: false,
        is_translation_enabled: false,
        profile_background_color: 'F5F8FA',
        profile_background_image_url: null,
        profile_background_image_url_https: null,
        profile_background_tile: false,
        profile_image_url: 'http://pbs.twimg.com/profile_images/1507439837779009536/J5Pfdlm-_normal.jpg',
        profile_image_url_https: 'https://pbs.twimg.com/profile_images/1507439837779009536/J5Pfdlm-_normal.jpg',
        profile_banner_url: 'https://pbs.twimg.com/profile_banners/801821363367514112/1644520402',
        profile_link_color: '1DA1F2',
        profile_sidebar_border_color: 'C0DEED',
        profile_sidebar_fill_color: 'DDEEF6',
        profile_text_color: '333333',
        profile_use_background_image: true,
        has_extended_profile: true,
        default_profile: true,
        default_profile_image: false,
        following: null,
        follow_request_sent: null,
        notifications: null,
        translator_type: 'none',
        withheld_in_countries: []
      },
      geo: null,
      coordinates: null,
      place: null,
      contributors: null,
      retweeted_status: {
        created_at: 'Wed Apr 06 08:49:47 +0000 2022',
        id: 1511627214722322400,
        id_str: '1511627214722322432',
        text: "Guardiola sur le jeu plus que défensif de l’Atlético hier :\n\n« On sentait qu'ils allaient jouer en 5-3-2, puis ils… https://t.co/8c122sgmQM",
        truncated: true,
        entities: {
          hashtags: [],
          symbols: [],
          user_mentions: [],
          urls: [
            {
              url: 'https://t.co/8c122sgmQM',
              expanded_url: 'https://twitter.com/i/web/status/1511627214722322432',
              display_url: 'twitter.com/i/web/status/1…',
              indices: [
                116,
                139
              ]
            }
          ]
        },
        metadata: {
          iso_language_code: 'fr',
          result_type: 'recent'
        },
        source: '<a href="http://itunes.apple.com/us/app/twitter/id409789998?mt=12" rel="nofollow">Twitter for Mac</a>',
        in_reply_to_status_id: null,
        in_reply_to_status_id_str: null,
        in_reply_to_user_id: null,
        in_reply_to_user_id_str: null,
        in_reply_to_screen_name: null,
        user: {
          id: 771606164,
          id_str: '771606164',
          name: 'Actu Foot',
          screen_name: 'ActuFoot_',
          location: '',
          description: "Suivez toute l'actu foot en temps réel sur @actufoot_ • 🔔 Pensez à activer les notifications pour ne manquer aucune alerte 🚨 • actufoot_@outlook.com",
          url: 'https://t.co/76uF37USv5',
          entities: {
            url: {
              urls: [
                {
                  url: 'https://t.co/76uF37USv5',
                  expanded_url: 'http://instagram.com/actufoot_',
                  display_url: 'instagram.com/actufoot_',
                  indices: [
                    0,
                    23
                  ]
                }
              ]
            },
            description: {
              urls: []
            }
          },
          protected: false,
          followers_count: 4214650,
          friends_count: 89,
          listed_count: 2178,
          created_at: 'Tue Aug 21 14:25:25 +0000 2012',
          favourites_count: 709,
          utc_offset: null,
          time_zone: null,
          geo_enabled: true,
          verified: false,
          statuses_count: 137244,
          lang: null,
          contributors_enabled: false,
          is_translator: false,
          is_translation_enabled: false,
          profile_background_color: '0D58DB',
          profile_background_image_url: 'http://abs.twimg.com/images/themes/theme1/bg.png',
          profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme1/bg.png',
          profile_background_tile: true,
          profile_image_url: 'http://pbs.twimg.com/profile_images/1354929730038935555/TcEU7mqm_normal.jpg',
          profile_image_url_https: 'https://pbs.twimg.com/profile_images/1354929730038935555/TcEU7mqm_normal.jpg',
          profile_banner_url: 'https://pbs.twimg.com/profile_banners/771606164/1649063237',
          profile_link_color: '1900A8',
          profile_sidebar_border_color: 'FFFFFF',
          profile_sidebar_fill_color: 'DDEEF6',
          profile_text_color: '333333',
          profile_use_background_image: true,
          has_extended_profile: false,
          default_profile: false,
          default_profile_image: false,
          following: null,
          follow_request_sent: null,
          notifications: null,
          translator_type: 'regular',
          withheld_in_countries: []
        },
        geo: null,
        coordinates: null,
        place: null,
        contributors: null,
        is_quote_status: false,
        retweet_count: 56,
        favorite_count: 542,
        favorited: false,
        retweeted: false,
        possibly_sensitive: false,
        lang: 'fr'
      },
      is_quote_status: false,
      retweet_count: 56,
      favorite_count: 0,
      favorited: false,
      retweeted: false,
      lang: 'fr'
    },
    {
      created_at: 'Wed Apr 06 08:54:34 +0000 2022',
      id: 1511628418252746800,
      id_str: '1511628418252746755',
      text: 'RT @SaddickAdams: Atletico Madrid play football like they trained for rugby',
      truncated: false,
      entities: {
        hashtags: [],
        symbols: [],
        user_mentions: [
          {
            screen_name: 'SaddickAdams',
            name: 'Saddick Adams',
            id: 4033989881,
            id_str: '4033989881',
            indices: [
              3,
              16
            ]
          }
        ],
        urls: []
      },
      metadata: {
        iso_language_code: 'en',
        result_type: 'recent'
      },
      source: '<a href="http://twitter.com/download/iphone" rel="nofollow">Twitter for iPhone</a>',
      in_reply_to_status_id: null,
      in_reply_to_status_id_str: null,
      in_reply_to_user_id: null,
      in_reply_to_user_id_str: null,
      in_reply_to_screen_name: null,
      user: {
        id: 1502306625809490000,
        id_str: '1502306625809489927',
        name: 'Płãybøÿ🇬🇭',
        screen_name: 'udozy001',
        location: '',
        description: 'Cityzen. 30BG',
        url: null,
        entities: {
          description: {
            urls: []
          }
        },
        protected: false,
        followers_count: 92,
        friends_count: 357,
        listed_count: 0,
        created_at: 'Fri Mar 11 15:33:21 +0000 2022',
        favourites_count: 2201,
        utc_offset: null,
        time_zone: null,
        geo_enabled: false,
        verified: false,
        statuses_count: 3392,
        lang: null,
        contributors_enabled: false,
        is_translator: false,
        is_translation_enabled: false,
        profile_background_color: 'F5F8FA',
        profile_background_image_url: null,
        profile_background_image_url_https: null,
        profile_background_tile: false,
        profile_image_url: 'http://pbs.twimg.com/profile_images/1502609477782147076/wT_BoIl4_normal.jpg',
        profile_image_url_https: 'https://pbs.twimg.com/profile_images/1502609477782147076/wT_BoIl4_normal.jpg',
        profile_link_color: '1DA1F2',
        profile_sidebar_border_color: 'C0DEED',
        profile_sidebar_fill_color: 'DDEEF6',
        profile_text_color: '333333',
        profile_use_background_image: true,
        has_extended_profile: true,
        default_profile: true,
        default_profile_image: false,
        following: null,
        follow_request_sent: null,
        notifications: null,
        translator_type: 'none',
        withheld_in_countries: []
      },
      geo: null,
      coordinates: null,
      place: null,
      contributors: null,
      retweeted_status: {
        created_at: 'Tue Apr 05 20:10:47 +0000 2022',
        id: 1511436207959462000,
        id_str: '1511436207959461892',
        text: 'Atletico Madrid play football like they trained for rugby',
        truncated: false,
        entities: {
          hashtags: [],
          symbols: [],
          user_mentions: [],
          urls: []
        },
        metadata: {
          iso_language_code: 'en',
          result_type: 'recent'
        },
        source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
        in_reply_to_status_id: null,
        in_reply_to_status_id_str: null,
        in_reply_to_user_id: null,
        in_reply_to_user_id_str: null,
        in_reply_to_screen_name: null,
        user: {
          id: 4033989881,
          id_str: '4033989881',
          name: 'Saddick Adams',
          screen_name: 'SaddickAdams',
          location: 'Accra, Ghana',
          description: 'Award-winning Sports Journalist \n\n| African Football |',
          url: null,
          entities: {
            description: {
              urls: []
            }
          },
          protected: false,
          followers_count: 478656,
          friends_count: 445,
          listed_count: 171,
          created_at: 'Sat Oct 24 20:25:14 +0000 2015',
          favourites_count: 2562,
          utc_offset: null,
          time_zone: null,
          geo_enabled: true,
          verified: true,
          statuses_count: 35969,
          lang: null,
          contributors_enabled: false,
          is_translator: false,
          is_translation_enabled: false,
          profile_background_color: 'C0DEED',
          profile_background_image_url: 'http://abs.twimg.com/images/themes/theme1/bg.png',
          profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme1/bg.png',
          profile_background_tile: false,
          profile_image_url: 'http://pbs.twimg.com/profile_images/1477867655180824576/AUpcpwoS_normal.jpg',
          profile_image_url_https: 'https://pbs.twimg.com/profile_images/1477867655180824576/AUpcpwoS_normal.jpg',
          profile_banner_url: 'https://pbs.twimg.com/profile_banners/4033989881/1619515881',
          profile_link_color: '1DA1F2',
          profile_sidebar_border_color: 'C0DEED',
          profile_sidebar_fill_color: 'DDEEF6',
          profile_text_color: '333333',
          profile_use_background_image: true,
          has_extended_profile: true,
          default_profile: true,
          default_profile_image: false,
          following: null,
          follow_request_sent: null,
          notifications: null,
          translator_type: 'none',
          withheld_in_countries: []
        },
        geo: null,
        coordinates: null,
        place: null,
        contributors: null,
        is_quote_status: false,
        retweet_count: 205,
        favorite_count: 2570,
        favorited: false,
        retweeted: false,
        lang: 'en'
      },
      is_quote_status: false,
      retweet_count: 205,
      favorite_count: 0,
      favorited: false,
      retweeted: false,
      lang: 'en'
    },
    {
      created_at: 'Wed Apr 06 08:54:33 +0000 2022',
      id: 1511628414976938000,
      id_str: '1511628414976937989',
      text: "RT @laligafrauds: Watching the Man City vs Atletico game and I'm just wondering, how did Ronaldo score 4 hatricks against Atletico? 🤔🐐 http…",
      truncated: false,
      entities: {
        hashtags: [],
        symbols: [],
        user_mentions: [
          {
            screen_name: 'laligafrauds',
            name: 'LLF',
            id: 1198258920185323500,
            id_str: '1198258920185323520',
            indices: [
              3,
              16
            ]
          }
        ],
        urls: []
      },
      metadata: {
        iso_language_code: 'en',
        result_type: 'recent'
      },
      source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
      in_reply_to_status_id: null,
      in_reply_to_status_id_str: null,
      in_reply_to_user_id: null,
      in_reply_to_user_id_str: null,
      in_reply_to_screen_name: null,
      user: {
        id: 776173251051581400,
        id_str: '776173251051581440',
        name: 'Lord Farquad',
        screen_name: '_xtndo',
        location: 'Ghana',
        description: "When it's all said and done, I hope we'll be genuinely happy.",
        url: null,
        entities: {
          description: {
            urls: []
          }
        },
        protected: false,
        followers_count: 1022,
        friends_count: 1300,
        listed_count: 4,
        created_at: 'Wed Sep 14 21:38:18 +0000 2016',
        favourites_count: 73850,
        utc_offset: null,
        time_zone: null,
        geo_enabled: false,
        verified: false,
        statuses_count: 18357,
        lang: null,
        contributors_enabled: false,
        is_translator: false,
        is_translation_enabled: false,
        profile_background_color: '000000',
        profile_background_image_url: 'http://abs.twimg.com/images/themes/theme1/bg.png',
        profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme1/bg.png',
        profile_background_tile: false,
        profile_image_url: 'http://pbs.twimg.com/profile_images/1450025901803048963/5nz46Kei_normal.jpg',
        profile_image_url_https: 'https://pbs.twimg.com/profile_images/1450025901803048963/5nz46Kei_normal.jpg',
        profile_banner_url: 'https://pbs.twimg.com/profile_banners/776173251051581440/1615036263',
        profile_link_color: '1B95E0',
        profile_sidebar_border_color: '000000',
        profile_sidebar_fill_color: '000000',
        profile_text_color: '000000',
        profile_use_background_image: false,
        has_extended_profile: true,
        default_profile: false,
        default_profile_image: false,
        following: null,
        follow_request_sent: null,
        notifications: null,
        translator_type: 'none',
        withheld_in_countries: []
      },
      geo: null,
      coordinates: null,
      place: null,
      contributors: null,
      retweeted_status: {
        created_at: 'Tue Apr 05 19:59:01 +0000 2022',
        id: 1511433247405719600,
        id_str: '1511433247405719552',
        text: "Watching the Man City vs Atletico game and I'm just wondering, how did Ronaldo score 4 hatricks against Atletico? 🤔🐐 https://t.co/45HEttTYoU",
        truncated: false,
        entities: {
          hashtags: [],
          symbols: [],
          user_mentions: [],
          urls: [],
          media: [
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
            }
          ]
        },
        extended_entities: {
          media: [
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
          ]
        },
        metadata: {
          iso_language_code: 'en',
          result_type: 'recent'
        },
        source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
        in_reply_to_status_id: null,
        in_reply_to_status_id_str: null,
        in_reply_to_user_id: null,
        in_reply_to_user_id_str: null,
        in_reply_to_screen_name: null,
        user: {
          id: 1198258920185323500,
          id_str: '1198258920185323520',
          name: 'LLF',
          screen_name: 'laligafrauds',
          location: 'Estadio Santiago Bernabeu',
          description: '@realmadrid ⚪ @cristiano 🔴 @manutd\nBackup:@LLF_14',
          url: null,
          entities: {
            description: {
              urls: []
            }
          },
          protected: false,
          followers_count: 8807,
          friends_count: 920,
          listed_count: 36,
          created_at: 'Sat Nov 23 15:16:14 +0000 2019',
          favourites_count: 56033,
          utc_offset: null,
          time_zone: null,
          geo_enabled: false,
          verified: false,
          statuses_count: 24701,
          lang: null,
          contributors_enabled: false,
          is_translator: false,
          is_translation_enabled: false,
          profile_background_color: 'F5F8FA',
          profile_background_image_url: null,
          profile_background_image_url_https: null,
          profile_background_tile: false,
          profile_image_url: 'http://pbs.twimg.com/profile_images/1386333489503539203/OBOXWGa6_normal.jpg',
          profile_image_url_https: 'https://pbs.twimg.com/profile_images/1386333489503539203/OBOXWGa6_normal.jpg',
          profile_banner_url: 'https://pbs.twimg.com/profile_banners/1198258920185323520/1621220472',
          profile_link_color: '1DA1F2',
          profile_sidebar_border_color: 'C0DEED',
          profile_sidebar_fill_color: 'DDEEF6',
          profile_text_color: '333333',
          profile_use_background_image: true,
          has_extended_profile: true,
          default_profile: true,
          default_profile_image: false,
          following: null,
          follow_request_sent: null,
          notifications: null,
          translator_type: 'none',
          withheld_in_countries: []
        },
        geo: null,
        coordinates: null,
        place: null,
        contributors: null,
        is_quote_status: false,
        retweet_count: 132,
        favorite_count: 1532,
        favorited: false,
        retweeted: false,
        possibly_sensitive: false,
        lang: 'en'
      },
      is_quote_status: false,
      retweet_count: 132,
      favorite_count: 0,
      favorited: false,
      retweeted: false,
      lang: 'en'
    },
    {
      created_at: 'Wed Apr 06 08:54:33 +0000 2022',
      id: 1511628414054240300,
      id_str: '1511628414054240258',
      text: 'RT @TrollFootball: Atletico against City https://t.co/5vxJpr42vK',
      truncated: false,
      entities: {
        hashtags: [],
        symbols: [],
        user_mentions: [
          {
            screen_name: 'TrollFootball',
            name: 'Troll Football',
            id: 571964518,
            id_str: '571964518',
            indices: [
              3,
              17
            ]
          }
        ],
        urls: [],
        media: [
          {
            id: 1511451519312601000,
            id_str: '1511451519312601088',
            indices: [
              41,
              64
            ],
            media_url: 'http://pbs.twimg.com/media/FPnBJhfaIAA6UlP.jpg',
            media_url_https: 'https://pbs.twimg.com/media/FPnBJhfaIAA6UlP.jpg',
            url: 'https://t.co/5vxJpr42vK',
            display_url: 'pic.twitter.com/5vxJpr42vK',
            expanded_url: 'https://twitter.com/TrollFootball/status/1511451585981054976/photo/1',
            type: 'photo',
            sizes: {
              thumb: {
                w: 150,
                h: 150,
                resize: 'crop'
              },
              small: {
                w: 680,
                h: 382,
                resize: 'fit'
              },
              large: {
                w: 851,
                h: 478,
                resize: 'fit'
              },
              medium: {
                w: 851,
                h: 478,
                resize: 'fit'
              }
            },
            source_status_id: 1511451585981055000,
            source_status_id_str: '1511451585981054976',
            source_user_id: 571964518,
            source_user_id_str: '571964518'
          }
        ]
      },
      extended_entities: {
        media: [
          {
            id: 1511451519312601000,
            id_str: '1511451519312601088',
            indices: [
              41,
              64
            ],
            media_url: 'http://pbs.twimg.com/media/FPnBJhfaIAA6UlP.jpg',
            media_url_https: 'https://pbs.twimg.com/media/FPnBJhfaIAA6UlP.jpg',
            url: 'https://t.co/5vxJpr42vK',
            display_url: 'pic.twitter.com/5vxJpr42vK',
            expanded_url: 'https://twitter.com/TrollFootball/status/1511451585981054976/photo/1',
            type: 'photo',
            sizes: {
              thumb: {
                w: 150,
                h: 150,
                resize: 'crop'
              },
              small: {
                w: 680,
                h: 382,
                resize: 'fit'
              },
              large: {
                w: 851,
                h: 478,
                resize: 'fit'
              },
              medium: {
                w: 851,
                h: 478,
                resize: 'fit'
              }
            },
            source_status_id: 1511451585981055000,
            source_status_id_str: '1511451585981054976',
            source_user_id: 571964518,
            source_user_id_str: '571964518'
          }
        ]
      },
      metadata: {
        iso_language_code: 'en',
        result_type: 'recent'
      },
      source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
      in_reply_to_status_id: null,
      in_reply_to_status_id_str: null,
      in_reply_to_user_id: null,
      in_reply_to_user_id_str: null,
      in_reply_to_screen_name: null,
      user: {
        id: 282489876,
        id_str: '282489876',
        name: '@Cristiano 𓃵 Ronaldo fan',
        screen_name: 'tobicious_abhay',
        location: 'Antarctica',
        description: 'Enthusiasm creates an  inspirational environment for uplifting moral and spirit to a new high.\n#january02\r\n#ARSENAL\n#SOARSUPEREAGLES \n Proudly capricorn ♑ ♑',
        url: 'https://t.co/3iNHXXz2GC',
        entities: {
          url: {
            urls: [
              {
                url: 'https://t.co/3iNHXXz2GC',
                expanded_url: 'https://m.facebook.com/tobiciousabhay',
                display_url: 'm.facebook.com/tobiciousabhay',
                indices: [
                  0,
                  23
                ]
              }
            ]
          },
          description: {
            urls: []
          }
        },
        protected: false,
        followers_count: 3900,
        friends_count: 2980,
        listed_count: 5,
        created_at: 'Fri Apr 15 09:23:15 +0000 2011',
        favourites_count: 196474,
        utc_offset: null,
        time_zone: null,
        geo_enabled: true,
        verified: false,
        statuses_count: 90250,
        lang: null,
        contributors_enabled: false,
        is_translator: false,
        is_translation_enabled: false,
        profile_background_color: '63000D',
        profile_background_image_url: 'http://abs.twimg.com/images/themes/theme8/bg.gif',
        profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme8/bg.gif',
        profile_background_tile: true,
        profile_image_url: 'http://pbs.twimg.com/profile_images/1338796861604438017/R0vkvdKM_normal.jpg',
        profile_image_url_https: 'https://pbs.twimg.com/profile_images/1338796861604438017/R0vkvdKM_normal.jpg',
        profile_banner_url: 'https://pbs.twimg.com/profile_banners/282489876/1556964951',
        profile_link_color: '9D864A',
        profile_sidebar_border_color: '001738',
        profile_sidebar_fill_color: '5678AA',
        profile_text_color: '000000',
        profile_use_background_image: true,
        has_extended_profile: true,
        default_profile: false,
        default_profile_image: false,
        following: null,
        follow_request_sent: null,
        notifications: null,
        translator_type: 'none',
        withheld_in_countries: []
      },
      geo: null,
      coordinates: null,
      place: null,
      contributors: null,
      retweeted_status: {
        created_at: 'Tue Apr 05 21:11:54 +0000 2022',
        id: 1511451585981055000,
        id_str: '1511451585981054976',
        text: 'Atletico against City https://t.co/5vxJpr42vK',
        truncated: false,
        entities: {
          hashtags: [],
          symbols: [],
          user_mentions: [],
          urls: [],
          media: [
            {
              id: 1511451519312601000,
              id_str: '1511451519312601088',
              indices: [
                22,
                45
              ],
              media_url: 'http://pbs.twimg.com/media/FPnBJhfaIAA6UlP.jpg',
              media_url_https: 'https://pbs.twimg.com/media/FPnBJhfaIAA6UlP.jpg',
              url: 'https://t.co/5vxJpr42vK',
              display_url: 'pic.twitter.com/5vxJpr42vK',
              expanded_url: 'https://twitter.com/TrollFootball/status/1511451585981054976/photo/1',
              type: 'photo',
              sizes: {
                thumb: {
                  w: 150,
                  h: 150,
                  resize: 'crop'
                },
                small: {
                  w: 680,
                  h: 382,
                  resize: 'fit'
                },
                large: {
                  w: 851,
                  h: 478,
                  resize: 'fit'
                },
                medium: {
                  w: 851,
                  h: 478,
                  resize: 'fit'
                }
              }
            }
          ]
        },
        extended_entities: {
          media: [
            {
              id: 1511451519312601000,
              id_str: '1511451519312601088',
              indices: [
                22,
                45
              ],
              media_url: 'http://pbs.twimg.com/media/FPnBJhfaIAA6UlP.jpg',
              media_url_https: 'https://pbs.twimg.com/media/FPnBJhfaIAA6UlP.jpg',
              url: 'https://t.co/5vxJpr42vK',
              display_url: 'pic.twitter.com/5vxJpr42vK',
              expanded_url: 'https://twitter.com/TrollFootball/status/1511451585981054976/photo/1',
              type: 'photo',
              sizes: {
                thumb: {
                  w: 150,
                  h: 150,
                  resize: 'crop'
                },
                small: {
                  w: 680,
                  h: 382,
                  resize: 'fit'
                },
                large: {
                  w: 851,
                  h: 478,
                  resize: 'fit'
                },
                medium: {
                  w: 851,
                  h: 478,
                  resize: 'fit'
                }
              }
            }
          ]
        },
        metadata: {
          iso_language_code: 'en',
          result_type: 'recent'
        },
        source: '<a href="https://mobile.twitter.com" rel="nofollow">Twitter Web App</a>',
        in_reply_to_status_id: null,
        in_reply_to_status_id_str: null,
        in_reply_to_user_id: null,
        in_reply_to_user_id_str: null,
        in_reply_to_screen_name: null,
        user: {
          id: 571964518,
          id_str: '571964518',
          name: 'Troll Football',
          screen_name: 'TrollFootball',
          location: '',
          description: "PARODY ACCOUNT \nInsta: @thefootballtroll Contact: trollfootballcontact@gmail.com . Don't follow us if you can't take a troll on your fav club/player.",
          url: null,
          entities: {
            description: {
              urls: []
            }
          },
          protected: false,
          followers_count: 1718032,
          friends_count: 749,
          listed_count: 4200,
          created_at: 'Sat May 05 18:11:01 +0000 2012',
          favourites_count: 665,
          utc_offset: null,
          time_zone: null,
          geo_enabled: true,
          verified: false,
          statuses_count: 6336,
          lang: null,
          contributors_enabled: false,
          is_translator: false,
          is_translation_enabled: false,
          profile_background_color: 'BADFCD',
          profile_background_image_url: 'http://abs.twimg.com/images/themes/theme1/bg.png',
          profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme1/bg.png',
          profile_background_tile: true,
          profile_image_url: 'http://pbs.twimg.com/profile_images/1479789757123088386/IjKRN0N5_normal.jpg',
          profile_image_url_https: 'https://pbs.twimg.com/profile_images/1479789757123088386/IjKRN0N5_normal.jpg',
          profile_banner_url: 'https://pbs.twimg.com/profile_banners/571964518/1633716161',
          profile_link_color: 'FF0000',
          profile_sidebar_border_color: 'FFFFFF',
          profile_sidebar_fill_color: 'DDEEF6',
          profile_text_color: '333333',
          profile_use_background_image: true,
          has_extended_profile: true,
          default_profile: false,
          default_profile_image: false,
          following: null,
          follow_request_sent: null,
          notifications: null,
          translator_type: 'none',
          withheld_in_countries: []
        },
        geo: null,
        coordinates: null,
        place: null,
        contributors: null,
        is_quote_status: false,
        retweet_count: 1318,
        favorite_count: 16452,
        favorited: false,
        retweeted: false,
        possibly_sensitive: false,
        lang: 'en'
      },
      is_quote_status: false,
      retweet_count: 1318,
      favorite_count: 0,
      favorited: false,
      retweeted: false,
      possibly_sensitive: false,
      lang: 'en'
    },
    {
      created_at: 'Wed Apr 06 08:54:31 +0000 2022',
      id: 1511628407666225200,
      id_str: '1511628407666225152',
      text: 'RT @TrollFootball: Atletico against City https://t.co/5vxJpr42vK',
      truncated: false,
      entities: {
        hashtags: [],
        symbols: [],
        user_mentions: [
          {
            screen_name: 'TrollFootball',
            name: 'Troll Football',
            id: 571964518,
            id_str: '571964518',
            indices: [
              3,
              17
            ]
          }
        ],
        urls: [],
        media: [
          {
            id: 1511451519312601000,
            id_str: '1511451519312601088',
            indices: [
              41,
              64
            ],
            media_url: 'http://pbs.twimg.com/media/FPnBJhfaIAA6UlP.jpg',
            media_url_https: 'https://pbs.twimg.com/media/FPnBJhfaIAA6UlP.jpg',
            url: 'https://t.co/5vxJpr42vK',
            display_url: 'pic.twitter.com/5vxJpr42vK',
            expanded_url: 'https://twitter.com/TrollFootball/status/1511451585981054976/photo/1',
            type: 'photo',
            sizes: {
              thumb: {
                w: 150,
                h: 150,
                resize: 'crop'
              },
              small: {
                w: 680,
                h: 382,
                resize: 'fit'
              },
              large: {
                w: 851,
                h: 478,
                resize: 'fit'
              },
              medium: {
                w: 851,
                h: 478,
                resize: 'fit'
              }
            },
            source_status_id: 1511451585981055000,
            source_status_id_str: '1511451585981054976',
            source_user_id: 571964518,
            source_user_id_str: '571964518'
          }
        ]
      },
      extended_entities: {
        media: [
          {
            id: 1511451519312601000,
            id_str: '1511451519312601088',
            indices: [
              41,
              64
            ],
            media_url: 'http://pbs.twimg.com/media/FPnBJhfaIAA6UlP.jpg',
            media_url_https: 'https://pbs.twimg.com/media/FPnBJhfaIAA6UlP.jpg',
            url: 'https://t.co/5vxJpr42vK',
            display_url: 'pic.twitter.com/5vxJpr42vK',
            expanded_url: 'https://twitter.com/TrollFootball/status/1511451585981054976/photo/1',
            type: 'photo',
            sizes: {
              thumb: {
                w: 150,
                h: 150,
                resize: 'crop'
              },
              small: {
                w: 680,
                h: 382,
                resize: 'fit'
              },
              large: {
                w: 851,
                h: 478,
                resize: 'fit'
              },
              medium: {
                w: 851,
                h: 478,
                resize: 'fit'
              }
            },
            source_status_id: 1511451585981055000,
            source_status_id_str: '1511451585981054976',
            source_user_id: 571964518,
            source_user_id_str: '571964518'
          }
        ]
      },
      metadata: {
        iso_language_code: 'en',
        result_type: 'recent'
      },
      source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
      in_reply_to_status_id: null,
      in_reply_to_status_id_str: null,
      in_reply_to_user_id: null,
      in_reply_to_user_id_str: null,
      in_reply_to_screen_name: null,
      user: {
        id: 2392591130,
        id_str: '2392591130',
        name: '이성모 (Sungmo Lee)',
        screen_name: 'inlondon2015',
        location: '',
        description: 'South Korean Football Journalist, Member of FWA, Author, Translator. Covered PL, La Liga, UCL and UEL.\n\nAny contacts : please DM in here or via my Instagram.',
        url: 'https://t.co/fzK1VEggOb',
        entities: {
          url: {
            urls: [
              {
                url: 'https://t.co/fzK1VEggOb',
                expanded_url: 'https://www.instagram.com/sungmolee/',
                display_url: 'instagram.com/sungmolee/',
                indices: [
                  0,
                  23
                ]
              }
            ]
          },
          description: {
            urls: []
          }
        },
        protected: false,
        followers_count: 1739,
        friends_count: 359,
        listed_count: 36,
        created_at: 'Sun Mar 16 11:50:58 +0000 2014',
        favourites_count: 1290,
        utc_offset: null,
        time_zone: null,
        geo_enabled: false,
        verified: false,
        statuses_count: 19311,
        lang: null,
        contributors_enabled: false,
        is_translator: false,
        is_translation_enabled: false,
        profile_background_color: 'C0DEED',
        profile_background_image_url: 'http://abs.twimg.com/images/themes/theme1/bg.png',
        profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme1/bg.png',
        profile_background_tile: false,
        profile_image_url: 'http://pbs.twimg.com/profile_images/651690742029656065/UbaqWBCr_normal.jpg',
        profile_image_url_https: 'https://pbs.twimg.com/profile_images/651690742029656065/UbaqWBCr_normal.jpg',
        profile_banner_url: 'https://pbs.twimg.com/profile_banners/2392591130/1442157028',
        profile_link_color: '0084B4',
        profile_sidebar_border_color: 'C0DEED',
        profile_sidebar_fill_color: 'DDEEF6',
        profile_text_color: '333333',
        profile_use_background_image: true,
        has_extended_profile: false,
        default_profile: false,
        default_profile_image: false,
        following: null,
        follow_request_sent: null,
        notifications: null,
        translator_type: 'none',
        withheld_in_countries: []
      },
      geo: null,
      coordinates: null,
      place: null,
      contributors: null,
      retweeted_status: {
        created_at: 'Tue Apr 05 21:11:54 +0000 2022',
        id: 1511451585981055000,
        id_str: '1511451585981054976',
        text: 'Atletico against City https://t.co/5vxJpr42vK',
        truncated: false,
        entities: {
          hashtags: [],
          symbols: [],
          user_mentions: [],
          urls: [],
          media: [
            {
              id: 1511451519312601000,
              id_str: '1511451519312601088',
              indices: [
                22,
                45
              ],
              media_url: 'http://pbs.twimg.com/media/FPnBJhfaIAA6UlP.jpg',
              media_url_https: 'https://pbs.twimg.com/media/FPnBJhfaIAA6UlP.jpg',
              url: 'https://t.co/5vxJpr42vK',
              display_url: 'pic.twitter.com/5vxJpr42vK',
              expanded_url: 'https://twitter.com/TrollFootball/status/1511451585981054976/photo/1',
              type: 'photo',
              sizes: {
                thumb: {
                  w: 150,
                  h: 150,
                  resize: 'crop'
                },
                small: {
                  w: 680,
                  h: 382,
                  resize: 'fit'
                },
                large: {
                  w: 851,
                  h: 478,
                  resize: 'fit'
                },
                medium: {
                  w: 851,
                  h: 478,
                  resize: 'fit'
                }
              }
            }
          ]
        },
        extended_entities: {
          media: [
            {
              id: 1511451519312601000,
              id_str: '1511451519312601088',
              indices: [
                22,
                45
              ],
              media_url: 'http://pbs.twimg.com/media/FPnBJhfaIAA6UlP.jpg',
              media_url_https: 'https://pbs.twimg.com/media/FPnBJhfaIAA6UlP.jpg',
              url: 'https://t.co/5vxJpr42vK',
              display_url: 'pic.twitter.com/5vxJpr42vK',
              expanded_url: 'https://twitter.com/TrollFootball/status/1511451585981054976/photo/1',
              type: 'photo',
              sizes: {
                thumb: {
                  w: 150,
                  h: 150,
                  resize: 'crop'
                },
                small: {
                  w: 680,
                  h: 382,
                  resize: 'fit'
                },
                large: {
                  w: 851,
                  h: 478,
                  resize: 'fit'
                },
                medium: {
                  w: 851,
                  h: 478,
                  resize: 'fit'
                }
              }
            }
          ]
        },
        metadata: {
          iso_language_code: 'en',
          result_type: 'recent'
        },
        source: '<a href="https://mobile.twitter.com" rel="nofollow">Twitter Web App</a>',
        in_reply_to_status_id: null,
        in_reply_to_status_id_str: null,
        in_reply_to_user_id: null,
        in_reply_to_user_id_str: null,
        in_reply_to_screen_name: null,
        user: {
          id: 571964518,
          id_str: '571964518',
          name: 'Troll Football',
          screen_name: 'TrollFootball',
          location: '',
          description: "PARODY ACCOUNT \nInsta: @thefootballtroll Contact: trollfootballcontact@gmail.com . Don't follow us if you can't take a troll on your fav club/player.",
          url: null,
          entities: {
            description: {
              urls: []
            }
          },
          protected: false,
          followers_count: 1718032,
          friends_count: 749,
          listed_count: 4200,
          created_at: 'Sat May 05 18:11:01 +0000 2012',
          favourites_count: 665,
          utc_offset: null,
          time_zone: null,
          geo_enabled: true,
          verified: false,
          statuses_count: 6336,
          lang: null,
          contributors_enabled: false,
          is_translator: false,
          is_translation_enabled: false,
          profile_background_color: 'BADFCD',
          profile_background_image_url: 'http://abs.twimg.com/images/themes/theme1/bg.png',
          profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme1/bg.png',
          profile_background_tile: true,
          profile_image_url: 'http://pbs.twimg.com/profile_images/1479789757123088386/IjKRN0N5_normal.jpg',
          profile_image_url_https: 'https://pbs.twimg.com/profile_images/1479789757123088386/IjKRN0N5_normal.jpg',
          profile_banner_url: 'https://pbs.twimg.com/profile_banners/571964518/1633716161',
          profile_link_color: 'FF0000',
          profile_sidebar_border_color: 'FFFFFF',
          profile_sidebar_fill_color: 'DDEEF6',
          profile_text_color: '333333',
          profile_use_background_image: true,
          has_extended_profile: true,
          default_profile: false,
          default_profile_image: false,
          following: null,
          follow_request_sent: null,
          notifications: null,
          translator_type: 'none',
          withheld_in_countries: []
        },
        geo: null,
        coordinates: null,
        place: null,
        contributors: null,
        is_quote_status: false,
        retweet_count: 1318,
        favorite_count: 16452,
        favorited: false,
        retweeted: false,
        possibly_sensitive: false,
        lang: 'en'
      },
      is_quote_status: false,
      retweet_count: 1318,
      favorite_count: 0,
      favorited: false,
      retweeted: false,
      possibly_sensitive: false,
      lang: 'en'
    },
    {
      created_at: 'Wed Apr 06 08:54:27 +0000 2022',
      id: 1511628389123301400,
      id_str: '1511628389123301376',
      text: "RT @Squawka: Atlético Madrid's shot map against Man City. Empty. 🤯\n\n#UCL https://t.co/YVar4bKQPS",
      truncated: false,
      entities: {
        hashtags: [
          {
            text: 'UCL',
            indices: [
              68,
              72
            ]
          }
        ],
        symbols: [],
        user_mentions: [
          {
            screen_name: 'Squawka',
            name: 'Squawka',
            id: 385473825,
            id_str: '385473825',
            indices: [
              3,
              11
            ]
          }
        ],
        urls: [],
        media: [
          {
            id: 1511447513265578000,
            id_str: '1511447513265577990',
            indices: [
              73,
              96
            ],
            media_url: 'http://pbs.twimg.com/media/FPm9gVzXoAY_0qp.png',
            media_url_https: 'https://pbs.twimg.com/media/FPm9gVzXoAY_0qp.png',
            url: 'https://t.co/YVar4bKQPS',
            display_url: 'pic.twitter.com/YVar4bKQPS',
            expanded_url: 'https://twitter.com/Squawka/status/1511447538729164806/photo/1',
            type: 'photo',
            sizes: {
              large: {
                w: 1360,
                h: 1050,
                resize: 'fit'
              },
              small: {
                w: 680,
                h: 525,
                resize: 'fit'
              },
              medium: {
                w: 1200,
                h: 926,
                resize: 'fit'
              },
              thumb: {
                w: 150,
                h: 150,
                resize: 'crop'
              }
            },
            source_status_id: 1511447538729164800,
            source_status_id_str: '1511447538729164806',
            source_user_id: 385473825,
            source_user_id_str: '385473825'
          }
        ]
      },
      extended_entities: {
        media: [
          {
            id: 1511447513265578000,
            id_str: '1511447513265577990',
            indices: [
              73,
              96
            ],
            media_url: 'http://pbs.twimg.com/media/FPm9gVzXoAY_0qp.png',
            media_url_https: 'https://pbs.twimg.com/media/FPm9gVzXoAY_0qp.png',
            url: 'https://t.co/YVar4bKQPS',
            display_url: 'pic.twitter.com/YVar4bKQPS',
            expanded_url: 'https://twitter.com/Squawka/status/1511447538729164806/photo/1',
            type: 'photo',
            sizes: {
              large: {
                w: 1360,
                h: 1050,
                resize: 'fit'
              },
              small: {
                w: 680,
                h: 525,
                resize: 'fit'
              },
              medium: {
                w: 1200,
                h: 926,
                resize: 'fit'
              },
              thumb: {
                w: 150,
                h: 150,
                resize: 'crop'
              }
            },
            source_status_id: 1511447538729164800,
            source_status_id_str: '1511447538729164806',
            source_user_id: 385473825,
            source_user_id_str: '385473825'
          }
        ]
      },
      metadata: {
        iso_language_code: 'en',
        result_type: 'recent'
      },
      source: '<a href="http://twitter.com/download/iphone" rel="nofollow">Twitter for iPhone</a>',
      in_reply_to_status_id: null,
      in_reply_to_status_id_str: null,
      in_reply_to_user_id: null,
      in_reply_to_user_id_str: null,
      in_reply_to_screen_name: null,
      user: {
        id: 882068462,
        id_str: '882068462',
        name: 'Veritas Aequitas!',
        screen_name: 'Magaji_1',
        location: 'Lagos',
        description: '',
        url: null,
        entities: {
          description: {
            urls: []
          }
        },
        protected: false,
        followers_count: 1428,
        friends_count: 5000,
        listed_count: 7,
        created_at: 'Mon Oct 15 10:47:46 +0000 2012',
        favourites_count: 248781,
        utc_offset: null,
        time_zone: null,
        geo_enabled: false,
        verified: false,
        statuses_count: 242020,
        lang: null,
        contributors_enabled: false,
        is_translator: false,
        is_translation_enabled: false,
        profile_background_color: 'C0DEED',
        profile_background_image_url: 'http://abs.twimg.com/images/themes/theme1/bg.png',
        profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme1/bg.png',
        profile_background_tile: false,
        profile_image_url: 'http://pbs.twimg.com/profile_images/1068451736195608576/G4qKPsSq_normal.jpg',
        profile_image_url_https: 'https://pbs.twimg.com/profile_images/1068451736195608576/G4qKPsSq_normal.jpg',
        profile_banner_url: 'https://pbs.twimg.com/profile_banners/882068462/1527000777',
        profile_link_color: '1DA1F2',
        profile_sidebar_border_color: 'C0DEED',
        profile_sidebar_fill_color: 'DDEEF6',
        profile_text_color: '333333',
        profile_use_background_image: true,
        has_extended_profile: false,
        default_profile: true,
        default_profile_image: false,
        following: null,
        follow_request_sent: null,
        notifications: null,
        translator_type: 'none',
        withheld_in_countries: []
      },
      geo: null,
      coordinates: null,
      place: null,
      contributors: null,
      retweeted_status: {
        created_at: 'Tue Apr 05 20:55:49 +0000 2022',
        id: 1511447538729164800,
        id_str: '1511447538729164806',
        text: "Atlético Madrid's shot map against Man City. Empty. 🤯\n\n#UCL https://t.co/YVar4bKQPS",
        truncated: false,
        entities: {
          hashtags: [
            {
              text: 'UCL',
              indices: [
                55,
                59
              ]
            }
          ],
          symbols: [],
          user_mentions: [],
          urls: [],
          media: [
            {
              id: 1511447513265578000,
              id_str: '1511447513265577990',
              indices: [
                60,
                83
              ],
              media_url: 'http://pbs.twimg.com/media/FPm9gVzXoAY_0qp.png',
              media_url_https: 'https://pbs.twimg.com/media/FPm9gVzXoAY_0qp.png',
              url: 'https://t.co/YVar4bKQPS',
              display_url: 'pic.twitter.com/YVar4bKQPS',
              expanded_url: 'https://twitter.com/Squawka/status/1511447538729164806/photo/1',
              type: 'photo',
              sizes: {
                large: {
                  w: 1360,
                  h: 1050,
                  resize: 'fit'
                },
                small: {
                  w: 680,
                  h: 525,
                  resize: 'fit'
                },
                medium: {
                  w: 1200,
                  h: 926,
                  resize: 'fit'
                },
                thumb: {
                  w: 150,
                  h: 150,
                  resize: 'crop'
                }
              }
            }
          ]
        },
        extended_entities: {
          media: [
            {
              id: 1511447513265578000,
              id_str: '1511447513265577990',
              indices: [
                60,
                83
              ],
              media_url: 'http://pbs.twimg.com/media/FPm9gVzXoAY_0qp.png',
              media_url_https: 'https://pbs.twimg.com/media/FPm9gVzXoAY_0qp.png',
              url: 'https://t.co/YVar4bKQPS',
              display_url: 'pic.twitter.com/YVar4bKQPS',
              expanded_url: 'https://twitter.com/Squawka/status/1511447538729164806/photo/1',
              type: 'photo',
              sizes: {
                large: {
                  w: 1360,
                  h: 1050,
                  resize: 'fit'
                },
                small: {
                  w: 680,
                  h: 525,
                  resize: 'fit'
                },
                medium: {
                  w: 1200,
                  h: 926,
                  resize: 'fit'
                },
                thumb: {
                  w: 150,
                  h: 150,
                  resize: 'crop'
                }
              }
            }
          ]
        },
        metadata: {
          iso_language_code: 'en',
          result_type: 'recent'
        },
        source: '<a href="https://about.twitter.com/products/tweetdeck" rel="nofollow">TweetDeck</a>',
        in_reply_to_status_id: null,
        in_reply_to_status_id_str: null,
        in_reply_to_user_id: null,
        in_reply_to_user_id_str: null,
        in_reply_to_screen_name: null,
        user: {
          id: 385473825,
          id_str: '385473825',
          name: 'Squawka',
          screen_name: 'Squawka',
          location: '',
          description: 'More than the score: stats, stories, insight and analysis on football and other sporting events. Follow: @SquawkaNews & @SquawkaBet. Data provided by Opta.',
          url: 'https://t.co/C2KKrmDLg2',
          entities: {
            url: {
              urls: [
                {
                  url: 'https://t.co/C2KKrmDLg2',
                  expanded_url: 'https://linkin.bio/squawkafootball',
                  display_url: 'linkin.bio/squawkafootball',
                  indices: [
                    0,
                    23
                  ]
                }
              ]
            },
            description: {
              urls: []
            }
          },
          protected: false,
          followers_count: 1174920,
          friends_count: 892,
          listed_count: 7314,
          created_at: 'Wed Oct 05 15:25:19 +0000 2011',
          favourites_count: 8082,
          utc_offset: null,
          time_zone: null,
          geo_enabled: true,
          verified: true,
          statuses_count: 216665,
          lang: null,
          contributors_enabled: false,
          is_translator: false,
          is_translation_enabled: false,
          profile_background_color: '000000',
          profile_background_image_url: 'http://abs.twimg.com/images/themes/theme1/bg.png',
          profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme1/bg.png',
          profile_background_tile: false,
          profile_image_url: 'http://pbs.twimg.com/profile_images/1482083504036921351/EksxwVsY_normal.jpg',
          profile_image_url_https: 'https://pbs.twimg.com/profile_images/1482083504036921351/EksxwVsY_normal.jpg',
          profile_banner_url: 'https://pbs.twimg.com/profile_banners/385473825/1644187677',
          profile_link_color: 'ED3F31',
          profile_sidebar_border_color: 'FFFFFF',
          profile_sidebar_fill_color: 'DDEEF6',
          profile_text_color: '333333',
          profile_use_background_image: true,
          has_extended_profile: true,
          default_profile: false,
          default_profile_image: false,
          following: null,
          follow_request_sent: null,
          notifications: null,
          translator_type: 'none',
          withheld_in_countries: []
        },
        geo: null,
        coordinates: null,
        place: null,
        contributors: null,
        is_quote_status: false,
        retweet_count: 473,
        favorite_count: 3348,
        favorited: false,
        retweeted: false,
        possibly_sensitive: false,
        lang: 'en'
      },
      is_quote_status: false,
      retweet_count: 473,
      favorite_count: 0,
      favorited: false,
      retweeted: false,
      possibly_sensitive: false,
      lang: 'en'
    },
    {
      created_at: 'Wed Apr 06 08:54:23 +0000 2022',
      id: 1511628373965086700,
      id_str: '1511628373965086736',
      text: '@ManoloFutbolTV @elchiringuitotv Mucho de fútbol No sabe, ¿sabes qué es el jugador más atlético del Madrid?, ¿sabes… https://t.co/yFmJA6hPXd',
      truncated: true,
      entities: {
        hashtags: [],
        symbols: [],
        user_mentions: [
          {
            screen_name: 'ManoloFutbolTV',
            name: 'Manuel',
            id: 3001308027,
            id_str: '3001308027',
            indices: [
              0,
              15
            ]
          },
          {
            screen_name: 'elchiringuitotv',
            name: 'El Chiringuito TV',
            id: 18905975,
            id_str: '18905975',
            indices: [
              16,
              32
            ]
          }
        ],
        urls: [
          {
            url: 'https://t.co/yFmJA6hPXd',
            expanded_url: 'https://twitter.com/i/web/status/1511628373965086736',
            display_url: 'twitter.com/i/web/status/1…',
            indices: [
              117,
              140
            ]
          }
        ]
      },
      metadata: {
        iso_language_code: 'es',
        result_type: 'recent'
      },
      source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
      in_reply_to_status_id: 1511482713773125600,
      in_reply_to_status_id_str: '1511482713773125639',
      in_reply_to_user_id: 3001308027,
      in_reply_to_user_id_str: '3001308027',
      in_reply_to_screen_name: 'ManoloFutbolTV',
      user: {
        id: 4189907379,
        id_str: '4189907379',
        name: 'Ellloricas',
        screen_name: 'stivenvilla8',
        location: 'en tu corazón ',
        description: 'Muchos lloros  perros',
        url: null,
        entities: {
          description: {
            urls: []
          }
        },
        protected: false,
        followers_count: 22,
        friends_count: 244,
        listed_count: 1,
        created_at: 'Sat Nov 14 23:51:27 +0000 2015',
        favourites_count: 1569,
        utc_offset: null,
        time_zone: null,
        geo_enabled: false,
        verified: false,
        statuses_count: 1332,
        lang: null,
        contributors_enabled: false,
        is_translator: false,
        is_translation_enabled: false,
        profile_background_color: 'C0DEED',
        profile_background_image_url: 'http://abs.twimg.com/images/themes/theme1/bg.png',
        profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme1/bg.png',
        profile_background_tile: false,
        profile_image_url: 'http://pbs.twimg.com/profile_images/1499844803781091341/l-E72vIw_normal.jpg',
        profile_image_url_https: 'https://pbs.twimg.com/profile_images/1499844803781091341/l-E72vIw_normal.jpg',
        profile_link_color: '1DA1F2',
        profile_sidebar_border_color: 'C0DEED',
        profile_sidebar_fill_color: 'DDEEF6',
        profile_text_color: '333333',
        profile_use_background_image: true,
        has_extended_profile: false,
        default_profile: true,
        default_profile_image: false,
        following: null,
        follow_request_sent: null,
        notifications: null,
        translator_type: 'none',
        withheld_in_countries: []
      },
      geo: null,
      coordinates: null,
      place: null,
      contributors: null,
      is_quote_status: false,
      retweet_count: 0,
      favorite_count: 0,
      favorited: false,
      retweeted: false,
      lang: 'es'
    },
    {
      created_at: 'Wed Apr 06 08:54:22 +0000 2022',
      id: 1511628370815209500,
      id_str: '1511628370815209477',
      text: 'RT @Squawka: Jack Grealish won more fouls (5) than any other Man City or Atletico player.\n\n◉ Jack Grealish (5)\n◎ Riyad Mahrez (3)\n◎ Geoffre…',
      truncated: false,
      entities: {
        hashtags: [],
        symbols: [],
        user_mentions: [
          {
            screen_name: 'Squawka',
            name: 'Squawka',
            id: 385473825,
            id_str: '385473825',
            indices: [
              3,
              11
            ]
          }
        ],
        urls: []
      },
      metadata: {
        iso_language_code: 'en',
        result_type: 'recent'
      },
      source: '<a href="http://twitter.com/download/iphone" rel="nofollow">Twitter for iPhone</a>',
      in_reply_to_status_id: null,
      in_reply_to_status_id_str: null,
      in_reply_to_user_id: null,
      in_reply_to_user_id_str: null,
      in_reply_to_screen_name: null,
      user: {
        id: 882068462,
        id_str: '882068462',
        name: 'Veritas Aequitas!',
        screen_name: 'Magaji_1',
        location: 'Lagos',
        description: '',
        url: null,
        entities: {
          description: {
            urls: []
          }
        },
        protected: false,
        followers_count: 1428,
        friends_count: 5000,
        listed_count: 7,
        created_at: 'Mon Oct 15 10:47:46 +0000 2012',
        favourites_count: 248781,
        utc_offset: null,
        time_zone: null,
        geo_enabled: false,
        verified: false,
        statuses_count: 242020,
        lang: null,
        contributors_enabled: false,
        is_translator: false,
        is_translation_enabled: false,
        profile_background_color: 'C0DEED',
        profile_background_image_url: 'http://abs.twimg.com/images/themes/theme1/bg.png',
        profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme1/bg.png',
        profile_background_tile: false,
        profile_image_url: 'http://pbs.twimg.com/profile_images/1068451736195608576/G4qKPsSq_normal.jpg',
        profile_image_url_https: 'https://pbs.twimg.com/profile_images/1068451736195608576/G4qKPsSq_normal.jpg',
        profile_banner_url: 'https://pbs.twimg.com/profile_banners/882068462/1527000777',
        profile_link_color: '1DA1F2',
        profile_sidebar_border_color: 'C0DEED',
        profile_sidebar_fill_color: 'DDEEF6',
        profile_text_color: '333333',
        profile_use_background_image: true,
        has_extended_profile: false,
        default_profile: true,
        default_profile_image: false,
        following: null,
        follow_request_sent: null,
        notifications: null,
        translator_type: 'none',
        withheld_in_countries: []
      },
      geo: null,
      coordinates: null,
      place: null,
      contributors: null,
      retweeted_status: {
        created_at: 'Tue Apr 05 21:05:00 +0000 2022',
        id: 1511449850319196200,
        id_str: '1511449850319196161',
        text: 'Jack Grealish won more fouls (5) than any other Man City or Atletico player.\n\n◉ Jack Grealish (5)\n◎ Riyad Mahrez (3… https://t.co/C2NEDY81oY',
        truncated: true,
        entities: {
          hashtags: [],
          symbols: [],
          user_mentions: [],
          urls: [
            {
              url: 'https://t.co/C2NEDY81oY',
              expanded_url: 'https://twitter.com/i/web/status/1511449850319196161',
              display_url: 'twitter.com/i/web/status/1…',
              indices: [
                117,
                140
              ]
            }
          ]
        },
        metadata: {
          iso_language_code: 'en',
          result_type: 'recent'
        },
        source: '<a href="https://about.twitter.com/products/tweetdeck" rel="nofollow">TweetDeck</a>',
        in_reply_to_status_id: null,
        in_reply_to_status_id_str: null,
        in_reply_to_user_id: null,
        in_reply_to_user_id_str: null,
        in_reply_to_screen_name: null,
        user: {
          id: 385473825,
          id_str: '385473825',
          name: 'Squawka',
          screen_name: 'Squawka',
          location: '',
          description: 'More than the score: stats, stories, insight and analysis on football and other sporting events. Follow: @SquawkaNews & @SquawkaBet. Data provided by Opta.',
          url: 'https://t.co/C2KKrmDLg2',
          entities: {
            url: {
              urls: [
                {
                  url: 'https://t.co/C2KKrmDLg2',
                  expanded_url: 'https://linkin.bio/squawkafootball',
                  display_url: 'linkin.bio/squawkafootball',
                  indices: [
                    0,
                    23
                  ]
                }
              ]
            },
            description: {
              urls: []
            }
          },
          protected: false,
          followers_count: 1174920,
          friends_count: 892,
          listed_count: 7314,
          created_at: 'Wed Oct 05 15:25:19 +0000 2011',
          favourites_count: 8082,
          utc_offset: null,
          time_zone: null,
          geo_enabled: true,
          verified: true,
          statuses_count: 216665,
          lang: null,
          contributors_enabled: false,
          is_translator: false,
          is_translation_enabled: false,
          profile_background_color: '000000',
          profile_background_image_url: 'http://abs.twimg.com/images/themes/theme1/bg.png',
          profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme1/bg.png',
          profile_background_tile: false,
          profile_image_url: 'http://pbs.twimg.com/profile_images/1482083504036921351/EksxwVsY_normal.jpg',
          profile_image_url_https: 'https://pbs.twimg.com/profile_images/1482083504036921351/EksxwVsY_normal.jpg',
          profile_banner_url: 'https://pbs.twimg.com/profile_banners/385473825/1644187677',
          profile_link_color: 'ED3F31',
          profile_sidebar_border_color: 'FFFFFF',
          profile_sidebar_fill_color: 'DDEEF6',
          profile_text_color: '333333',
          profile_use_background_image: true,
          has_extended_profile: true,
          default_profile: false,
          default_profile_image: false,
          following: null,
          follow_request_sent: null,
          notifications: null,
          translator_type: 'none',
          withheld_in_countries: []
        },
        geo: null,
        coordinates: null,
        place: null,
        contributors: null,
        is_quote_status: false,
        retweet_count: 180,
        favorite_count: 2731,
        favorited: false,
        retweeted: false,
        possibly_sensitive: false,
        lang: 'en'
      },
      is_quote_status: false,
      retweet_count: 180,
      favorite_count: 0,
      favorited: false,
      retweeted: false,
      lang: 'en'
    },
    {
      created_at: 'Wed Apr 06 08:54:22 +0000 2022',
      id: 1511628369439383600,
      id_str: '1511628369439383552',
      text: '@Atletico @cdtolima @LibertadoresBR GALOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO!!!!!!!!!',
      truncated: false,
      entities: {
        hashtags: [],
        symbols: [],
        user_mentions: [
          {
            screen_name: 'Atletico',
            name: 'Atlético 😷',
            id: 90676816,
            id_str: '90676816',
            indices: [
              0,
              9
            ]
          },
          {
            screen_name: 'cdtolima',
            name: 'Club Deportes Tolima S.A ⭐️⭐️⭐️',
            id: 273570661,
            id_str: '273570661',
            indices: [
              10,
              19
            ]
          },
          {
            screen_name: 'LibertadoresBR',
            name: 'CONMEBOL Libertadores',
            id: 1021446194197925900,
            id_str: '1021446194197925888',
            indices: [
              20,
              35
            ]
          }
        ],
        urls: []
      },
      metadata: {
        iso_language_code: 'in',
        result_type: 'recent'
      },
      source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
      in_reply_to_status_id: 1511539440589496300,
      in_reply_to_status_id_str: '1511539440589496322',
      in_reply_to_user_id: 90676816,
      in_reply_to_user_id_str: '90676816',
      in_reply_to_screen_name: 'Atletico',
      user: {
        id: 354058669,
        id_str: '354058669',
        name: 'Rafael Felisbino',
        screen_name: 'faelzinvga',
        location: 'Varginha-MG',
        description: 'Galoo @atletico',
        url: null,
        entities: {
          description: {
            urls: []
          }
        },
        protected: false,
        followers_count: 106,
        friends_count: 153,
        listed_count: 1,
        created_at: 'Sat Aug 13 02:20:15 +0000 2011',
        favourites_count: 20550,
        utc_offset: null,
        time_zone: null,
        geo_enabled: true,
        verified: false,
        statuses_count: 12949,
        lang: null,
        contributors_enabled: false,
        is_translator: false,
        is_translation_enabled: false,
        profile_background_color: '000000',
        profile_background_image_url: 'http://abs.twimg.com/images/themes/theme1/bg.png',
        profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme1/bg.png',
        profile_background_tile: false,
        profile_image_url: 'http://pbs.twimg.com/profile_images/1456085132582993927/0IlTJZwF_normal.jpg',
        profile_image_url_https: 'https://pbs.twimg.com/profile_images/1456085132582993927/0IlTJZwF_normal.jpg',
        profile_link_color: 'ABB8C2',
        profile_sidebar_border_color: '000000',
        profile_sidebar_fill_color: '000000',
        profile_text_color: '000000',
        profile_use_background_image: false,
        has_extended_profile: false,
        default_profile: false,
        default_profile_image: false,
        following: null,
        follow_request_sent: null,
        notifications: null,
        translator_type: 'none',
        withheld_in_countries: []
      },
      geo: null,
      coordinates: null,
      place: null,
      contributors: null,
      is_quote_status: false,
      retweet_count: 0,
      favorite_count: 0,
      favorited: false,
      retweeted: false,
      lang: 'in'
    },
    {
      created_at: 'Wed Apr 06 08:54:22 +0000 2022',
      id: 1511628369020035000,
      id_str: '1511628369020035073',
      text: '2 goals in 2 days for KDB🔥\n\n⚽ 🆚 Burnley\n⚽ 🆚 Atletico Madrid https://t.co/KqrdS4XFfJ',
      truncated: false,
      entities: {
        hashtags: [],
        symbols: [],
        user_mentions: [],
        urls: [],
        media: [
          {
            id: 1511628357783507000,
            id_str: '1511628357783506946',
            indices: [
              60,
              83
            ],
            media_url: 'http://pbs.twimg.com/media/FPph-4IX0AIFfP9.jpg',
            media_url_https: 'https://pbs.twimg.com/media/FPph-4IX0AIFfP9.jpg',
            url: 'https://t.co/KqrdS4XFfJ',
            display_url: 'pic.twitter.com/KqrdS4XFfJ',
            expanded_url: 'https://twitter.com/m59173145/status/1511628369020035073/photo/1',
            type: 'photo',
            sizes: {
              thumb: {
                w: 150,
                h: 150,
                resize: 'crop'
              },
              large: {
                w: 1080,
                h: 720,
                resize: 'fit'
              },
              small: {
                w: 680,
                h: 453,
                resize: 'fit'
              },
              medium: {
                w: 1080,
                h: 720,
                resize: 'fit'
              }
            }
          }
        ]
      },
      extended_entities: {
        media: [
          {
            id: 1511628357783507000,
            id_str: '1511628357783506946',
            indices: [
              60,
              83
            ],
            media_url: 'http://pbs.twimg.com/media/FPph-4IX0AIFfP9.jpg',
            media_url_https: 'https://pbs.twimg.com/media/FPph-4IX0AIFfP9.jpg',
            url: 'https://t.co/KqrdS4XFfJ',
            display_url: 'pic.twitter.com/KqrdS4XFfJ',
            expanded_url: 'https://twitter.com/m59173145/status/1511628369020035073/photo/1',
            type: 'photo',
            sizes: {
              thumb: {
                w: 150,
                h: 150,
                resize: 'crop'
              },
              large: {
                w: 1080,
                h: 720,
                resize: 'fit'
              },
              small: {
                w: 680,
                h: 453,
                resize: 'fit'
              },
              medium: {
                w: 1080,
                h: 720,
                resize: 'fit'
              }
            }
          }
        ]
      },
      metadata: {
        iso_language_code: 'en',
        result_type: 'recent'
      },
      source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
      in_reply_to_status_id: null,
      in_reply_to_status_id_str: null,
      in_reply_to_user_id: null,
      in_reply_to_user_id_str: null,
      in_reply_to_screen_name: null,
      user: {
        id: 1508125185160925200,
        id_str: '1508125185160925190',
        name: 'The Football Culture',
        screen_name: 'm59173145',
        location: 'Kampala, Uganda',
        description: 'Football Writer, Analyst and beloved fan of the game!! Music is my other sweet love.',
        url: null,
        entities: {
          description: {
            urls: []
          }
        },
        protected: false,
        followers_count: 14,
        friends_count: 206,
        listed_count: 0,
        created_at: 'Sun Mar 27 16:54:13 +0000 2022',
        favourites_count: 842,
        utc_offset: null,
        time_zone: null,
        geo_enabled: false,
        verified: false,
        statuses_count: 598,
        lang: null,
        contributors_enabled: false,
        is_translator: false,
        is_translation_enabled: false,
        profile_background_color: 'F5F8FA',
        profile_background_image_url: null,
        profile_background_image_url_https: null,
        profile_background_tile: false,
        profile_image_url: 'http://pbs.twimg.com/profile_images/1509559110240505857/pBtVLQWK_normal.jpg',
        profile_image_url_https: 'https://pbs.twimg.com/profile_images/1509559110240505857/pBtVLQWK_normal.jpg',
        profile_banner_url: 'https://pbs.twimg.com/profile_banners/1508125185160925190/1648742118',
        profile_link_color: '1DA1F2',
        profile_sidebar_border_color: 'C0DEED',
        profile_sidebar_fill_color: 'DDEEF6',
        profile_text_color: '333333',
        profile_use_background_image: true,
        has_extended_profile: true,
        default_profile: true,
        default_profile_image: false,
        following: null,
        follow_request_sent: null,
        notifications: null,
        translator_type: 'none',
        withheld_in_countries: []
      },
      geo: null,
      coordinates: null,
      place: null,
      contributors: null,
      is_quote_status: false,
      retweet_count: 0,
      favorite_count: 0,
      favorited: false,
      retweeted: false,
      possibly_sensitive: false,
      lang: 'en'
    },
    {
      created_at: 'Wed Apr 06 08:54:22 +0000 2022',
      id: 1511628367572971500,
      id_str: '1511628367572971520',
      text: 'A imprensa coloca o Corinthians na frente, no pote de Flamengo , Palmeiras e Atlético, estão cegos, agora estão cri… https://t.co/3swhAeU8Jo',
      truncated: true,
      entities: {
        hashtags: [],
        symbols: [],
        user_mentions: [],
        urls: [
          {
            url: 'https://t.co/3swhAeU8Jo',
            expanded_url: 'https://twitter.com/i/web/status/1511628367572971520',
            display_url: 'twitter.com/i/web/status/1…',
            indices: [
              117,
              140
            ]
          }
        ]
      },
      metadata: {
        iso_language_code: 'pt',
        result_type: 'recent'
      },
      source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
      in_reply_to_status_id: null,
      in_reply_to_status_id_str: null,
      in_reply_to_user_id: null,
      in_reply_to_user_id_str: null,
      in_reply_to_screen_name: null,
      user: {
        id: 242524888,
        id_str: '242524888',
        name: 'Walter Peres 🇧🇷🇧🇷🇧🇷',
        screen_name: 'walteraperes',
        location: 'Santos, Brasil',
        description: 'Casado, Apaixonado p meus filhos..., Síndico Profissional Certificado 5 Estrelas, Eng da Computação ...amante do futebol e dos amigos...🇧🇷🇧🇷🇧🇷',
        url: 'https://t.co/dp7g40JH8H',
        entities: {
          url: {
            urls: [
              {
                url: 'https://t.co/dp7g40JH8H',
                expanded_url: 'http://www.wpsindicoprofissional.com.br',
                display_url: 'wpsindicoprofissional.com.br',
                indices: [
                  0,
                  23
                ]
              }
            ]
          },
          description: {
            urls: []
          }
        },
        protected: false,
        followers_count: 670,
        friends_count: 1443,
        listed_count: 0,
        created_at: 'Tue Jan 25 00:13:10 +0000 2011',
        favourites_count: 50985,
        utc_offset: null,
        time_zone: null,
        geo_enabled: true,
        verified: false,
        statuses_count: 11116,
        lang: null,
        contributors_enabled: false,
        is_translator: false,
        is_translation_enabled: false,
        profile_background_color: 'ACDED6',
        profile_background_image_url: 'http://abs.twimg.com/images/themes/theme18/bg.gif',
        profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme18/bg.gif',
        profile_background_tile: false,
        profile_image_url: 'http://pbs.twimg.com/profile_images/1500063602216259589/X_38gNg1_normal.jpg',
        profile_image_url_https: 'https://pbs.twimg.com/profile_images/1500063602216259589/X_38gNg1_normal.jpg',
        profile_banner_url: 'https://pbs.twimg.com/profile_banners/242524888/1619055792',
        profile_link_color: '038543',
        profile_sidebar_border_color: 'EEEEEE',
        profile_sidebar_fill_color: 'F6F6F6',
        profile_text_color: '333333',
        profile_use_background_image: true,
        has_extended_profile: true,
        default_profile: false,
        default_profile_image: false,
        following: null,
        follow_request_sent: null,
        notifications: null,
        translator_type: 'none',
        withheld_in_countries: []
      },
      geo: null,
      coordinates: null,
      place: null,
      contributors: null,
      is_quote_status: false,
      retweet_count: 0,
      favorite_count: 0,
      favorited: false,
      retweeted: false,
      lang: 'pt'
    },
    {
      created_at: 'Wed Apr 06 08:54:21 +0000 2022',
      id: 1511628366465716200,
      id_str: '1511628366465716225',
      text: 'RT @brfootball: For the first time under Diego Simeone, Atlético had ZERO shots in a game 😬 https://t.co/oKrqkxPz7h',
      truncated: false,
      entities: {
        hashtags: [],
        symbols: [],
        user_mentions: [
          {
            screen_name: 'brfootball',
            name: 'B/R Football',
            id: 1561123663,
            id_str: '1561123663',
            indices: [
              3,
              14
            ]
          }
        ],
        urls: [],
        media: [
          {
            id: 1511469030175133700,
            id_str: '1511469030175133698',
            indices: [
              92,
              115
            ],
            media_url: 'http://pbs.twimg.com/media/FPnREyiX0AIXjOk.jpg',
            media_url_https: 'https://pbs.twimg.com/media/FPnREyiX0AIXjOk.jpg',
            url: 'https://t.co/oKrqkxPz7h',
            display_url: 'pic.twitter.com/oKrqkxPz7h',
            expanded_url: 'https://twitter.com/brfootball/status/1511469362024173570/photo/1',
            type: 'photo',
            sizes: {
              thumb: {
                w: 150,
                h: 150,
                resize: 'crop'
              },
              small: {
                w: 544,
                h: 680,
                resize: 'fit'
              },
              large: {
                w: 1639,
                h: 2048,
                resize: 'fit'
              },
              medium: {
                w: 960,
                h: 1200,
                resize: 'fit'
              }
            },
            source_status_id: 1511469362024173600,
            source_status_id_str: '1511469362024173570',
            source_user_id: 1561123663,
            source_user_id_str: '1561123663'
          }
        ]
      },
      extended_entities: {
        media: [
          {
            id: 1511469030175133700,
            id_str: '1511469030175133698',
            indices: [
              92,
              115
            ],
            media_url: 'http://pbs.twimg.com/media/FPnREyiX0AIXjOk.jpg',
            media_url_https: 'https://pbs.twimg.com/media/FPnREyiX0AIXjOk.jpg',
            url: 'https://t.co/oKrqkxPz7h',
            display_url: 'pic.twitter.com/oKrqkxPz7h',
            expanded_url: 'https://twitter.com/brfootball/status/1511469362024173570/photo/1',
            type: 'photo',
            sizes: {
              thumb: {
                w: 150,
                h: 150,
                resize: 'crop'
              },
              small: {
                w: 544,
                h: 680,
                resize: 'fit'
              },
              large: {
                w: 1639,
                h: 2048,
                resize: 'fit'
              },
              medium: {
                w: 960,
                h: 1200,
                resize: 'fit'
              }
            },
            source_status_id: 1511469362024173600,
            source_status_id_str: '1511469362024173570',
            source_user_id: 1561123663,
            source_user_id_str: '1561123663'
          },
          {
            id: 1511469045610123300,
            id_str: '1511469045610123274',
            indices: [
              92,
              115
            ],
            media_url: 'http://pbs.twimg.com/media/FPnRFsCXEAoVS7l.jpg',
            media_url_https: 'https://pbs.twimg.com/media/FPnRFsCXEAoVS7l.jpg',
            url: 'https://t.co/oKrqkxPz7h',
            display_url: 'pic.twitter.com/oKrqkxPz7h',
            expanded_url: 'https://twitter.com/brfootball/status/1511469362024173570/photo/1',
            type: 'photo',
            sizes: {
              medium: {
                w: 810,
                h: 1012,
                resize: 'fit'
              },
              thumb: {
                w: 150,
                h: 150,
                resize: 'crop'
              },
              large: {
                w: 810,
                h: 1012,
                resize: 'fit'
              },
              small: {
                w: 544,
                h: 680,
                resize: 'fit'
              }
            },
            source_status_id: 1511469362024173600,
            source_status_id_str: '1511469362024173570',
            source_user_id: 1561123663,
            source_user_id_str: '1561123663'
          }
        ]
      },
      metadata: {
        iso_language_code: 'en',
        result_type: 'recent'
      },
      source: '<a href="http://twitter.com/download/iphone" rel="nofollow">Twitter for iPhone</a>',
      in_reply_to_status_id: null,
      in_reply_to_status_id_str: null,
      in_reply_to_user_id: null,
      in_reply_to_user_id_str: null,
      in_reply_to_screen_name: null,
      user: {
        id: 4817826891,
        id_str: '4817826891',
        name: 'A 🇬🇭💯',
        screen_name: 'idky_2',
        location: 'Takoradi, Gh',
        description: 'I have an interesting view of things SC: idky_2 IG: idky_2',
        url: null,
        entities: {
          description: {
            urls: []
          }
        },
        protected: false,
        followers_count: 339,
        friends_count: 748,
        listed_count: 1,
        created_at: 'Sat Jan 16 12:20:36 +0000 2016',
        favourites_count: 8094,
        utc_offset: null,
        time_zone: null,
        geo_enabled: false,
        verified: false,
        statuses_count: 22746,
        lang: null,
        contributors_enabled: false,
        is_translator: false,
        is_translation_enabled: false,
        profile_background_color: 'F5F8FA',
        profile_background_image_url: null,
        profile_background_image_url_https: null,
        profile_background_tile: false,
        profile_image_url: 'http://pbs.twimg.com/profile_images/1469290401416818699/prGBde6P_normal.jpg',
        profile_image_url_https: 'https://pbs.twimg.com/profile_images/1469290401416818699/prGBde6P_normal.jpg',
        profile_banner_url: 'https://pbs.twimg.com/profile_banners/4817826891/1643962324',
        profile_link_color: '1DA1F2',
        profile_sidebar_border_color: 'C0DEED',
        profile_sidebar_fill_color: 'DDEEF6',
        profile_text_color: '333333',
        profile_use_background_image: true,
        has_extended_profile: true,
        default_profile: true,
        default_profile_image: false,
        following: null,
        follow_request_sent: null,
        notifications: null,
        translator_type: 'none',
        withheld_in_countries: []
      },
      geo: null,
      coordinates: null,
      place: null,
      contributors: null,
      retweeted_status: {
        created_at: 'Tue Apr 05 22:22:32 +0000 2022',
        id: 1511469362024173600,
        id_str: '1511469362024173570',
        text: 'For the first time under Diego Simeone, Atlético had ZERO shots in a game 😬 https://t.co/oKrqkxPz7h',
        truncated: false,
        entities: {
          hashtags: [],
          symbols: [],
          user_mentions: [],
          urls: [],
          media: [
            {
              id: 1511469030175133700,
              id_str: '1511469030175133698',
              indices: [
                76,
                99
              ],
              media_url: 'http://pbs.twimg.com/media/FPnREyiX0AIXjOk.jpg',
              media_url_https: 'https://pbs.twimg.com/media/FPnREyiX0AIXjOk.jpg',
              url: 'https://t.co/oKrqkxPz7h',
              display_url: 'pic.twitter.com/oKrqkxPz7h',
              expanded_url: 'https://twitter.com/brfootball/status/1511469362024173570/photo/1',
              type: 'photo',
              sizes: {
                thumb: {
                  w: 150,
                  h: 150,
                  resize: 'crop'
                },
                small: {
                  w: 544,
                  h: 680,
                  resize: 'fit'
                },
                large: {
                  w: 1639,
                  h: 2048,
                  resize: 'fit'
                },
                medium: {
                  w: 960,
                  h: 1200,
                  resize: 'fit'
                }
              }
            }
          ]
        },
        extended_entities: {
          media: [
            {
              id: 1511469030175133700,
              id_str: '1511469030175133698',
              indices: [
                76,
                99
              ],
              media_url: 'http://pbs.twimg.com/media/FPnREyiX0AIXjOk.jpg',
              media_url_https: 'https://pbs.twimg.com/media/FPnREyiX0AIXjOk.jpg',
              url: 'https://t.co/oKrqkxPz7h',
              display_url: 'pic.twitter.com/oKrqkxPz7h',
              expanded_url: 'https://twitter.com/brfootball/status/1511469362024173570/photo/1',
              type: 'photo',
              sizes: {
                thumb: {
                  w: 150,
                  h: 150,
                  resize: 'crop'
                },
                small: {
                  w: 544,
                  h: 680,
                  resize: 'fit'
                },
                large: {
                  w: 1639,
                  h: 2048,
                  resize: 'fit'
                },
                medium: {
                  w: 960,
                  h: 1200,
                  resize: 'fit'
                }
              }
            },
            {
              id: 1511469045610123300,
              id_str: '1511469045610123274',
              indices: [
                76,
                99
              ],
              media_url: 'http://pbs.twimg.com/media/FPnRFsCXEAoVS7l.jpg',
              media_url_https: 'https://pbs.twimg.com/media/FPnRFsCXEAoVS7l.jpg',
              url: 'https://t.co/oKrqkxPz7h',
              display_url: 'pic.twitter.com/oKrqkxPz7h',
              expanded_url: 'https://twitter.com/brfootball/status/1511469362024173570/photo/1',
              type: 'photo',
              sizes: {
                medium: {
                  w: 810,
                  h: 1012,
                  resize: 'fit'
                },
                thumb: {
                  w: 150,
                  h: 150,
                  resize: 'crop'
                },
                large: {
                  w: 810,
                  h: 1012,
                  resize: 'fit'
                },
                small: {
                  w: 544,
                  h: 680,
                  resize: 'fit'
                }
              }
            }
          ]
        },
        metadata: {
          iso_language_code: 'en',
          result_type: 'recent'
        },
        source: '<a href="https://about.twitter.com/products/tweetdeck" rel="nofollow">TweetDeck</a>',
        in_reply_to_status_id: null,
        in_reply_to_status_id_str: null,
        in_reply_to_user_id: null,
        in_reply_to_user_id_str: null,
        in_reply_to_screen_name: null,
        user: {
          id: 1561123663,
          id_str: '1561123663',
          name: 'B/R Football',
          screen_name: 'brfootball',
          location: '',
          description: 'Get the Free B/R App ⬇️',
          url: 'https://t.co/CFXD5md1KQ',
          entities: {
            url: {
              urls: [
                {
                  url: 'https://t.co/CFXD5md1KQ',
                  expanded_url: 'https://br.app.link/get-the-BR-app',
                  display_url: 'br.app.link/get-the-BR-app',
                  indices: [
                    0,
                    23
                  ]
                }
              ]
            },
            description: {
              urls: []
            }
          },
          protected: false,
          followers_count: 4492827,
          friends_count: 1038,
          listed_count: 8958,
          created_at: 'Mon Jul 01 17:51:17 +0000 2013',
          favourites_count: 2856,
          utc_offset: null,
          time_zone: null,
          geo_enabled: true,
          verified: true,
          statuses_count: 112850,
          lang: null,
          contributors_enabled: false,
          is_translator: false,
          is_translation_enabled: false,
          profile_background_color: 'C0DEED',
          profile_background_image_url: 'http://abs.twimg.com/images/themes/theme1/bg.png',
          profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme1/bg.png',
          profile_background_tile: false,
          profile_image_url: 'http://pbs.twimg.com/profile_images/1265929170913296385/I54xoXdG_normal.jpg',
          profile_image_url_https: 'https://pbs.twimg.com/profile_images/1265929170913296385/I54xoXdG_normal.jpg',
          profile_banner_url: 'https://pbs.twimg.com/profile_banners/1561123663/1633702163',
          profile_link_color: '0084B4',
          profile_sidebar_border_color: 'FFFFFF',
          profile_sidebar_fill_color: 'DDEEF6',
          profile_text_color: '333333',
          profile_use_background_image: true,
          has_extended_profile: false,
          default_profile: false,
          default_profile_image: false,
          following: null,
          follow_request_sent: null,
          notifications: null,
          translator_type: 'regular',
          withheld_in_countries: []
        },
        geo: null,
        coordinates: null,
        place: null,
        contributors: null,
        is_quote_status: false,
        retweet_count: 1860,
        favorite_count: 26092,
        favorited: false,
        retweeted: false,
        possibly_sensitive: false,
        lang: 'en'
      },
      is_quote_status: false,
      retweet_count: 1860,
      favorite_count: 0,
      favorited: false,
      retweeted: false,
      possibly_sensitive: false,
      lang: 'en'
    },
    {
      created_at: 'Wed Apr 06 08:54:21 +0000 2022',
      id: 1511628363144007700,
      id_str: '1511628363144007681',
      text: 'RT @mancityIndo: Kata sang MPV laga semalam lawan Atletico.\n\n#ManCityIndo | https://t.co/8QoFJkM18e https://t.co/1RazM3wtzt',
      truncated: false,
      entities: {
        hashtags: [
          {
            text: 'ManCityIndo',
            indices: [
              61,
              73
            ]
          }
        ],
        symbols: [],
        user_mentions: [
          {
            screen_name: 'mancityIndo',
            name: 'Manchester City',
            id: 1579902524,
            id_str: '1579902524',
            indices: [
              3,
              15
            ]
          }
        ],
        urls: [
          {
            url: 'https://t.co/8QoFJkM18e',
            expanded_url: 'http://id.mancity.com',
            display_url: 'id.mancity.com',
            indices: [
              76,
              99
            ]
          }
        ],
        media: [
          {
            id: 1511598922699280400,
            id_str: '1511598922699280393',
            indices: [
              100,
              123
            ],
            media_url: 'http://pbs.twimg.com/amplify_video_thumb/1511598922699280393/img/tsb4wkkER10GGp2N.jpg',
            media_url_https: 'https://pbs.twimg.com/amplify_video_thumb/1511598922699280393/img/tsb4wkkER10GGp2N.jpg',
            url: 'https://t.co/1RazM3wtzt',
            display_url: 'pic.twitter.com/1RazM3wtzt',
            expanded_url: 'https://twitter.com/mancityIndo/status/1511605894018404352/video/1',
            type: 'photo',
            sizes: {
              thumb: {
                w: 150,
                h: 150,
                resize: 'crop'
              },
              small: {
                w: 680,
                h: 680,
                resize: 'fit'
              },
              large: {
                w: 1080,
                h: 1080,
                resize: 'fit'
              },
              medium: {
                w: 1080,
                h: 1080,
                resize: 'fit'
              }
            },
            source_status_id: 1511605894018404400,
            source_status_id_str: '1511605894018404352',
            source_user_id: 1579902524,
            source_user_id_str: '1579902524'
          }
        ]
      },
      extended_entities: {
        media: [
          {
            id: 1511598922699280400,
            id_str: '1511598922699280393',
            indices: [
              100,
              123
            ],
            media_url: 'http://pbs.twimg.com/amplify_video_thumb/1511598922699280393/img/tsb4wkkER10GGp2N.jpg',
            media_url_https: 'https://pbs.twimg.com/amplify_video_thumb/1511598922699280393/img/tsb4wkkER10GGp2N.jpg',
            url: 'https://t.co/1RazM3wtzt',
            display_url: 'pic.twitter.com/1RazM3wtzt',
            expanded_url: 'https://twitter.com/mancityIndo/status/1511605894018404352/video/1',
            type: 'video',
            sizes: {
              thumb: {
                w: 150,
                h: 150,
                resize: 'crop'
              },
              small: {
                w: 680,
                h: 680,
                resize: 'fit'
              },
              large: {
                w: 1080,
                h: 1080,
                resize: 'fit'
              },
              medium: {
                w: 1080,
                h: 1080,
                resize: 'fit'
              }
            },
            source_status_id: 1511605894018404400,
            source_status_id_str: '1511605894018404352',
            source_user_id: 1579902524,
            source_user_id_str: '1579902524',
            video_info: {
              aspect_ratio: [
                1,
                1
              ],
              duration_millis: 163560,
              variants: [
                {
                  bitrate: 832000,
                  content_type: 'video/mp4',
                  url: 'https://video.twimg.com/amplify_video/1511598922699280393/vid/540x540/ZNf6a2Ia0GiuZAPw.mp4?tag=14'
                },
                {
                  bitrate: 432000,
                  content_type: 'video/mp4',
                  url: 'https://video.twimg.com/amplify_video/1511598922699280393/vid/320x320/t5pbK4cLHWAt118M.mp4?tag=14'
                },
                {
                  content_type: 'application/x-mpegURL',
                  url: 'https://video.twimg.com/amplify_video/1511598922699280393/pl/rn9YZ1lonc3uDnkf.m3u8?tag=14&container=fmp4'
                },
                {
                  bitrate: 1280000,
                  content_type: 'video/mp4',
                  url: 'https://video.twimg.com/amplify_video/1511598922699280393/vid/720x720/SqujL5i7dIzscTMy.mp4?tag=14'
                }
              ]
            },
            additional_media_info: {
              title: '',
              description: '',
              embeddable: true,
              monetizable: false,
              source_user: {
                id: 1579902524,
                id_str: '1579902524',
                name: 'Manchester City',
                screen_name: 'mancityIndo',
                location: 'Stadion Etihad',
                description: 'Akun resmi Twitter berbahasa Indonesia Manchester City Football Club',
                url: 'https://t.co/wioeEDLYDZ',
                entities: {
                  url: {
                    urls: [
                      {
                        url: 'https://t.co/wioeEDLYDZ',
                        expanded_url: 'http://id.mancity.com',
                        display_url: 'id.mancity.com',
                        indices: [
                          0,
                          23
                        ]
                      }
                    ]
                  },
                  description: {
                    urls: []
                  }
                },
                protected: false,
                followers_count: 83465,
                friends_count: 126,
                listed_count: 130,
                created_at: 'Tue Jul 09 09:25:32 +0000 2013',
                favourites_count: 5890,
                utc_offset: null,
                time_zone: null,
                geo_enabled: true,
                verified: true,
                statuses_count: 55304,
                lang: null,
                contributors_enabled: false,
                is_translator: false,
                is_translation_enabled: false,
                profile_background_color: '060606',
                profile_background_image_url: 'http://abs.twimg.com/images/themes/theme1/bg.png',
                profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme1/bg.png',
                profile_background_tile: false,
                profile_image_url: 'http://pbs.twimg.com/profile_images/1435105347555848194/qUzCPbrA_normal.jpg',
                profile_image_url_https: 'https://pbs.twimg.com/profile_images/1435105347555848194/qUzCPbrA_normal.jpg',
                profile_banner_url: 'https://pbs.twimg.com/profile_banners/1579902524/1646688073',
                profile_link_color: '81B2D5',
                profile_sidebar_border_color: '000000',
                profile_sidebar_fill_color: 'DDEEF6',
                profile_text_color: '333333',
                profile_use_background_image: true,
                has_extended_profile: false,
                default_profile: false,
                default_profile_image: false,
                following: null,
                follow_request_sent: null,
                notifications: null,
                translator_type: 'none',
                withheld_in_countries: []
              }
            }
          }
        ]
      },
      metadata: {
        iso_language_code: 'in',
        result_type: 'recent'
      },
      source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
      in_reply_to_status_id: null,
      in_reply_to_status_id_str: null,
      in_reply_to_user_id: null,
      in_reply_to_user_id_str: null,
      in_reply_to_screen_name: null,
      user: {
        id: 923414414,
        id_str: '923414414',
        name: 'We love City',
        screen_name: 'BrandyMohd',
        location: 'Kuala Lumpur',
        description: 'Cityzens',
        url: null,
        entities: {
          description: {
            urls: []
          }
        },
        protected: false,
        followers_count: 46,
        friends_count: 506,
        listed_count: 4,
        created_at: 'Sat Nov 03 15:14:58 +0000 2012',
        favourites_count: 291,
        utc_offset: null,
        time_zone: null,
        geo_enabled: false,
        verified: false,
        statuses_count: 866,
        lang: null,
        contributors_enabled: false,
        is_translator: false,
        is_translation_enabled: false,
        profile_background_color: 'C0DEED',
        profile_background_image_url: 'http://abs.twimg.com/images/themes/theme1/bg.png',
        profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme1/bg.png',
        profile_background_tile: false,
        profile_image_url: 'http://pbs.twimg.com/profile_images/699162402240073728/BvSbAOmx_normal.jpg',
        profile_image_url_https: 'https://pbs.twimg.com/profile_images/699162402240073728/BvSbAOmx_normal.jpg',
        profile_banner_url: 'https://pbs.twimg.com/profile_banners/923414414/1455528279',
        profile_link_color: '1DA1F2',
        profile_sidebar_border_color: 'C0DEED',
        profile_sidebar_fill_color: 'DDEEF6',
        profile_text_color: '333333',
        profile_use_background_image: true,
        has_extended_profile: false,
        default_profile: true,
        default_profile_image: false,
        following: null,
        follow_request_sent: null,
        notifications: null,
        translator_type: 'none',
        withheld_in_countries: []
      },
      geo: null,
      coordinates: null,
      place: null,
      contributors: null,
      retweeted_status: {
        created_at: 'Wed Apr 06 07:25:04 +0000 2022',
        id: 1511605894018404400,
        id_str: '1511605894018404352',
        text: 'Kata sang MPV laga semalam lawan Atletico.\n\n#ManCityIndo | https://t.co/8QoFJkM18e https://t.co/1RazM3wtzt',
        truncated: false,
        entities: {
          hashtags: [
            {
              text: 'ManCityIndo',
              indices: [
                44,
                56
              ]
            }
          ],
          symbols: [],
          user_mentions: [],
          urls: [
            {
              url: 'https://t.co/8QoFJkM18e',
              expanded_url: 'http://id.mancity.com',
              display_url: 'id.mancity.com',
              indices: [
                59,
                82
              ]
            }
          ],
          media: [
            {
              id: 1511598922699280400,
              id_str: '1511598922699280393',
              indices: [
                83,
                106
              ],
              media_url: 'http://pbs.twimg.com/amplify_video_thumb/1511598922699280393/img/tsb4wkkER10GGp2N.jpg',
              media_url_https: 'https://pbs.twimg.com/amplify_video_thumb/1511598922699280393/img/tsb4wkkER10GGp2N.jpg',
              url: 'https://t.co/1RazM3wtzt',
              display_url: 'pic.twitter.com/1RazM3wtzt',
              expanded_url: 'https://twitter.com/mancityIndo/status/1511605894018404352/video/1',
              type: 'photo',
              sizes: {
                thumb: {
                  w: 150,
                  h: 150,
                  resize: 'crop'
                },
                small: {
                  w: 680,
                  h: 680,
                  resize: 'fit'
                },
                large: {
                  w: 1080,
                  h: 1080,
                  resize: 'fit'
                },
                medium: {
                  w: 1080,
                  h: 1080,
                  resize: 'fit'
                }
              }
            }
          ]
        },
        extended_entities: {
          media: [
            {
              id: 1511598922699280400,
              id_str: '1511598922699280393',
              indices: [
                83,
                106
              ],
              media_url: 'http://pbs.twimg.com/amplify_video_thumb/1511598922699280393/img/tsb4wkkER10GGp2N.jpg',
              media_url_https: 'https://pbs.twimg.com/amplify_video_thumb/1511598922699280393/img/tsb4wkkER10GGp2N.jpg',
              url: 'https://t.co/1RazM3wtzt',
              display_url: 'pic.twitter.com/1RazM3wtzt',
              expanded_url: 'https://twitter.com/mancityIndo/status/1511605894018404352/video/1',
              type: 'video',
              sizes: {
                thumb: {
                  w: 150,
                  h: 150,
                  resize: 'crop'
                },
                small: {
                  w: 680,
                  h: 680,
                  resize: 'fit'
                },
                large: {
                  w: 1080,
                  h: 1080,
                  resize: 'fit'
                },
                medium: {
                  w: 1080,
                  h: 1080,
                  resize: 'fit'
                }
              },
              video_info: {
                aspect_ratio: [
                  1,
                  1
                ],
                duration_millis: 163560,
                variants: [
                  {
                    bitrate: 832000,
                    content_type: 'video/mp4',
                    url: 'https://video.twimg.com/amplify_video/1511598922699280393/vid/540x540/ZNf6a2Ia0GiuZAPw.mp4?tag=14'
                  },
                  {
                    bitrate: 432000,
                    content_type: 'video/mp4',
                    url: 'https://video.twimg.com/amplify_video/1511598922699280393/vid/320x320/t5pbK4cLHWAt118M.mp4?tag=14'
                  },
                  {
                    content_type: 'application/x-mpegURL',
                    url: 'https://video.twimg.com/amplify_video/1511598922699280393/pl/rn9YZ1lonc3uDnkf.m3u8?tag=14&container=fmp4'
                  },
                  {
                    bitrate: 1280000,
                    content_type: 'video/mp4',
                    url: 'https://video.twimg.com/amplify_video/1511598922699280393/vid/720x720/SqujL5i7dIzscTMy.mp4?tag=14'
                  }
                ]
              },
              additional_media_info: {
                title: '',
                description: '',
                embeddable: true,
                monetizable: false
              }
            }
          ]
        },
        metadata: {
          iso_language_code: 'in',
          result_type: 'recent'
        },
        source: '<a href="https://studio.twitter.com" rel="nofollow">Twitter Media Studio</a>',
        in_reply_to_status_id: null,
        in_reply_to_status_id_str: null,
        in_reply_to_user_id: null,
        in_reply_to_user_id_str: null,
        in_reply_to_screen_name: null,
        user: {
          id: 1579902524,
          id_str: '1579902524',
          name: 'Manchester City',
          screen_name: 'mancityIndo',
          location: 'Stadion Etihad',
          description: 'Akun resmi Twitter berbahasa Indonesia Manchester City Football Club',
          url: 'https://t.co/wioeEDLYDZ',
          entities: {
            url: {
              urls: [
                {
                  url: 'https://t.co/wioeEDLYDZ',
                  expanded_url: 'http://id.mancity.com',
                  display_url: 'id.mancity.com',
                  indices: [
                    0,
                    23
                  ]
                }
              ]
            },
            description: {
              urls: []
            }
          },
          protected: false,
          followers_count: 83465,
          friends_count: 126,
          listed_count: 130,
          created_at: 'Tue Jul 09 09:25:32 +0000 2013',
          favourites_count: 5890,
          utc_offset: null,
          time_zone: null,
          geo_enabled: true,
          verified: true,
          statuses_count: 55304,
          lang: null,
          contributors_enabled: false,
          is_translator: false,
          is_translation_enabled: false,
          profile_background_color: '060606',
          profile_background_image_url: 'http://abs.twimg.com/images/themes/theme1/bg.png',
          profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme1/bg.png',
          profile_background_tile: false,
          profile_image_url: 'http://pbs.twimg.com/profile_images/1435105347555848194/qUzCPbrA_normal.jpg',
          profile_image_url_https: 'https://pbs.twimg.com/profile_images/1435105347555848194/qUzCPbrA_normal.jpg',
          profile_banner_url: 'https://pbs.twimg.com/profile_banners/1579902524/1646688073',
          profile_link_color: '81B2D5',
          profile_sidebar_border_color: '000000',
          profile_sidebar_fill_color: 'DDEEF6',
          profile_text_color: '333333',
          profile_use_background_image: true,
          has_extended_profile: false,
          default_profile: false,
          default_profile_image: false,
          following: null,
          follow_request_sent: null,
          notifications: null,
          translator_type: 'none',
          withheld_in_countries: []
        },
        geo: null,
        coordinates: null,
        place: null,
        contributors: null,
        is_quote_status: false,
        retweet_count: 4,
        favorite_count: 18,
        favorited: false,
        retweeted: false,
        possibly_sensitive: false,
        lang: 'in'
      },
      is_quote_status: false,
      retweet_count: 4,
      favorite_count: 0,
      favorited: false,
      retweeted: false,
      possibly_sensitive: false,
      lang: 'in'
    },
    {
      created_at: 'Wed Apr 06 08:54:20 +0000 2022',
      id: 1511628360253907000,
      id_str: '1511628360253906950',
      text: 'RT @Atletico: Momento fofura da festa: o Lorenzo, filho do Ademir, gostou da medalha e fez novos amigos no vestiário! 🖤🤍 https://t.co/QKKfj…',
      truncated: false,
      entities: {
        hashtags: [],
        symbols: [],
        user_mentions: [
          {
            screen_name: 'Atletico',
            name: 'Atlético 😷',
            id: 90676816,
            id_str: '90676816',
            indices: [
              3,
              12
            ]
          }
        ],
        urls: []
      },
      metadata: {
        iso_language_code: 'pt',
        result_type: 'recent'
      },
      source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
      in_reply_to_status_id: null,
      in_reply_to_status_id_str: null,
      in_reply_to_user_id: null,
      in_reply_to_user_id_str: null,
      in_reply_to_screen_name: null,
      user: {
        id: 909207214166085600,
        id_str: '909207214166085633',
        name: 'Pedro Augusto',
        screen_name: 'ptx136',
        location: 'Contagem, Brasil',
        description: 'Sigo cada dia como se fosse o último!!!',
        url: null,
        entities: {
          description: {
            urls: []
          }
        },
        protected: false,
        followers_count: 82,
        friends_count: 460,
        listed_count: 0,
        created_at: 'Sun Sep 17 00:07:46 +0000 2017',
        favourites_count: 13991,
        utc_offset: null,
        time_zone: null,
        geo_enabled: false,
        verified: false,
        statuses_count: 7449,
        lang: null,
        contributors_enabled: false,
        is_translator: false,
        is_translation_enabled: false,
        profile_background_color: 'F5F8FA',
        profile_background_image_url: null,
        profile_background_image_url_https: null,
        profile_background_tile: false,
        profile_image_url: 'http://pbs.twimg.com/profile_images/1482752789910634496/zgyNv2Bd_normal.jpg',
        profile_image_url_https: 'https://pbs.twimg.com/profile_images/1482752789910634496/zgyNv2Bd_normal.jpg',
        profile_banner_url: 'https://pbs.twimg.com/profile_banners/909207214166085633/1592264253',
        profile_link_color: '1DA1F2',
        profile_sidebar_border_color: 'C0DEED',
        profile_sidebar_fill_color: 'DDEEF6',
        profile_text_color: '333333',
        profile_use_background_image: true,
        has_extended_profile: true,
        default_profile: true,
        default_profile_image: false,
        following: null,
        follow_request_sent: null,
        notifications: null,
        translator_type: 'none',
        withheld_in_countries: []
      },
      geo: null,
      coordinates: null,
      place: null,
      contributors: null,
      retweeted_status: {
        created_at: 'Wed Apr 06 00:00:01 +0000 2022',
        id: 1511493895938580500,
        id_str: '1511493895938580485',
        text: 'Momento fofura da festa: o Lorenzo, filho do Ademir, gostou da medalha e fez novos amigos no vestiário! 🖤🤍 https://t.co/QKKfjgu992',
        truncated: false,
        entities: {
          hashtags: [],
          symbols: [],
          user_mentions: [],
          urls: [],
          media: [
            {
              id: 1511456697210052600,
              id_str: '1511456697210052620',
              indices: [
                107,
                130
              ],
              media_url: 'http://pbs.twimg.com/amplify_video_thumb/1511456697210052620/img/8onM9UDVtq22jPt9.jpg',
              media_url_https: 'https://pbs.twimg.com/amplify_video_thumb/1511456697210052620/img/8onM9UDVtq22jPt9.jpg',
              url: 'https://t.co/QKKfjgu992',
              display_url: 'pic.twitter.com/QKKfjgu992',
              expanded_url: 'https://twitter.com/Atletico/status/1511493895938580485/video/1',
              type: 'photo',
              sizes: {
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
                },
                large: {
                  w: 1280,
                  h: 720,
                  resize: 'fit'
                }
              }
            }
          ]
        },
        extended_entities: {
          media: [
            {
              id: 1511456697210052600,
              id_str: '1511456697210052620',
              indices: [
                107,
                130
              ],
              media_url: 'http://pbs.twimg.com/amplify_video_thumb/1511456697210052620/img/8onM9UDVtq22jPt9.jpg',
              media_url_https: 'https://pbs.twimg.com/amplify_video_thumb/1511456697210052620/img/8onM9UDVtq22jPt9.jpg',
              url: 'https://t.co/QKKfjgu992',
              display_url: 'pic.twitter.com/QKKfjgu992',
              expanded_url: 'https://twitter.com/Atletico/status/1511493895938580485/video/1',
              type: 'video',
              sizes: {
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
                },
                large: {
                  w: 1280,
                  h: 720,
                  resize: 'fit'
                }
              },
              video_info: {
                aspect_ratio: [
                  16,
                  9
                ],
                duration_millis: 29229,
                variants: [
                  {
                    bitrate: 832000,
                    content_type: 'video/mp4',
                    url: 'https://video.twimg.com/amplify_video/1511456697210052620/vid/640x360/UFShCyd9E-_-gWXO.mp4?tag=14'
                  },
                  {
                    bitrate: 2176000,
                    content_type: 'video/mp4',
                    url: 'https://video.twimg.com/amplify_video/1511456697210052620/vid/1280x720/Ek2J2HF3AXqaWMN5.mp4?tag=14'
                  },
                  {
                    bitrate: 288000,
                    content_type: 'video/mp4',
                    url: 'https://video.twimg.com/amplify_video/1511456697210052620/vid/480x270/wjtnRcAZNznYI4bg.mp4?tag=14'
                  },
                  {
                    content_type: 'application/x-mpegURL',
                    url: 'https://video.twimg.com/amplify_video/1511456697210052620/pl/NfpZmnF1kZx-EZKN.m3u8?tag=14&container=fmp4'
                  }
                ]
              },
              additional_media_info: {
                title: '',
                description: '',
                embeddable: true,
                monetizable: false
              }
            }
          ]
        },
        metadata: {
          iso_language_code: 'pt',
          result_type: 'recent'
        },
        source: '<a href="https://studio.twitter.com" rel="nofollow">Twitter Media Studio</a>',
        in_reply_to_status_id: null,
        in_reply_to_status_id_str: null,
        in_reply_to_user_id: null,
        in_reply_to_user_id_str: null,
        in_reply_to_screen_name: null,
        user: {
          id: 90676816,
          id_str: '90676816',
          name: 'Atlético 😷',
          screen_name: 'Atletico',
          location: 'Belo Horizonte, Minas Gerais',
          description: 'Twitter Oficial do Clube Atlético Mineiro | https://t.co/ArdRHE0KYJ | https://t.co/rPebkOzQWz | https://t.co/gvlkQS7VFF',
          url: 'https://t.co/JfN9YHaldD',
          entities: {
            url: {
              urls: [
                {
                  url: 'https://t.co/JfN9YHaldD',
                  expanded_url: 'http://www.atletico.com.br',
                  display_url: 'atletico.com.br',
                  indices: [
                    0,
                    23
                  ]
                }
              ]
            },
            description: {
              urls: [
                {
                  url: 'https://t.co/ArdRHE0KYJ',
                  expanded_url: 'http://fb.com/atletico',
                  display_url: 'fb.com/atletico',
                  indices: [
                    44,
                    67
                  ]
                },
                {
                  url: 'https://t.co/rPebkOzQWz',
                  expanded_url: 'http://instagr.am/atletico',
                  display_url: 'instagr.am/atletico',
                  indices: [
                    70,
                    93
                  ]
                },
                {
                  url: 'https://t.co/gvlkQS7VFF',
                  expanded_url: 'http://youtube.com/tvgaloweb',
                  display_url: 'youtube.com/tvgaloweb',
                  indices: [
                    96,
                    119
                  ]
                }
              ]
            }
          },
          protected: false,
          followers_count: 2445394,
          friends_count: 17,
          listed_count: 2085,
          created_at: 'Tue Nov 17 17:34:41 +0000 2009',
          favourites_count: 4163,
          utc_offset: null,
          time_zone: null,
          geo_enabled: true,
          verified: true,
          statuses_count: 76225,
          lang: null,
          contributors_enabled: false,
          is_translator: false,
          is_translation_enabled: false,
          profile_background_color: '131516',
          profile_background_image_url: 'http://abs.twimg.com/images/themes/theme14/bg.gif',
          profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme14/bg.gif',
          profile_background_tile: false,
          profile_image_url: 'http://pbs.twimg.com/profile_images/1478357866071351298/hpzotAoo_normal.jpg',
          profile_image_url_https: 'https://pbs.twimg.com/profile_images/1478357866071351298/hpzotAoo_normal.jpg',
          profile_banner_url: 'https://pbs.twimg.com/profile_banners/90676816/1648177339',
          profile_link_color: 'C4A312',
          profile_sidebar_border_color: '000000',
          profile_sidebar_fill_color: 'EFEFEF',
          profile_text_color: '333333',
          profile_use_background_image: false,
          has_extended_profile: true,
          default_profile: false,
          default_profile_image: false,
          following: null,
          follow_request_sent: null,
          notifications: null,
          translator_type: 'regular',
          withheld_in_countries: []
        },
        geo: null,
        coordinates: null,
        place: null,
        contributors: null,
        is_quote_status: false,
        retweet_count: 288,
        favorite_count: 3971,
        favorited: false,
        retweeted: false,
        possibly_sensitive: false,
        lang: 'pt'
      },
      is_quote_status: false,
      retweet_count: 288,
      favorite_count: 0,
      favorited: false,
      retweeted: false,
      lang: 'pt'
    }
  ] as unknown as TweetV1[]

  return tweets
}

it('should show list of tweets ', async () => {
  const tweets = data()
  render(<Tweets tweets={tweets} fetchMore={() => {}} />)
  expect(screen.getAllByTestId('tweet')).toHaveLength(15)
})

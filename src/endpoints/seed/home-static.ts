import type { RequiredDataFromCollectionSlug } from 'payload'

// Used for pre-seeded content so that the homepage is not empty
export const homeStatic: RequiredDataFromCollectionSlug<'pages'> = {
  slug: 'home',
  _status: 'published',
  hero: {
    type: 'lowImpact',
    richText: {
      root: {
        type: 'root',
        children: [
          {
            type: 'heading',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'ಶಿವಮೊಗ್ಗ ಜಿಲ್ಲಾ ಬ್ರಾಹ್ಮಣ ಮಹಾಸಭಾ Gallery',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            tag: 'h1',
            version: 1,
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
      },
    },
  },
  meta: {
    description: 'All latest news on ಶಿವಮೊಗ್ಗ ಜಿಲ್ಲಾ ಬ್ರಾಹ್ಮಣ ಮಹಾಸಭಾ ',
    title: 'ZBMS Gallery',
  },
  title: 'Home',
  layout: [],
}

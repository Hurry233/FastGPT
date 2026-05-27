import type { Article, BreadcrumbList, WithContext } from 'schema-dts';

export function generateArticleSchema(params: {
  title: string;
  description: string;
  url: string;
  dateModified?: Date;
  lang: string;
}): WithContext<Article> {
  const { title, description, url, dateModified, lang } = params;

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url,
    inLanguage: lang,
    dateModified: dateModified?.toISOString(),
    author: {
      '@type': 'Organization',
      name: 'GPTW Agent',
      url: 'https://gptw.top'
    },
    publisher: {
      '@type': 'Organization',
      name: 'GPTW Agent',
      logo: {
        '@type': 'ImageObject',
        url: 'https://gptw.top/logo.svg'
      }
    }
  };
}

export function generateBreadcrumbSchema(params: {
  items: Array<{ name: string; url: string }>;
}): WithContext<BreadcrumbList> {
  const { items } = params;

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}

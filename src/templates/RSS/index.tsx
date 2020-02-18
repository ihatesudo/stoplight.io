import * as React from 'react';
import { withRouteData } from 'react-static';
import RSS from 'rss';

export interface IListItem {
  title: string;
  subtitle: string;
  listSubtitle: string;
  image: string;
  titleImage?: string;
  listImage?: string;
  href: string;
  author: any;
  publishedDate: string;
  backgroundSize?: 'cover' | 'contain';
  color?: string;
  item?: any;
}

export interface IList {
  items: any;
}

export const RSSPage = items => {
  const allItems: any = Object.values(items);
  const sortedItems = allItems.sort((a, b) => parseFloat(b.publishedDate) - parseFloat(a.publishedDate)).slice(0, 19);
  const feedOptions = {
    title: 'Stoplight.io',
    feed_url: 'https://stoplight.io/blog/',
    site_url: 'https://stoplight.io/',
  };

  const feed = new RSS(feedOptions);
  sortedItems.forEach(i => feed.item(i));

  return <div>{feed.xml({ indent: true })}</div>;
};

export default withRouteData(RSSPage);

import * as React from 'react';
import Page, { SectionHeading } from '~/components/Page';
import { H3 } from '~/components/Typography'
import { Bookmark } from '~/types'
import BookmarksList from '~/components/Bookmarks'
import { fetcher, swr } from '~/api';
import { BOOKMARKS } from '~/api/queries';

interface Props {
  bookmarks?: Bookmark[]
}

function Bookmarks({ bookmarks }: Props) {
  const { data, error } = swr(BOOKMARKS, {}, bookmarks)

  if (error) return null

  if (!data) return null

  return (
    <Page withHeader>
      <SectionHeading data-cy="bookmarks">
        <H3>Bookmarks</H3>
        <BookmarksList bookmarks={data} />
      </SectionHeading>
    </Page>
  );
}

export async function getStaticProps() {
  const bookmarksQuery = await fetcher(BOOKMARKS)
  const bookmarks = bookmarksQuery ? bookmarksQuery.bookmarks : null
  return { props: { bookmarks }}
}

export default Bookmarks
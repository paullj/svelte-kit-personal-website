<script lang="ts">
  import Pagination from '$lib/components/Pagination.svelte';
  import PostList from '$lib/components/PostList.svelte';
  import SvelteSEO from 'svelte-seo';

  import home from '$content/home.yaml';
  import seo from '$content/seo.yaml';
  import { page } from '$app/stores';

  import type { PageData } from './$types';
  import type { Post } from '$lib/types/Post';
  // import { sortBy } from '$lib/stores/sortBy';
  // import { sortMap } from '$lib/sorting';
  import ListLayout from '$lib/components/ListLayout.svelte';
  import { ogImageDimmensions } from '$lib/config';

  export let data: PageData;

  let posts: Post[] = data.posts;
  // .sort(sortMap[$sortBy]) ?? [];
  let totalPosts = data.totalPosts ?? posts.length;

  // if (data.sortBy) {
  //   $sortBy = data.sortBy;
  // }
  const seoTitle = `${seo.title ?? home.title}`;
  const seoDescription = seo.description ?? home.subtitle;
</script>

<SvelteSEO
  title={seoTitle}
  description={seoDescription}
  keywords={seo.keywords?.join(', ')}
  openGraph={{
    title: seoTitle,
    description: seoDescription,
    url: seo.url ?? $page.url.toString(),
    type: 'website',
    images: [
      {
        url: `${seo.url ?? $page.url.hostname}/api/image.png`,
        width: ogImageDimmensions.width,
        height: ogImageDimmensions.height,
        alt: `${seo.title ?? home.title} Open Graph image`
      }
    ]
  }}
/>

<ListLayout>
  <PostList slot="posts" {posts} />
  <Pagination slot="pagination" currentPage={1} {totalPosts} />
</ListLayout>

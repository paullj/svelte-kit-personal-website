<script lang="ts">
  import Pagination from '$lib/components/Pagination.svelte';
  import PostList from '$lib/components/PostList.svelte';

  import type { PageData } from './$types';
  import type { Post } from '$lib/types/Post';
  // import { sortBy } from '$lib/stores/sortBy';
  // import { sortMap } from '$lib/sorting';
  import ListLayout from '$lib/components/ListLayout.svelte';

  export let data: PageData;

  let posts: Post[] = data.posts;
  // .sort(sortMap[$sortBy]) ?? [];
  let totalPosts = data.totalPosts ?? posts.length;

  // if (data.sortBy) {
  //   $sortBy = data.sortBy;
  // }
</script>

<ListLayout>
  <PostList slot="posts" {posts} />
  <Pagination slot="pagination" currentPage={1} {totalPosts} />
</ListLayout>

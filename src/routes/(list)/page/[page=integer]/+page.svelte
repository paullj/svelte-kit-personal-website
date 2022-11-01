<script lang="ts">
  import { sortBy } from '$lib/stores/sortBy';
  import Pagination from '$lib/components/Pagination.svelte';
  import PostList from '$lib/components/PostList.svelte';

  import type { PageData } from './$types';
  import type { Post } from '$lib/types/Post';

  import { sortMap } from '$lib/sorting';
  import ListLayout from '$lib/components/ListLayout.svelte';

  export let data: PageData;

  let posts: Post[] = data.posts.sort(sortMap[$sortBy]) ?? [];
  let totalPosts = data.totalPosts ?? posts.length;
  let currentPage = data.currentPage ?? 1;

  if (data.sortBy) {
    $sortBy = data.sortBy;
  }
</script>

<ListLayout>
  <h3 slot="title" class="flex flex-row items-center">
    Posts
    <span class="ml-2 font-sans text-sm font-light">
      (Page {currentPage})
    </span>
  </h3>
  <PostList slot="posts" {posts} />
  <Pagination slot="pagination" {currentPage} {totalPosts} />
</ListLayout>

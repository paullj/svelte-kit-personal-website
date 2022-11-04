// How many posts to display in the post list
const postsPerPage = 5;
// How many other related posts to link to from a post
const maxRelatedPosts = 3;
// The minimum proportion or keywords that overlap with another post to be considered related
const relatedPostThreshold = 0.05;
// The maximum distance between the search term and post property
const searchResultTolerance = 2;
// Open graph image dimmensions
const ogImageDimmensions = {
  width: 1200,
  height: 630
};
// The GitHub user for this repository
const githubUser = 'paullj';
// The repository name
const githubRepo = 'svelte-kit-personal-website';

export {
  postsPerPage,
  maxRelatedPosts,
  searchResultTolerance,
  relatedPostThreshold,
  ogImageDimmensions,
  githubUser,
  githubRepo
};

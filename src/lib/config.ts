// How many posts to display in the post list
const postsPerPage = 5;
// How many other related posts to link to from a post
const maxRelatedPosts = 3;
// The minimum proportion or keywords that overlap with another post to be considered related
const relatedPostThreshold = 0.05;
// The maximum distance between the search term and post property
const searchResultTolerance = 2;
//
const ogImageDimmensions = {
  width: 800,
  height: 800
};
// The GitHub user for this repository
const githubUser = 'paullj';
// The repository name
const githubRepo = 'paullj.github.io';

export {
  postsPerPage,
  maxRelatedPosts,
  searchResultTolerance,
  relatedPostThreshold,
  ogImageDimmensions,
  githubUser,
  githubRepo
};
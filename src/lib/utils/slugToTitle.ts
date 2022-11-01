const slugToTitle = (slug: string) =>
	slug
		.split('-')
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ');

export { slugToTitle };

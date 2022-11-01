const toSlug = (str: string): string => {
	return str
		.toLowerCase()
		.replace(/\s/g, '_')
		.replace(/[^A-z0-9_-]/g, '');
};

export { toSlug };

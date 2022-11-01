import { parseMarkdown } from '$lib/parsers/parseMarkdown';
import type { About } from '$lib/types/About';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  try {
    const data: About = (await import('$content/about.yaml')).default;
    if (!data) {
      throw redirect(301, `/`);
    }

    data.summary = await parseMarkdown(data.summary);

    data.sections = Object.fromEntries(
      await Promise.all(
        Object.entries(data.sections).map(async ([heading, entries]) => {
          const parsedEntries = await Promise.all(
            entries.map(async ({ description, ...entry }) => ({
              ...entry,
              description: await parseMarkdown(description)
            }))
          );
          return [heading, parsedEntries];
        })
      )
    );

    return {
      ...data
    };
  } catch {
    throw redirect(301, `/`);
  }
};

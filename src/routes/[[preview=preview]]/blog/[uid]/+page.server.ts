import { createClient } from '$lib/prismicio';

export async function load({ params, fetch, cookies }) {
  try {
      // Check if UID is available and valid (it should be a string)
     
      
        params.uid='mastering-javascript-animations'
     

      const client = createClient({ fetch, cookies });

      // Debugging: log the UID to ensure it is a string and valid
      console.log('Loading blog post with UID:', params.uid);
      
      const page = await client.getByUID('blogpost', params.uid);

     

      return {
        page,
        title: page.data.title || 'Untitled',
        meta_description: page.data.meta_description || '',
        meta_title: page.data.meta_title || page.data.title || 'Untitled',
        meta_image: page.data.meta_image || ''
    };

  } catch (err) {
      console.error('Error loading page:', err);

      // You can return an empty fallback or an error message depending on your needs
      return {
      
        page: null,
        title: 'Error',
        meta_description: '',
        meta_title: 'Error',
        meta_image: ''
    };
  }
}


export async function entries() {
    const client = createClient();

    // Fetch all blogposts from Prismic
    const pages = await client.getAllByType('blogpost');

    return pages.map((page) => {
        return { uid: page.uid };
    });
}

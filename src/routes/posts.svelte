<script context="module">
    import Client from './../../utils/prismic.client';
    import Prismic from '@prismicio/client';
    import PrismicDom from 'prismic-dom';
  
    export async function load() {
      const posts = await Client.query(
        Prismic.Predicates.at('document.type', 'post')
      );
      return {
        props: {
          posts,
        }
      };
    }
  </script>
  
  <script>
    export let posts;
  </script>
  
  <main>
    <div class="home">
        <div class="container">
            {#each posts.results as post}
            <a href={`/post/${post.uid}`} class="post py-4 flex flex-wrap justify-between border-b border-gray-200">
                <p class="font-recoleta text-xl">{@html PrismicDom.RichText.asText(post.data.title)}</p>
                <p>{post.first_publication_date}</p>
                <div class="tags flex items-center w-full mt-4">
                    {#each post.tags as tag}
                    <div class="tag text-sm mr-2 text-gray-400">{tag}</div>
                    {/each}
                </div>
            </a>
            {/each}
        </div>
    </div>
  </main>
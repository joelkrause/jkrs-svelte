<script context="module">
  import Client from './../../../utils/prismic.client';
  import moment from 'moment'
  import PrismicDom from 'prismic-dom';

  export async function load(ctx) {
    let slug = ctx.page.params.slug;
    const document = await Client.getByUID('post',slug);
    return {
      props: {
        document,
      }
    };
  }
</script>

<script>
  export let document;
</script>
  
<main class="post">
  <div class="post-hero py-8 lg:py-24">
    <div class="container">
      <h1 class="text-6xl font-bold py-8 font-recoleta">{@html PrismicDom.RichText.asText(document.data.title)}</h1>
      <div class="dates flex items-center font-recoleta">
        <p class="mr-4">Published {moment(document.first_publication_date).fromNow()}</p>
        <p>Updated {moment(document.last_publication_date).fromNow()}</p>
      </div>
      <div class="font-recoleta text-2xl py-8 text-gray-400 leading-10">
        {@html PrismicDom.RichText.asHtml(document.data.post_excerpt)}
      </div>
    </div>
  </div>
  <div class="post-hero-image mb-8 lg:mb-24">
    <img class="w-full" src={document.data.post_hero.url} alt={document.data.post_hero.alt ? document.data.post_hero.alt : 'alt text here'}/>
  </div>
  <div class="post-content mb-8 lg:mb-24">
    <div class="container">
      {@html PrismicDom.RichText.asHtml(document.data.body)}
    </div>
  </div>
  <pre>{JSON.stringify(document,null,2)}</pre>
</main>
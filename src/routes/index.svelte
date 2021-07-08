<script context="module">
    import Client from './../../utils/prismic.client';
    import PrismicDom from 'prismic-dom';
  
    export async function load() {
      const document = await Client.getByUID('home','home');
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
  
  <main>
    <div class="home">
        <div class="hero pt-16">
            <div class="container">
                <div class="grid grid-cols-12">
                    <div class="col-span-4">
                        <img src={document.data.hero_image.url} alt={document.data.hero_image.alt ? document.data.hero_image.alt : 'alt text here'}/>
                    </div>
                    <div class="col-span-6 col-start-6 flex flex-col justify-center">
                        {@html PrismicDom.RichText.asHtml(document.data.hero_content)}
                    </div>
                </div>
            </div>
        </div>
      <h1>Homepage</h1>
      <pre>{JSON.stringify(document, null, 2)}</pre>
    </div>
  </main>
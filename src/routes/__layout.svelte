<script>
import "../app.postcss";
import Header from '../components/global/Header.svelte'
</script>

<Header />
<slot></slot>

<style>
    @font-face {
    font-family: 'Recoleta';
    font-style: normal;
    font-weight: normal;
    src: url('/fonts/Recoleta-Regular.eot');
    src:
        url('/fonts/Recoleta-Regular.eot?#iefix') format('embedded-opentype'),
        url('/fonts/Recoleta-Regular.ttf') format('truetype'),
        url('/fonts/Recoleta-Regular.woff') format('woff'),
        url('/fonts/Recoleta-Regular.woff2') format('woff2');
}
@font-face {
    font-family: 'Recoleta';
    font-style: normal;
    font-weight: 700;
    src: url('/fonts/Recoleta-Bold.eot');
    src:
        url('/fonts/Recoleta-Bold.eot?#iefix') format('embedded-opentype'),
        url('/fonts/Recoleta-Bold.ttf') format('truetype'),
        url('/fonts/Recoleta-Bold.woff') format('woff'),
        url('/fonts/Recoleta-Bold.woff2') format('woff2');
}
</style>
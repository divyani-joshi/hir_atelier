import React from 'react'
import Hedaer from '../common/Hedaer'
import Footer from '../common/Footer'

function Blog() {
  return (
    <div>
      <Hedaer/>
      <BlogContent/>
      <Footer/>
    </div>
  )
}

function BlogContent(){
    return(
        <>
        <div className='bg-background text-on-background font-body-md overflow-x-hidden'>
            <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
  {/* Hero Section */}
   <section className="pt-20 mt-10 px-margin-mobile md:px-margin-desktop text-center">
    <span className="font-label-caps text-label-caps text-primary mb-4 block">Blog</span>
    <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg mb-6 max-w-4xl mx-auto">Where Creativity Meets Inspiration</h1>
    <p className="font-body-lg text-body-lg text-secondary max-w-2xl mx-auto mb-12">Explore fashion insights, creative journeys, and the artistry behind every handcrafted design.</p>
    <div className="h-[1px] w-24 bg-primary-container mx-auto" />
  </section>
  {/* Featured Story (Asymmetric Layout) */}
  <section className="py-stack-md md:py-stack-xl grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
    <div className="md:col-span-7 image-zoom overflow-hidden rounded-xl bg-surface-container">
      <img alt="Detailed Henna" className="w-full aspect-[4/3] object-cover transition-transform duration-700" data-alt="A macro high-fashion photograph of intricate henna patterns being applied to a bride's hand. The lighting is soft, warm, and cinematic, emphasizing the texture of the paste against ivory skin. The setting is a minimalist luxury studio with champagne gold accents and soft beige backgrounds. The atmosphere is quiet, focused, and deeply artistic, reflecting a high-end editorial bridal aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1GwMAMN8B6S5-5vxPFx6ZDzwtQbTY2ot766yTF_WEF3IwULlOyfgdZtZUDoq0ojCAVAsP0uwe0emnQtOcmjdNiRNcehfRE0J7kHVdxo3JmmsB-zPO7Hw369W4m-WV0RMQ7SZH17ECpt1eb9kTFB2npztD53n7KxvZEc4NZDZH2Jy0o4YckjPGaPW_pE9x2Dwddo7JZ2j_u-9VDYLhDcjGCo_eRfCJq8sqT2OqNhCe1vjZzZxzTenrx5G7OvBosslx1t5o23b1tsY" />
    </div>
    <div className="md:col-span-5 md:pl-12">
      <span className="font-label-caps text-label-caps text-secondary mb-4 block">Artistry • 12 Min Read</span>
      <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface mb-6 leading-tight">The Art of Modern Henna: A Fusion of Heritage and Minimalism</h2>
      <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">Discover how we are redefining traditional techniques through a lens of contemporary luxury and architectural precision.</p>
      <a className="inline-flex items-center gap-2 group" href="#">
        <span className="font-label-caps text-label-caps text-primary border-b border-primary/20 group-hover:border-primary transition-colors pb-1">Read the Article</span>
        <span className="material-symbols-outlined text-primary text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
      </a>
    </div>
  </section>
  {/* Article Grid */}
  <section className="pb-stack-xl">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-gutter gap-y-16">
      {/* Post 1 */}
      <article className="group">
        <div className="image-zoom overflow-hidden rounded-xl bg-surface-container mb-6">
          <img alt="Couture Behind the Scenes" className="w-full aspect-[3/4] object-cover transition-transform duration-700" data-alt="A candid, editorial-style black and white photograph capturing a quiet moment in a high-fashion atelier. A designer is seen adjusting silk fabric on a mannequin in a room filled with natural sunlight and tall windows. The aesthetic is extremely clean and minimalist, highlighting the craftsmanship and textures of the textiles. The mood is sophisticated and exclusive, characteristic of a premium European luxury house." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5xoYtJfiCZb-VEBk5ClFjoTOwNKUVNREQN13GQTsk4Rv2gddi6tUb_LEPzql7NasSMHgPw-lDba6OrMHlpJeKEFtLqStRYD_5dgdzr9dqXq7DCtauQrnbpGpjK2MzvuVgsIYQGN-ttDOh79EFyP41MTs6ZWf-AmDK-Em4E9_CS82zOE7gDdLtjl3pRDAyP9HAkCEmfR-QRp7Pmvc-X7xunAwr6JeYPX9AoKYiBpOK_StCKQzuRocJv1TsulvFqdcOBrahHeeyHFQ" />
        </div>
        <span className="font-label-caps text-[10px] tracking-widest uppercase text-secondary mb-3 block">Studio News</span>
        <h3 className="font-headline-md text-headline-md text-on-surface mb-4 group-hover:text-primary transition-colors">Couture Behind the Scenes: The Spring 2024 Collection</h3>
        <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">An exclusive look into our process, from the initial sketches to the final hand-stitched details of our latest bridal series.</p>
      </article>
      {/* Post 2 */}
      <article className="group">
        <div className="image-zoom overflow-hidden rounded-xl bg-surface-container mb-6">
          <img alt="Seasonal Trends" className="w-full aspect-[3/4] object-cover transition-transform duration-700" data-alt="A luxury flat-lay composition of high-end bridal accessories including champagne gold jewelry, a silk veil, and delicate perfume bottles. The background is a textured ivory white surface. The lighting is high-key and airy, creating a soft, ethereal atmosphere. The color palette is dominated by creams, beiges, and soft gold tones, evoking a sense of timeless elegance and modern sophistication." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAhNro-20WkRs0eXpixWb8TzNZkvCq8dPLTrjs-Nmb0W-g_19kIPrFU4QO6Y4UmPDmUI2ivkfrnaWhdbp-hcEP6OoBUnuWzutbZumHBAzUG8QGm-Ehtu6P2pWCFH42UIlzxXtyPpUb1r1ROcyATnp7DPhTH1ySfBvcTebj3SGlXvoYdYh1JketH7283N9-imem3uc66UuKfUvRftSlgry7jZ0g3lf0YTHvHIjRTMYd1iEnP_CUqw3-yeBFrB4YZlwQoc0Wpgfk1Yg" />
        </div>
        <span className="font-label-caps text-[10px] tracking-widest uppercase text-secondary mb-3 block">Trends</span>
        <h3 className="font-headline-md text-headline-md text-on-surface mb-4 group-hover:text-primary transition-colors">Champagne &amp; Silk: Seasonal Trends for the Discerning Bride</h3>
        <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">Exploring the shift towards monochromatic palettes and effortless silhouettes for the upcoming bridal season.</p>
      </article>
      {/* Post 3 */}
      <article className="group">
        <div className="image-zoom overflow-hidden rounded-xl bg-surface-container mb-6">
          <img alt="Artistry Perspective" className="w-full aspect-[3/4] object-cover transition-transform duration-700" data-alt="A portrait of a serene woman in profile, wearing an avant-garde bridal headpiece that mimics delicate floral architecture. The background is a soft beige tone with artistic shadows cast from window panes. The lighting is dramatic yet soft, focusing on the refined features and the intricate craftsmanship of the headpiece. The overall style is high-fashion editorial, blending modern minimalist aesthetics with classical beauty." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPyUeLzm5Y1w5iynkY-d30OIFkV46uJWNpYV-K8JScDIbxGKiG8j5Mfczhs0HzSayjL11OEObP-ajATSgFK7EhLRwnCSDBVoAjBONO3TxOtKkZf0ZE0gkqagpf5OqQQo3iGed3UBGETXx5ppBL_4nROi8ci5pzB_7Fn4WEu8jKfr7Swm4xK4YXzn2X92BbCCYmYgFXkEsV0y1mUOSTZKRnHgpP4duqDhFwfWH6_xUl-_vdw9eJUeaPFXVYsUPqT65IvEkOjbB4dl0" />
        </div>
        <span className="font-label-caps text-[10px] tracking-widest uppercase text-secondary mb-3 block">Artistry</span>
        <h3 className="font-headline-md text-headline-md text-on-surface mb-4 group-hover:text-primary transition-colors">The Architectural Veil: Redefining Bridal Geometry</h3>
        <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">How structural elements are finding their way into traditional bridal accessories to create bold, modern statements.</p>
      </article>
    </div>
  </section>
  {/* Newsletter (Bento-style Glass Card) */}
  <section className="mb-stack-xl">
    <div className="bg-surface-container-low rounded-3xl p-12 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12">
      <div className="max-w-xl relative z-10">
        <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface mb-6">Join the Atelier <span className="italic">Inner Circle</span></h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant">Receive seasonal lookbooks, exclusive studio updates, and priority booking windows directly in your inbox.</p>
      </div>
      <div className="w-full md:w-auto relative z-10">
        <form className="flex flex-col md:flex-row gap-4">
          <div className="relative">
            <input className="bg-surface border-outline-variant focus:border-primary focus:ring-0 rounded-full px-8 py-4 w-full md:w-80 font-body-md" placeholder="Email Address" type="email" />
          </div>
          <button className="bg-secondary text-on-secondary px-10 py-4 rounded-full font-label-caps text-label-caps hover:scale-[1.02] transition-transform active:scale-95">Subscribe</button>
        </form>
      </div>
      {/* Decorative abstract shape */}
      <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-primary-container/20 rounded-full blur-[100px]" />
    </div>
  </section>
</main>
</div>
        </>
    )
}

export default Blog

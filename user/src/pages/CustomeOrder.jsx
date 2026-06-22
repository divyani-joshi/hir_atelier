import React from 'react'
import Hedaer from '../common/Hedaer'
import Footer from '../common/Footer'

function CustomeOrder() {
  return (
    <div>
        <Hedaer/>
      <CustomeContent/>
      <Footer/>
    </div>
  )
}

function CustomeContent(){
    return(
        <div className='bg-background text-on-background font-body-md overflow-x-hidden'>
 
   <section className="pt-20 mt-10 px-margin-mobile md:px-margin-desktop text-center">
    <span className="font-label-caps text-label-caps text-primary mb-4 block">Custom Orders</span>
    <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg mb-6 max-w-4xl mx-auto">Bring Your Vision to Life</h1>
    <p className="font-body-lg text-body-lg text-secondary max-w-2xl mx-auto mb-12">Every custom creation is thoughtfully crafted to reflect your personality, style, and special moments.</p>
    <div className="h-[1px] w-24 bg-primary-container mx-auto" />
  </section>
  <section className="py-stack-xl px-margin-desktop max-w-container-max mx-auto reveal">
    <div className="text-center mb-16">
      <h2 className="font-headline-xl text-headline-xl">How It Works</h2>
    </div>
    <div className="relative flex flex-col md:flex-row justify-between items-start gap-gutter">
      {/* Connector Line */}
      <div className="hidden md:block absolute top-[44px] left-0 w-full h-[0.5pt] bg-outline-variant z-0" />
      <div className="relative z-10 flex flex-col items-center text-center flex-1 group">
        <div className="w-20 h-20 rounded-full bg-surface-container-low border border-outline-variant flex items-center justify-center mb-6 group-hover:border-primary transition-colors">
          <span className="material-symbols-outlined text-primary text-3xl">lightbulb</span>
        </div>
        <h3 className="font-label-caps text-label-caps mb-2">Idea</h3>
        <p className="text-body-md text-on-surface-variant max-w-[200px]">Initial concept and custom request submission.</p>
      </div>
      <div className="relative z-10 flex flex-col items-center text-center flex-1 group">
        <div className="w-20 h-20 rounded-full bg-surface-container-low border border-outline-variant flex items-center justify-center mb-6 group-hover:border-primary transition-colors">
          <span className="material-symbols-outlined text-primary text-3xl">mood</span>
        </div>
        <h3 className="font-label-caps text-label-caps mb-2">Inspiration</h3>
        <p className="text-body-md text-on-surface-variant max-w-[200px]">Moodboarding and aesthetic alignment session.</p>
      </div>
      <div className="relative z-10 flex flex-col items-center text-center flex-1 group">
        <div className="w-20 h-20 rounded-full bg-surface-container-low border border-outline-variant flex items-center justify-center mb-6 group-hover:border-primary transition-colors">
          <span className="material-symbols-outlined text-primary text-3xl">forum</span>
        </div>
        <h3 className="font-label-caps text-label-caps mb-2">Consultation</h3>
        <p className="text-body-md text-on-surface-variant max-w-[200px]">One-on-one deep dive with our lead artisans.</p>
      </div>
      <div className="relative z-10 flex flex-col items-center text-center flex-1 group">
        <div className="w-20 h-20 rounded-full bg-surface-container-low border border-outline-variant flex items-center justify-center mb-6 group-hover:border-primary transition-colors">
          <span className="material-symbols-outlined text-primary text-3xl">draw</span>
        </div>
        <h3 className="font-label-caps text-label-caps mb-2">Crafting</h3>
        <p className="text-body-md text-on-surface-variant max-w-[200px]">Meticulous handwork and artisanal creation.</p>
      </div>
      <div className="relative z-10 flex flex-col items-center text-center flex-1 group">
        <div className="w-20 h-20 rounded-full bg-surface-container-low border border-outline-variant flex items-center justify-center mb-6 group-hover:border-primary transition-colors">
          <span className="material-symbols-outlined text-primary text-3xl">celebration</span>
        </div>
        <h3 className="font-label-caps text-label-caps mb-2">Delivery</h3>
        <p className="text-body-md text-on-surface-variant max-w-[200px]">Your masterpiece delivered for your special day.</p>
      </div>
    </div>
  </section>
  {/* Custom Order Form */}
  <section className="py-stack-xl bg-surface-container-low relative reveal" id="custom-form">
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary-container rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-tertiary-fixed rounded-full blur-3xl" />
    </div>
    <div className="px-margin-desktop max-w-5xl mx-auto relative z-10">
      <div className="glass p-12 rounded-3xl shadow-xl">
        <div className="mb-12">
          <h2 className="font-headline-xl text-headline-xl mb-4">Request Your Masterpiece</h2>
          <p className="font-body-md text-on-surface-variant">Fill out the details below to begin your bespoke journey with HiR Atelier.</p>
        </div>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-2">
            <label className="font-label-caps text-label-caps text-primary">Category</label>
            <select className="bg-surface-container-low border-outline-variant rounded-xl py-3 px-4 focus:ring-primary focus:border-primary">
              <option>Bridal Gown</option>
              <option>Evening Wear</option>
              <option>Traditional/Cultural</option>
              <option>Accessories</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-label-caps text-label-caps text-primary">Service Type</label>
            <select className="bg-surface-container-low border-outline-variant rounded-xl py-3 px-4 focus:ring-primary focus:border-primary">
              <option>Full Bespoke Design</option>
              <option>Design Modification</option>
              <option>Artisan Embroidery Only</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-label-caps text-label-caps text-primary">Event Type</label>
            <select className="bg-surface-container-low border-outline-variant rounded-xl py-3 px-4 focus:ring-primary focus:border-primary">
              <option>Wedding</option>
              <option>Engagement</option>
              <option>Gala / Red Carpet</option>
              <option>Other Special Occasion</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-label-caps text-label-caps text-primary">Budget Range</label>
            <select className="bg-surface-container-low border-outline-variant rounded-xl py-3 px-4 focus:ring-primary focus:border-primary">
              <option>$2,000 - $5,000</option>
              <option>$5,000 - $10,000</option>
              <option>$10,000 - $25,000</option>
              <option>$25,000+</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-label-caps text-label-caps text-primary">Full Name</label>
            <input className="bg-surface-container-low border-outline-variant rounded-xl py-3 px-4 focus:ring-primary focus:border-primary" placeholder="Evelyn Thorne" type="text" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-label-caps text-label-caps text-primary">Email Address</label>
            <input className="bg-surface-container-low border-outline-variant rounded-xl py-3 px-4 focus:ring-primary focus:border-primary" placeholder="evelyn@example.com" type="email" />
          </div>
          <div className="md:col-span-2 mt-4">
            <label className="font-label-caps text-label-caps text-primary mb-2 block">Upload Inspiration</label>
            <div className="border-2 border-dashed border-outline-variant rounded-2xl p-12 text-center bg-white/20 hover:bg-white/40 transition-colors cursor-pointer group">
              <span className="material-symbols-outlined text-4xl text-outline mb-4 group-hover:text-primary transition-colors">upload_file</span>
              <p className="text-body-md text-on-surface-variant">Drag and drop your moodboard, sketches, or reference photos here.</p>
              <p className="text-label-caps text-outline mt-2">Maximum file size: 20MB. Formats: JPG, PNG, PDF.</p>
            </div>
          </div>
          <div className="md:col-span-2 pt-6">
            <button className="w-full py-5 bg-inverse-surface text-white rounded-full font-label-caps text-label-caps tracking-widest hover:bg-on-surface transition-all" type="submit">
              Request Custom Design
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
  {/* Inspiration Gallery */}
  <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
  <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
    <div>
      <span className="uppercase tracking-[0.3em] text-sm text-[#8b6f47] block mb-3">
        Portfolio
      </span>
      <h2 className="text-5xl font-serif">
        Inspiration Gallery
      </h2>
    </div>

    <a
      href="#"
      className="uppercase tracking-[0.2em] text-sm text-[#8b6f47] border-b border-[#8b6f47] pb-1"
    >
      View Full Lookbook
    </a>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    
    {/* Card 1 */}
    <div className="group">
      <div className="aspect-[4/5] overflow-hidden rounded-2xl">
        <img
          src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
          alt="Botanical Drape"
          className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
        />
      </div>

      <div className="mt-4">
        <h4 className="text-2xl font-serif mb-1">
          Botanical Drape
        </h4>
        <p className="uppercase tracking-[0.2em] text-xs text-gray-500">
          Sketching Phase
        </p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="group">
      <div className="aspect-[4/5] overflow-hidden rounded-2xl">
        <img
          src="https://images.unsplash.com/photo-1515372039744-b8f02a3ae446"
          alt="Paisley Heritage"
          className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
        />
      </div>

      <div className="mt-4">
        <h4 className="text-2xl font-serif mb-1">
          Paisley Heritage
        </h4>
        <p className="uppercase tracking-[0.2em] text-xs text-gray-500">
          Artisan Embroidery
        </p>
      </div>
    </div>

    {/* Card 3 */}
    <div className="group">
      <div className="aspect-[4/5] overflow-hidden rounded-2xl">
        <img
          src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b"
          alt="Bridal Adornment"
          className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
        />
      </div>

      <div className="mt-4">
        <h4 className="text-2xl font-serif mb-1">
          Bridal Adornment
        </h4>
        <p className="uppercase tracking-[0.2em] text-xs text-gray-500">
          Cultural Details
        </p>
      </div>
    </div>

    {/* Card 4 */}
    <div className="group">
      <div className="aspect-[4/5] overflow-hidden rounded-2xl">
        <img
          src="https://images.unsplash.com/photo-1496747611176-843222e1e57c"
          alt="Aurelia Gown"
          className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
        />
      </div>

      <div className="mt-4">
        <h4 className="text-2xl font-serif mb-1">
          Aurelia Gown
        </h4>
        <p className="uppercase tracking-[0.2em] text-xs text-gray-500">
          Final Craft
        </p>
      </div>
    </div>

    {/* Card 5 */}
    <div className="group">
      <div className="aspect-[4/5] overflow-hidden rounded-2xl">
        <img
          src="https://images.unsplash.com/photo-1517841905240-472988babdf9"
          alt="Royal Henna"
          className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
        />
      </div>

      <div className="mt-4">
        <h4 className="text-2xl font-serif mb-1">
          Royal Henna
        </h4>
        <p className="uppercase tracking-[0.2em] text-xs text-gray-500">
          Bridal Artistry
        </p>
      </div>
    </div>

    {/* Card 6 */}
    <div className="group">
      <div className="aspect-[4/5] overflow-hidden rounded-2xl">
        <img
          src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f"
          alt="Luxury Couture"
          className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
        />
      </div>

      <div className="mt-4">
        <h4 className="text-2xl font-serif mb-1">
          Luxury Couture
        </h4>
        <p className="uppercase tracking-[0.2em] text-xs text-gray-500">
          Atelier Process
        </p>
      </div>
    </div>
  </div>
</section>
  {/* Why Choose Us */}
  <section className="py-stack-xl bg-surface-container-lowest reveal">
    <div className="px-margin-desktop max-w-container-max mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-headline-xl text-headline-xl">Why Choose HiR Atelier</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        <div className="p-8 border border-surface-container-high rounded-3xl hover:bg-surface-container-low transition-colors">
          <span className="material-symbols-outlined text-4xl text-primary mb-6">front_hand</span>
          <h3 className="font-headline-md text-[24px] mb-3">Handmade Mastery</h3>
          <p className="text-body-md text-on-surface-variant">Every stitch is placed by hand using century-old techniques passed down through generations of artisans.</p>
        </div>
        <div className="p-8 border border-surface-container-high rounded-3xl hover:bg-surface-container-low transition-colors">
          <span className="material-symbols-outlined text-4xl text-primary mb-6">edit_note</span>
          <h3 className="font-headline-md text-[24px] mb-3">Deeply Personalized</h3>
          <p className="text-body-md text-on-surface-variant">We don't just make dresses; we tell stories. Your unique personality is woven into the very fabric of the design.</p>
        </div>
        <div className="p-8 border border-surface-container-high rounded-3xl hover:bg-surface-container-low transition-colors">
          <span className="material-symbols-outlined text-4xl text-primary mb-6">diamond</span>
          <h3 className="font-headline-md text-[24px] mb-3">Premium Materials</h3>
          <p className="text-body-md text-on-surface-variant">Sourced from the world's finest mills, our silks, laces, and threads are of the highest haute couture standard.</p>
        </div>
        <div className="p-8 border border-surface-container-high rounded-3xl hover:bg-surface-container-low transition-colors">
          <span className="material-symbols-outlined text-4xl text-primary mb-6">auto_awesome</span>
          <h3 className="font-headline-md text-[24px] mb-3">Creative Expertise</h3>
          <p className="text-body-md text-on-surface-variant">Our design team brings decades of experience in high-fashion and bridal artistry to your project.</p>
        </div>
        <div className="p-8 border border-surface-container-high rounded-3xl hover:bg-surface-container-low transition-colors">
          <span className="material-symbols-outlined text-4xl text-primary mb-6">favorite</span>
          <h3 className="font-headline-md text-[24px] mb-3">Bridal Specialists</h3>
          <p className="text-body-md text-on-surface-variant">We understand the gravity of your special day and dedicate ourselves to making you feel truly exceptional.</p>
        </div>
        <div className="p-8 border border-surface-container-high rounded-3xl hover:bg-surface-container-low transition-colors">
          <span className="material-symbols-outlined text-4xl text-primary mb-6">support_agent</span>
          <h3 className="font-headline-md text-[24px] mb-3">Direct Consultation</h3>
          <p className="text-body-md text-on-surface-variant">You'll have a dedicated point of contact throughout the entire design and crafting process.</p>
        </div>
      </div>
    </div>
  </section>
  {/* Testimonials */}
  <section className="py-stack-xl px-margin-desktop overflow-hidden reveal">
    <div className="max-w-container-max mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-headline-xl text-headline-xl">Client Chronicles</h2>
      </div>
      <div className="flex gap-gutter overflow-x-auto pb-10 snap-x">
        <div className="min-w-[400px] snap-center glass p-10 rounded-3xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-full overflow-hidden bg-tertiary-fixed">
              <div className="w-full h-full bg-cover bg-center" data-alt="Portrait of a sophisticated woman with a warm smile, wearing elegant bridal accessories, captured in soft high-key lighting for a luxury lifestyle aesthetic." style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBJA4BHlxU_XIVFsfPbTbMw7DSfNPLbFLF6Bqsul0QVVnd9YsUMP-pNINxxZiA2JmbxOG7APm1pj_YqaoNmt3TVVA7k6WnrrxnJFcWD8wXSRvDvSLLMY9_uhRyDapj0MlpQaHli0Juz3Ruq4beMRGKLPU8Ti9RvvrricLQekBCh42a_l6S8idBSBlGJcDeiJsZ_TZaaomlkGUWtNZ7oajgE-n_9DlU0asz2BkMB6U7AYOXm9uTrNcRSNXyqPJgMHtPVxdJuEcJoEXs")'}} />
            </div>
            <div>
              <h4 className="font-headline-md text-[20px]">Isabella Rossi</h4>
              <p className="font-label-caps text-[10px] text-primary">MILAN BRIDE</p>
            </div>
          </div>
          <p className="text-body-md italic text-on-surface-variant">"The bespoke process at HiR Atelier was magical. From my first rough sketch to the final fitting, they treated my vision with such reverence. The hand-embroidery is simply museum-quality."</p>
          <div className="mt-6 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-sm" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
            <span className="material-symbols-outlined text-primary text-sm" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
            <span className="material-symbols-outlined text-primary text-sm" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
            <span className="material-symbols-outlined text-primary text-sm" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
            <span className="material-symbols-outlined text-primary text-sm" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
          </div>
        </div>
        <div className="min-w-[400px] snap-center glass p-10 rounded-3xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-full overflow-hidden bg-tertiary-fixed">
              <div className="w-full h-full bg-cover bg-center" data-alt="Studio portrait of a stylish woman with professional lighting, showcasing elegant makeup and a serene expression, perfect for high-end fashion branding." style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD6zdxkCNLUJWL6J9ICHMkRi0mOrwlMDKwnMl-cX5srVNO4y6wFw7IOz7dBnqQmJzt0BSjW8ig5TkYEX9c6zLKQhp_Yc-7QLOUQLA62oVy4dHPfW1vGAiN4-AyBzI3qkrUHLs3Y6eFbXev6WVapFY8h8pvprrcJ_geV9_J55u09VBYYMxYXYsgL3KC6gGFDjZuUZ1jxUDjAZizBIkaLybrokFb8SA3IkxsOEeCqotqwnMSEpEshMTZiDHg5G_m6vE4nuNUzOAvvJWU")'}} />
            </div>
            <div>
              <h4 className="font-headline-md text-[20px]">Sarah Jenkins</h4>
              <p className="font-label-caps text-[10px] text-primary">LONDON BRIDE</p>
            </div>
          </div>
          <p className="text-body-md italic text-on-surface-variant">"They transformed my grandmother's vintage lace into a modern masterpiece. The 'before and after' was unbelievable. It felt like they were weaving our family history into the dress."</p>
          <div className="mt-6 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-sm" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
            <span className="material-symbols-outlined text-primary text-sm" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
            <span className="material-symbols-outlined text-primary text-sm" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
            <span className="material-symbols-outlined text-primary text-sm" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
            <span className="material-symbols-outlined text-primary text-sm" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
          </div>
        </div>
        <div className="min-w-[400px] snap-center glass p-10 rounded-3xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-full overflow-hidden bg-tertiary-fixed">
              <div className="w-full h-full bg-cover bg-center" data-alt="Modern high-fashion portrait of a woman with clean studio lighting, embodying luxury minimalist aesthetic with soft warm tones." style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBT4iWrYTbwGZ9kBA7rDe5zlBBMJyOA_4vhBYjasbsF5rr8gukzpVwLOqKvIzRCrOhXb363Ij3gRjFG7xXEMVwKO7M9DiB6AuryWZOQP3WAWUeUkoQGoxorUC4vN-HZ90vLW3NqcOzd1XxhP9lSeJAApKikWODk274KIjILmw4YspZ93RPTUnra-fNxWhf_PYQbcOkJiPlDxoZpRTwyA5680e-BQaOxz4CcdWHuHcZLlJ8qGDjq0pvM37BG34lFDOe_P-CRFFsGpKU")'}} />
            </div>
            <div>
              <h4 className="font-headline-md text-[20px]">Amara K.</h4>
              <p className="font-label-caps text-[10px] text-primary">DUBAI BRIDE</p>
            </div>
          </div>
          <p className="text-body-md italic text-on-surface-variant">"The mehendi-inspired embroidery was breathtaking. I had never seen cultural heritage represented with such modern luxury flair. A truly one-of-a-kind experience."</p>
          <div className="mt-6 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-sm" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
            <span className="material-symbols-outlined text-primary text-sm" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
            <span className="material-symbols-outlined text-primary text-sm" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
            <span className="material-symbols-outlined text-primary text-sm" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
            <span className="material-symbols-outlined text-primary text-sm" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* FAQ Accordion */}
  <section className="py-stack-xl bg-surface-container-low reveal">
    <div className="px-margin-desktop max-w-3xl mx-auto">
      <h2 className="font-headline-xl text-headline-xl mb-12 text-center">Frequently Asked Questions</h2>
      <div className="space-y-4">
        <div className="bg-white rounded-2xl border border-surface-container-high overflow-hidden">
          <button className="w-full p-6 text-left flex justify-between items-center group" onclick="toggleFaq(this)">
            <span className="font-headline-md text-[20px]">How long does the custom design process take?</span>
            <span className="material-symbols-outlined transition-transform duration-300">expand_more</span>
          </button>
          <div className="max-h-0 overflow-hidden transition-all duration-300">
            <div className="p-6 pt-0 text-body-md text-on-surface-variant border-t border-surface-container-low mt-2">
              A typical bespoke creation takes between 4 to 8 months, depending on the complexity of the design and the availability of premium materials. We recommend starting the process at least 6 months before your event.
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl border border-surface-container-high overflow-hidden">
          <button className="w-full p-6 text-left flex justify-between items-center group" onclick="toggleFaq(this)">
            <span className="font-headline-md text-[20px]">Can I provide my own fabrics or materials?</span>
            <span className="material-symbols-outlined transition-transform duration-300">expand_more</span>
          </button>
          <div className="max-h-0 overflow-hidden transition-all duration-300">
            <div className="p-6 pt-0 text-body-md text-on-surface-variant border-t border-surface-container-low mt-2">
              Yes, we often work with heirloom fabrics or specific materials provided by our clients. During our initial consultation, we will assess the quality and suitability of the material for your desired design.
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl border border-surface-container-high overflow-hidden">
          <button className="w-full p-6 text-left flex justify-between items-center group" onclick="toggleFaq(this)">
            <span className="font-headline-md text-[20px]">Do you offer international shipping and fittings?</span>
            <span className="material-symbols-outlined transition-transform duration-300">expand_more</span>
          </button>
          <div className="max-h-0 overflow-hidden transition-all duration-300">
            <div className="p-6 pt-0 text-body-md text-on-surface-variant border-t border-surface-container-low mt-2">
              Absolutely. We cater to a global clientele. We offer virtual fittings via high-definition video and provide secure, insured international shipping for all our custom pieces.
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl border border-surface-container-high overflow-hidden">
          <button className="w-full p-6 text-left flex justify-between items-center group" onclick="toggleFaq(this)">
            <span className="font-headline-md text-[20px]">What is the payment structure for custom orders?</span>
            <span className="material-symbols-outlined transition-transform duration-300">expand_more</span>
          </button>
          <div className="max-h-0 overflow-hidden transition-all duration-300">
            <div className="p-6 pt-0 text-body-md text-on-surface-variant border-t border-surface-container-low mt-2">
              We typically require a 50% deposit to begin the design and sourcing phase. The remaining balance is split into a mid-production milestone and a final payment prior to delivery.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Final CTA */}
  <section className="py-stack-xl bg-primary-container/20 reveal">
    <div className="px-margin-desktop max-w-container-max mx-auto text-center">
      <h2 className="font-display-lg text-display-lg mb-8">Let's Create Something Beautiful Together</h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        <button className="pill-button px-12 py-5 bg-primary text-white rounded-full font-label-caps text-label-caps tracking-widest text-[14px]">
          Submit Custom Order
        </button>
        <button className="pill-button px-12 py-5 border-2 border-primary text-primary rounded-full font-label-caps text-label-caps tracking-widest text-[14px] hover:bg-primary hover:text-white transition-all">
          Book Consultation
        </button>
      </div>
    </div>
  </section>
</div>

    )
}

export default CustomeOrder

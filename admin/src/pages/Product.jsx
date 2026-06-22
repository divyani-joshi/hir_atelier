import React from 'react'

function Product() {
  return (
    <div>
      <ProductContent/>
    </div>
  )
}

function ProductContent(){
    return(
        <div className='bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container'>
  <header className="sticky top-0 z-40 w-full lg:pl-[280px] bg-surface/80 backdrop-blur-xl border-b border-outline-variant/30">
    <div className="flex justify-between items-center h-20 px-gutter w-full max-w-container-max mx-auto">
      <div className="flex items-center gap-4 flex-1">
        <button className="lg:hidden p-2 text-on-surface-variant">
          <span className="material-symbols-outlined" data-icon="menu">menu</span>
        </button>
        <div className="relative w-full max-w-md hidden md:block">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline" data-icon="search">search</span>
          <input className="w-full bg-surface-container-low border border-outline-variant/50 rounded-full py-2 pl-10 pr-4 text-body-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="Search catalog..." type="text" />
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4 text-on-surface-variant">
          <button className="hover:text-primary transition-colors">
            <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
          </button>
          <button className="hover:text-primary transition-colors">
            <span className="material-symbols-outlined" data-icon="contrast">contrast</span>
          </button>
        </div>
        <div className="flex items-center gap-3 pl-6 border-l border-outline-variant/30">
          <div className="text-right hidden sm:block">
            <p className="font-label-md text-on-surface">Admin Profile</p>
            <p className="text-[10px] text-on-surface-variant uppercase tracking-tighter">Super Admin</p>
          </div>
          <img alt="Administrator Avatar" className="w-10 h-10 rounded-full object-cover border border-outline-variant/50 shadow-sm" data-alt="A high-resolution professional portrait of a male executive in a well-lit, minimalist architectural space. The lighting is soft and directional, highlighting textures of a charcoal suit. The background features blurred glass and concrete elements, maintaining a sophisticated, high-end corporate aesthetic consistent with luxury branding." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvtD24eNn_4Tutsa13rQ772cfFgiaPmBfU1r5gzblv_E6fnNfjx-77Jp4sGOoqK6mgiQ2rKCFVNZZ8c3nixQcSUUaKjJQmIujdZMlPWFIAaEP_SukHkPTwtzHSyQvPmqRUThS5T2ib3_ECo049cZnK954RQ_XjQeJdOba0-C8R6rcZ2HY-kUqJgc4_oGD-gD8uUxsf7GP1F0L99L_faHahDPAR6qEbgbovI3dWiQ8FBjo_hg5xp0UvBPtXHF8spc07hLJm4MvKZg8" />
        </div>
      </div>
    </div>
  </header>
  {/* MAIN CONTENT */}
  <main className="lg:pl-[280px] min-h-screen">
    <div className="p-gutter max-w-container-max mx-auto space-y-lg">
      {/* PAGE HEADER & BREADCRUMBS */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-md">
        <div>
          <nav className="flex items-center gap-2 mb-2 text-on-surface-variant">
            <a className="font-label-md hover:text-primary" href="#">Dashboard</a>
            <span className="material-symbols-outlined text-[14px]" data-icon="chevron_right">chevron_right</span>
            <span className="font-label-md text-primary font-bold">Products</span>
          </nav>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Product Catalog</h2>
          <p className="font-body-md text-on-surface-variant">Manage your luxury inventory, pricing, and stock levels.</p>
        </div>
        <Link className="bg-primary text-on-primary px-lg py-3 rounded-lg flex items-center gap-2 hover:opacity-90 active:scale-[0.98] transition-all font-body-md font-semibold shadow-md">
          <span className="material-symbols-outlined" data-icon="add" to="/addservices">add</span>
          Add Product
        </Link>
      </div>
      {/* FILTERS & SEARCH MOBILE */}
      <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-md flex flex-wrap items-center gap-md shadow-sm">
        <div className="flex-1 min-w-[200px]">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline" data-icon="filter_list">filter_list</span>
            <input className="w-full bg-surface border-none rounded-lg py-2 pl-10 pr-4 text-body-md focus:ring-1 focus:ring-primary/20" placeholder="Quick search..." type="text" />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <select className="bg-surface border border-outline-variant/30 rounded-lg py-2 px-4 text-body-md text-on-surface-variant focus:border-primary focus:ring-0">
            <option>All Categories</option>
            <option>Furniture</option>
            <option>Lighting</option>
            <option>Textiles</option>
            <option>Art</option>
          </select>
          <select className="bg-surface border border-outline-variant/30 rounded-lg py-2 px-4 text-body-md text-on-surface-variant focus:border-primary focus:ring-0">
            <option>Status: All</option>
            <option>Status: Active</option>
            <option>Status: Archived</option>
          </select>
          <button className="p-2 border border-outline-variant/30 rounded-lg hover:bg-surface-container-high transition-colors">
            <span className="material-symbols-outlined text-on-surface-variant" data-icon="refresh">refresh</span>
          </button>
        </div>
      </div>
      {/* DATA TABLE */}
      <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low/50">
                <th className="px-lg py-4 font-label-md text-on-surface-variant border-b border-outline-variant/30">
                  <input className="rounded border-outline-variant text-primary focus:ring-primary" type="checkbox" />
                </th>
                <th className="px-lg py-4 font-label-md text-on-surface-variant border-b border-outline-variant/30 uppercase tracking-wider">Product</th>
                <th className="px-lg py-4 font-label-md text-on-surface-variant border-b border-outline-variant/30 uppercase tracking-wider">Category</th>
                <th className="px-lg py-4 font-label-md text-on-surface-variant border-b border-outline-variant/30 uppercase tracking-wider text-right">Price</th>
                <th className="px-lg py-4 font-label-md text-on-surface-variant border-b border-outline-variant/30 uppercase tracking-wider">Stock</th>
                <th className="px-lg py-4 font-label-md text-on-surface-variant border-b border-outline-variant/30 uppercase tracking-wider">Status</th>
                <th className="px-lg py-4 font-label-md text-on-surface-variant border-b border-outline-variant/30 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/20">
              {/* Row 1 */}
              <tr className="hover:bg-surface-container-low/30 transition-colors group">
                <td className="px-lg py-4">
                  <input className="rounded border-outline-variant text-primary focus:ring-primary" type="checkbox" />
                </td>
                <td className="px-lg py-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-surface-container overflow-hidden border border-outline-variant/20">
                      <img alt="Leather Armchair" className="w-full h-full object-cover" data-alt="Close-up of a premium designer leather armchair in a cognac brown shade, resting in a bright studio environment with soft shadows. The lighting is diffused and professional, showcasing the rich texture of the grain. Minimalist, modern aesthetic with a focus on artisanal craftsmanship and high-end materials." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8S8Smm1RRUGLH5qyr3PIlJqu_kYYoseNtFwaZlsC8Gjp4FD71DMsBa6hvWhYtTRTBDA0fO3tI7osdaAwObl30vgzfajhfo1UFlZDe35TAWMc1yKk6VVZDG6j5zzgsTIDqVZ7pSnQ71_8muEMuQpxLuzfjIlwNQffFNfSVVa9eRxoT3sBOC-dWNBLWTgNzHzU-aXZQ-hsDYPXQyJxeaaiKJJoPZi7EfMPOImf_BD3k_4ValqUwupoOxMYrKRpQaX-krZihrb-O1_8" />
                    </div>
                    <div>
                      <p className="font-body-md font-semibold text-on-surface">Elysian Leather Armchair</p>
                      <p className="text-[11px] text-outline">SKU: HIR-EL-204</p>
                    </div>
                  </div>
                </td>
                <td className="px-lg py-4 font-body-md text-on-surface-variant">Furniture</td>
                <td className="px-lg py-4 font-body-md text-on-surface text-right">$2,450.00</td>
                <td className="px-lg py-4">
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-1.5 bg-surface-container rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-[80%]" />
                    </div>
                    <span className="text-[12px] font-medium text-on-surface">12 in stock</span>
                  </div>
                </td>
                <td className="px-lg py-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-secondary-container text-on-secondary-container uppercase">Active</span>
                </td>
                <td className="px-lg py-4 text-right">
                  <button className="p-1 hover:bg-surface-container-high rounded transition-colors text-on-surface-variant">
                    <span className="material-symbols-outlined" data-icon="more_vert">more_vert</span>
                  </button>
                </td>
              </tr>
              {/* Row 2 */}
              <tr className="hover:bg-surface-container-low/30 transition-colors group">
                <td className="px-lg py-4">
                  <input className="rounded border-outline-variant text-primary focus:ring-primary" type="checkbox" />
                </td>
                <td className="px-lg py-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-surface-container overflow-hidden border border-outline-variant/20">
                      <img alt="Aurelia Brass Pendant" className="w-full h-full object-cover" data-alt="A luxurious minimalist brass pendant lamp hanging in a dimly lit, contemporary room with textured plaster walls. The warm metallic surface of the lamp glows with soft reflected light, creating a high-contrast and executive atmosphere. The style is architectural and sophisticated, emphasizing pure geometric form." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGWymIgwXADR2v6LyiG24qKSLMLWsEVQWKCmnxTtW7Jc5MxS3tc3iRJs76m_zuzPsBTSV1w60dCENYd3eRMYJE7Ys0zicmBn63XC_cYz5b45Yu3G3ihdTUq6s0QTjgE39ENRoaGoGcVlrDV-WWNHnddUDrW7WoQPOa9pS4zeMIrAXhWCJkB2ec-Zr9nZQfjC5Gqm-BTxbQVJ3_fLQWvc8M_kleIcFW6FDgkMV-mA6-Sl-re8_KdtBpH9rQZan-MBGNxWSFXUbN5VY" />
                    </div>
                    <div>
                      <p className="font-body-md font-semibold text-on-surface">Aurelia Brass Pendant</p>
                      <p className="text-[11px] text-outline">SKU: HIR-AU-772</p>
                    </div>
                  </div>
                </td>
                <td className="px-lg py-4 font-body-md text-on-surface-variant">Lighting</td>
                <td className="px-lg py-4 font-body-md text-on-surface text-right">$890.00</td>
                <td className="px-lg py-4">
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-1.5 bg-surface-container rounded-full overflow-hidden">
                      <div className="h-full bg-error w-[15%]" />
                    </div>
                    <span className="text-[12px] font-medium text-error">2 left (Low)</span>
                  </div>
                </td>
                <td className="px-lg py-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-secondary-container text-on-secondary-container uppercase">Active</span>
                </td>
                <td className="px-lg py-4 text-right">
                  <button className="p-1 hover:bg-surface-container-high rounded transition-colors text-on-surface-variant">
                    <span className="material-symbols-outlined" data-icon="more_vert">more_vert</span>
                  </button>
                </td>
              </tr>
              {/* Row 3 */}
              <tr className="hover:bg-surface-container-low/30 transition-colors group">
                <td className="px-lg py-4">
                  <input className="rounded border-outline-variant text-primary focus:ring-primary" type="checkbox" />
                </td>
                <td className="px-lg py-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-surface-container overflow-hidden border border-outline-variant/20">
                      <img alt="Sculptural Vase" className="w-full h-full object-cover" data-alt="A modern ceramic sculptural vase with organic, asymmetric curves, finished in a matte off-white glaze. It stands on a polished dark stone surface against a clean, bright background. The lighting is crisp and highlights the fluid form of the art piece, conveying a sense of serene luxury and gallery-quality design." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDC3znz8seXKiJA2RZ9NrWNMALKmu09r7cEg8fPRxybZZ38ETXxstdpFdYHX8cUJs9gtNz56LSjuAHhhr6zT5DDYz970Y7stofyEZ4AJRmaOgcOsXl3zxE-6hmmp7kdWob-GW2yOhgbkzNfPr3yoJIrzg53YW5aSoINeQrkbN5DCFbpeK6WNkf08V67BAH2b3TkgXbP8G7z7CYr5_4tiEfxOno_PQ5b4yibhT41pbezUFl3xaKhYjBXRAMK8AALzDqD5EjUKibwd2s" />
                    </div>
                    <div>
                      <p className="font-body-md font-semibold text-on-surface">Curva Marble Vase</p>
                      <p className="text-[11px] text-outline">SKU: HIR-CV-119</p>
                    </div>
                  </div>
                </td>
                <td className="px-lg py-4 font-body-md text-on-surface-variant">Art &amp; Decor</td>
                <td className="px-lg py-4 font-body-md text-on-surface text-right">$540.00</td>
                <td className="px-lg py-4">
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-1.5 bg-surface-container rounded-full overflow-hidden">
                      <div className="h-full bg-outline w-[0%]" />
                    </div>
                    <span className="text-[12px] font-medium text-on-surface-variant">Out of stock</span>
                  </div>
                </td>
                <td className="px-lg py-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-surface-variant text-on-surface-variant uppercase">Archived</span>
                </td>
                <td className="px-lg py-4 text-right">
                  <button className="p-1 hover:bg-surface-container-high rounded transition-colors text-on-surface-variant">
                    <span className="material-symbols-outlined" data-icon="more_vert">more_vert</span>
                  </button>
                </td>
              </tr>
              {/* Row 4 */}
              <tr className="hover:bg-surface-container-low/30 transition-colors group">
                <td className="px-lg py-4">
                  <input className="rounded border-outline-variant text-primary focus:ring-primary" type="checkbox" />
                </td>
                <td className="px-lg py-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-surface-container overflow-hidden border border-outline-variant/20">
                      <img alt="Silk Throw" className="w-full h-full object-cover" data-alt="A stack of premium silk and cashmere textile throws in muted earth tones like sand, charcoal, and ochre. The fabric is softly draped to reveal fine weaving and a luxurious sheen. Set in a high-end boutique environment with soft ambient lighting, emphasizing comfort, warmth, and expensive material quality." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQyEGtqT-hF48yvQfvlrZ2ho_ABJah9krddf9sbsJStc3O-y55RoiVYGT190PTeAN8wDg3wg-wVp0-loiQqmMfPlF3UL5rxsh7_tOB3Mro1YPq6z_c42S3EB1nzl40r0TTrU8DbMpKPueb1Wf4hiM8_cYXOSnjmNigmZzHHwrKt-VyFCZdOQg6uZFlaTuf7rJRJHlx_UbkZazefFsdq44kg2Ulz-xAlkfMYQ1KgqJEoKrOQ9gK1_rkVZjlrygQ8nqq7i2gqRB-Bak" />
                    </div>
                    <div>
                      <p className="font-body-md font-semibold text-on-surface">Velvet Silk Throw</p>
                      <p className="text-[11px] text-outline">SKU: HIR-VS-450</p>
                    </div>
                  </div>
                </td>
                <td className="px-lg py-4 font-body-md text-on-surface-variant">Textiles</td>
                <td className="px-lg py-4 font-body-md text-on-surface text-right">$320.00</td>
                <td className="px-lg py-4">
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-1.5 bg-surface-container rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-[45%]" />
                    </div>
                    <span className="text-[12px] font-medium text-on-surface">45 in stock</span>
                  </div>
                </td>
                <td className="px-lg py-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-secondary-container text-on-secondary-container uppercase">Active</span>
                </td>
                <td className="px-lg py-4 text-right">
                  <button className="p-1 hover:bg-surface-container-high rounded transition-colors text-on-surface-variant">
                    <span className="material-symbols-outlined" data-icon="more_vert">more_vert</span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* PAGINATION */}
        <div className="px-lg py-4 flex items-center justify-between bg-surface-container-low/30 border-t border-outline-variant/20">
          <p className="font-label-md text-on-surface-variant">Showing <span className="font-bold text-on-surface">1 - 4</span> of 128 products</p>
          <div className="flex items-center gap-1">
            <button className="p-2 text-outline hover:text-primary transition-colors disabled:opacity-30" disabled>
              <span className="material-symbols-outlined" data-icon="first_page">first_page</span>
            </button>
            <button className="p-2 text-outline hover:text-primary transition-colors disabled:opacity-30" disabled>
              <span className="material-symbols-outlined" data-icon="chevron_left">chevron_left</span>
            </button>
            <div className="flex gap-1 px-4">
              <button className="w-8 h-8 rounded-full bg-primary text-on-primary font-label-md">1</button>
              <button className="w-8 h-8 rounded-full hover:bg-surface-container font-label-md transition-colors text-on-surface">2</button>
              <button className="w-8 h-8 rounded-full hover:bg-surface-container font-label-md transition-colors text-on-surface">3</button>
            </div>
            <button className="p-2 text-on-surface hover:text-primary transition-colors">
              <span className="material-symbols-outlined" data-icon="chevron_right">chevron_right</span>
            </button>
            <button className="p-2 text-on-surface hover:text-primary transition-colors">
              <span className="material-symbols-outlined" data-icon="last_page">last_page</span>
            </button>
          </div>
        </div>
      </div>
      {/* SUMMARY STATS (Bento Layout style) */}
     
    </div>
  </main>
</div>

    )
}
export default Product

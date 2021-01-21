import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Products = () => {
    return (
        <div>
            <div class="row">
              <div class="column">
                <h2>Honey</h2>
                <p>Our honey is wildflower honey, meaning it comes from a wide variety of plants such as black locust trees, blackberries,
                thistle, peach trees and clover. Our happy bees make the finest wildflower honey a bee can make. All we have to do is
                harvest and bottle it. It’s liquid sunshine.</p>

                   <p>We’re not selling honey by mail, but if you’re in the Maryland area, please
                   <a href="mailto:thistlecreekhoneycompany@gmail.com"> Contact Us</a> and we can tell you if we have any honey available.</p>
              </div>
              <div class="column">
                <h2>Herbal Salve</h2>
                <p>Worker Bee Hands salve contains only the best quality ingredients. Every oil and botanical is selected for it’s outstanding
                qualities. The healing properties of comfrey, calendula, plaintain, and chickweed are well-known throughout the world. We grow
                our own botanicals and infuse them in oils specially selected to penetrate and emolliate your skin without leaving a greasy
                feeling. We use beeswax from our own hives because we know that our own beeswax has not been chemically treated in any way.
                Plus, it always includes a lovely touch of honey. As the herb-infused oils work to your heal chapped, dried skin, the gentle
                beeswax protects it from further damage. Lavender and rose geranium essential oils add their own skin-loving properties and
                make the salve smell wonderful. That’s all we use in our salve - no petroleum products, parabens, phthalates, silicone-derived
                products, sulfates or unnatural ingredients of any kind. This salve works amazingly well. We make Intensive Relief Herbal
                Salve, like all our products, in small batches to assure freshness and quality. As with all handcrafted lotion products,
                this should be used within 6 months of purchase.</p>
                <p>Ingredients: beeswax, meadowfoam seed oil, sunflower seed oil, babassu oil, avocado oil, sweet almond oil, argan oil,
                cocoa butter, shea butter, comfrey, calendula, plantain, chickweed, lavender essential oil, rose geranium essential oil</p>
              </div>
            </div>

            <div class="row">
              <div class="column">
                <h2>Lotion</h2>
                <p>We make our lotions by hand in small batches to assure that they are always fresh. It’s important to us that we only use
                the finest natural ingredients available to soothe and soften your skin. Aloe vera hydrates dry skin and soothes inflammation.
                Calendula is well known for its healing properties. Naturally occurring hyaluronic acid is a gentle super-moisturizer that
                works on a cellular level to smooth skin. We carefully chose exquisite oils such as meadowfoam seed oil, jojoba seed oil and
                shea butter because each of them adds it own emollient properties to a soothing lotion that absorbs quickly and never leaves
                a greasy residue.</p>
                <p>ngredients include Aloe vera, calendula-infused in sunflower oil, meadowfoam oil, shea butter, coconut oil, jojoba oil,
                lanolin, hyaluronic acid, glycerin and essential oils.</p>
                <p>Our Citrus Scented Calendula & Aloe lotion is available in a 4 oz bottle.
                   As with all handcrafted lotion products, this should be used within 6 months of purchase.</p>
              </div>
              <div class="column">
                <h2>Soap</h2>
                <p>All our soaps are handmade from scratch, never from a base and contain no detergents or artificial lathering agents.
                Just soap as it used to be made. It is made with a blend of vegetable oils to give the best balance of a gentle cleanser
                and rich lather that we could get from a bar of soap. Due its handcrafted nature, every bar of soap will have its own
                unique appearance, which may vary slightly in color, design and shape.</p>
                <p>Ingredients: olive oil, coconut oil, babassu oil, sunflower oil, rice bran oil, castor oil, palm kernel oil, our own
                beeswax and fragrance.</p><br/>
                Each bar is hand cut, weight approx. 4-5 oz.<br/>
                To make sure your handcrafted soap lasts as long as possible, it’s best to follow these tips:<br/>
                <ul>
                    <li>Don’t let your soap sit in water, or sit in the direct shower stream</li>
                    <li>Buy a soap saver, soap dish, or remove from shower</li>
                    <li>Let soap completely dry between uses</li>
                </ul>
              </div>
            </div>
        </div>
    )
};

export default Products;
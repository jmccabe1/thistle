import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function Tips () {
    return (
        <div className="TipsSection">
            <div className="TipTitle">
                <h2>Skin Care</h2>
            </div>
            <div className="TipText">
                <p>Your skin is unique. Some people have no skin issues, while others can be tormented by severe itchy, cracked or dry skin.
                If you are one of the millions who suffer from dry skin, oily skin, or any other malady of the skin,
                you know what it’s like to search in vain for a cure. It’s important to educate yourself on products and their
                ingredients and try different options to find the one that works best for you. It may be a commercial product from the
                dollar store or it could be a custom handcrafted product that only one person makes. Keep in mind that whatever
                you find might not continue to work as your body and skin change over the years.</p>
            </div>
            <div className="TipTitle">
                <h2>Your Skin’s Acid Mantle</h2>
            </div>
            <div className="TipText">
                <p>The outer layer of our skin is referred to as the acid mantle or Stratum Corneum (reference). This is our body’s
                force field. It keeps bad things (bacteria, germs…) out and good things (moisture) in. The acid mantle is acidic
                as the name implies. It can be damaged from scratching, harsh cleaners or a chemical imbalance in our bodies.</p>
            </div>
            <div className="TipTitle">
                <h2>Skin Problems</h2>
            </div>
            <div className="TipText">
                <p>There are various skin problems, such as eczema, rosacea, and acne, that while not life threatening are nevertheless
                chronic and can cause distress. As we mentioned before, the best thing to do is educate yourself on your condition and
                what is in the products you are using. When you try a new product you should test it for several weeks to see if it
                helps improve your condition.</p>
                <h3>Acne</h3>
                <p>Some people have skin that is especially sensitive to high pH because it disrupts the acid mantle. If acne bothers you,
                you may benefit from a soap that has lower pH. Another acne issue is oily skin. Contrary to what many people think, one
                of the worst things you can do to control acne is to use a harsh abrasive soap that strips the oil from your skin leaving
                it red and irritated. Look for a mild moisturizing soap. We have several soaps that are especially formulated for acne-prone
                skin. Our liquid soap is real soap, with all natural oils and is pH adjusted to make the soap closer to your skin’s pH than
                many bar soaps. We also have a goat milk and oatmeal soap that is a mild cleanser with a slightly lower pH than most bar
                soaps due to the milk and oatmeal, which can be helpful to skin. Our charcoal and zinc soap was specifically made for several
                types of problem skin, including acne. Charcoal draws impurities out of the skin and zinc is known to for its skin soothing
                and healing properties.</p>
                <h3>Eczema and Rosacea</h3>
                <p>Your skin may not react well to the synthetic detergents that are present in most commercial soaps. For example, one of
                the main ingredients in detergent “soap” is sodium lauryl sulfate which is a proven skin irritant (reference 1, reference 2).
                Try using real soap that has good cleansing qualities and has no synthetic detergents. A gentle moisturizing soap is a must if
                you suffer from dry itchy eczema-prone skin. If you have rosacea issues, a gentle non-irritating soap is also essential. We’ve
                formulated several of our soaps to be especially gentle for delicate skin.</p>
                <h3>Keeping Your Skin Moisturized</h3>
                <p>The next important step to healthy skin after cleansing is moisturizing. A good moisturizer can serve several purposes;
                adding moisture to your skin’s outer layer, adding a barrier to help slow moisture loss and filling tiny spaces in your
                skin’s surface to give it a smoother feel. In addition to applying moisturizer, you should remember the following steps
                for keeping healthy skin:</p>
                <ul>
                    <li>Drink plenty of water</li>
                    <li>Immediately apply a moisturizer after bathing</li>
                    <li>Cut down on sugars</li>
                    <li>Eat plenty of fruit and veggies</li>
                </ul>
            </div>
            <div className="TipTitle">
                <h3>The Truth about Lotions</h3>
            </div>
            <div className="TipText">
                <p>	Lotions and creams are at their very basic made of water, oil, an emulsifier, and preservatives to keep them safe from
                microbial contamination. You have probably noticed that commercially made lotions usually contain a long list of ingredients
                with names that sound like chemicals you can’t begin to recognize. Most of them actually are synthetic chemicals, although
                with enough research you could probably identify a good portion of them (sample list of over-priced cosmetics). Some are
                synthetic moisturizers. Many others are stabilizers for a long shelf life, fragrance and color additives, massive amounts
                of preservatives, and synthetic silicones added to give the lotion a slick application. Bear in mind that some ingredients
                may not even be listed at all. Corporations have been given the legal right to not disclosure some ingredients if they feel
                it could compromise a trade secret. It is important to understand that the FDA is limited with respect to regulating cosmetics
                (reference). With the exception of color additives, under the Federal Food, Drug, and Cosmetic Act, cosmetic products and
                ingredients do not require FDA approval before they go on the market. The law also does not require cosmetic companies to
                share their product safety testing information with FDA. The moral here is that if you are relying on the FDA to protect your
                skin from harmful cosmetic ingredients, you may be making a mistake.</p>
            </div>
            <div className="TipTitle">
                <h3>Thistle Creek Lotions, Salves, and Balms</h3>
            </div>
            <div className="TipText">
                <p>Whether the commercial products you buy in the store are inexpensive or practically priceless, none are really any better
                for your skin than a good handcrafted lotion made with natural ingredients. What’s essential in a lotion or salve is to pick
                the oils and botanicals that are proven to help your skin. If you have sensitive skin, it is also especially important to
                know exactly what you are putting on your skin. In general, the fewer ingredients a product contains the easier it is to
                pinpoint a particular ingredient that may be causing your skin to react badly. At Thistle Creek Honey Company we make these
                promises to our customers:</p>
                <ul>
                    <li>We carefully research all ingredients and only use those with proven beneficial qualities.</li>
                    <li>We organically grow our own ingredients when we can; when we can’t we only buy from trusted sources.</li>
                    <li>We disclose all our ingredients on our product labels.</li>
                    <li>We make our products in small batches so they are always fresh.</li>
                    <li>We follow best practices methods to assure the quality of production.</li>
                    <li>We never sell a product before without using it ourselves as part of our own daily routine.</li>
                </ul>
            </div>
        </div>
    );
};
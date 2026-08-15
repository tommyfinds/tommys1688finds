// ─────────────────────────────────────────────
// CATEGORY TAXONOMY
// ─────────────────────────────────────────────
const CATEGORIES = {
  tops:        { label: "Tops",        subs: ["Tees","Long Sleeves","Jerseys","Hoodies","Zip-Ups","Jackets","Sweaters","Knits","Coats","Tracksuits"] },
  bottoms:     { label: "Bottoms",     subs: ["Pants","Jeans","Sweatpants","Shorts","Tracksuits"] },
  footwear:    { label: "Footwear",    subs: ["Sneakers","Slippers","Boots"] },
  accessories: { label: "Accessories", subs: ["Jewelry","Glasses","Belts","Bags","Wallets","Scarves","Headwear","Socks"] },
  others:      { label: "Others",      subs: ["Lego","Room Decor","Electronics","Miscellaneous"] }
};

// ─────────────────────────────────────────────
// PRODUCTS — edit this array to add your finds.
// buyLink should be the direct 1688 product URL.
// gender: "men" | "women" | "unisex"
// mainCat: one of the keys above · subCat: one of that category's subs
// hot: true/false — set manually for trending items
// "New" is automatic: any item added within the last 7 days
// ─────────────────────────────────────────────
const products = [
  { id: 1, addedDate: "2026-08-10", name: "Basic Cotton Tee (Blank, Heavyweight)", gender: "unisex", mainCat: "tops", subCat: "Tees", price: 3.10, hot: false, colors: ["Black","White","Grey"], buyLink: "https://detail.1688.com/offer/812034601.html", image: "https://placehold.co/500x500/e9e9e9/999?text=%20" },
  { id: 2, addedDate: "2026-08-09", name: "Zip-Up Fleece Hoodie (Plain)", gender: "unisex", mainCat: "tops", subCat: "Hoodies", price: 8.40, hot: true, colors: ["Black","Grey","Navy"], buyLink: "https://detail.1688.com/offer/812034602.html", image: "https://placehold.co/500x500/e9e9e9/999?text=%20" },
  { id: 3, addedDate: "2026-08-05", name: "Ribbed Knit Sweater (Crewneck)", gender: "women", mainCat: "tops", subCat: "Knits", price: 9.80, hot: false, colors: ["Beige","Sage","Wine"], buyLink: "https://detail.1688.com/offer/812034603.html", image: "https://placehold.co/500x500/e9e9e9/999?text=%20" },
  { id: 4, addedDate: "2026-08-08", name: "Straight Fit Denim Jeans", gender: "men", mainCat: "bottoms", subCat: "Jeans", price: 12.50, hot: false, colors: ["Blue","Black"], buyLink: "https://detail.1688.com/offer/812034604.html", image: "https://placehold.co/500x500/e9e9e9/999?text=%20" },
  { id: 5, addedDate: "2026-08-07", name: "Fleece Jogger Sweatpants", gender: "unisex", mainCat: "bottoms", subCat: "Sweatpants", price: 7.90, hot: true, colors: ["Black","Grey","Beige"], buyLink: "https://detail.1688.com/offer/812034605.html", image: "https://placehold.co/500x500/e9e9e9/999?text=%20" },
  { id: 6, addedDate: "2026-08-01", name: "Mesh Athletic Shorts", gender: "men", mainCat: "bottoms", subCat: "Shorts", price: 4.60, hot: false, colors: ["Black","Navy","Red"], buyLink: "https://detail.1688.com/offer/812034606.html", image: "https://placehold.co/500x500/e9e9e9/999?text=%20" },
  { id: 7, addedDate: "2026-08-06", name: "Canvas Low-Top Sneakers (Blank)", gender: "unisex", mainCat: "footwear", subCat: "Sneakers", price: 11.20, hot: false, colors: ["White","Black"], buyLink: "https://detail.1688.com/offer/812034607.html", image: "https://placehold.co/500x500/e9e9e9/999?text=%20" },
  { id: 8, addedDate: "2026-07-30", name: "Fleece-Lined Slippers", gender: "unisex", mainCat: "footwear", subCat: "Slippers", price: 3.90, hot: false, colors: ["Grey","Brown"], buyLink: "https://detail.1688.com/offer/812034608.html", image: "https://placehold.co/500x500/e9e9e9/999?text=%20" },
  { id: 9, addedDate: "2026-08-04", name: "Minimalist Chain Necklace", gender: "women", mainCat: "accessories", subCat: "Jewelry", price: 2.30, hot: false, colors: ["Silver","Gold"], buyLink: "https://detail.1688.com/offer/812034609.html", image: "https://placehold.co/500x500/e9e9e9/999?text=%20" },
  { id: 10, addedDate: "2026-07-28", name: "Square Frame Clear-Lens Glasses", gender: "unisex", mainCat: "accessories", subCat: "Glasses", price: 2.80, hot: false, colors: ["Black","Tortoise"], buyLink: "https://detail.1688.com/offer/812034610.html", image: "https://placehold.co/500x500/e9e9e9/999?text=%20" },
  { id: 11, addedDate: "2026-08-03", name: "Canvas Crossbody Bag", gender: "unisex", mainCat: "accessories", subCat: "Bags", price: 6.50, hot: true, colors: ["Black","Beige","Olive"], buyLink: "https://detail.1688.com/offer/812034611.html", image: "https://placehold.co/500x500/e9e9e9/999?text=%20" },
  { id: 12, addedDate: "2026-07-25", name: "Ribbed Beanie (Plain)", gender: "unisex", mainCat: "accessories", subCat: "Headwear", price: 1.90, hot: false, colors: ["Black","Grey","Cream"], buyLink: "https://detail.1688.com/offer/812034612.html", image: "https://placehold.co/500x500/e9e9e9/999?text=%20" },
  { id: 13, addedDate: "2026-07-20", name: "Classic Brick-Compatible Building Set (500pc)", gender: "unisex", mainCat: "others", subCat: "Lego", price: 14.00, hot: false, colors: ["Multicolor"], buyLink: "https://detail.1688.com/offer/812034613.html", image: "https://placehold.co/500x500/e9e9e9/999?text=%20" },
  { id: 14, addedDate: "2026-08-02", name: "RGB LED Strip Lights (5m, App Control)", gender: "unisex", mainCat: "others", subCat: "Electronics", price: 6.40, hot: true, colors: ["Multicolor"], buyLink: "https://detail.1688.com/offer/812034614.html", image: "https://placehold.co/500x500/e9e9e9/999?text=%20" },
  { id: 15, addedDate: "2026-07-22", name: "Ceramic Vase (Minimalist)", gender: "unisex", mainCat: "others", subCat: "Room Decor", price: 5.20, hot: false, colors: ["White","Terracotta"], buyLink: "https://detail.1688.com/offer/812034615.html", image: "https://placehold.co/500x500/e9e9e9/999?text=%20" },
];

// A product counts as "New" if it was added within the last 7 days
function isNewProduct(p) {
  const added = new Date(p.addedDate + "T00:00:00");
  const days = (new Date() - added) / (1000 * 60 * 60 * 24);
  return days <= 7;
}
function getBadge(p) {
  if (p.hot) return { text: 'hot', cls: 'hot' };
  if (isNewProduct(p)) return { text: 'new', cls: 'new' };
  return null;
}

// ─────────────────────────────────────────────
// WISHLIST — persisted in localStorage, so it's
// tied to whoever's browser is using the site.
// ─────────────────────────────────────────────
function getWishlist() { try { return JSON.parse(localStorage.getItem('tf_wishlist') || '[]'); } catch (e) { return []; } }
function saveWishlist(w) { localStorage.setItem('tf_wishlist', JSON.stringify(w)); }
function isWishlisted(id) { return getWishlist().includes(id); }

function toggleWishlist(id, evt) {
  if (evt) evt.stopPropagation();
  let w = getWishlist();
  w = w.includes(id) ? w.filter(x => x !== id) : [...w, id];
  saveWishlist(w);
  updateWishlistBadges();
  if (typeof onWishlistChange === 'function') onWishlistChange();
}

// Updates the little count bubble next to any "Wishlist" nav link on the page
function updateWishlistBadges() {
  const count = getWishlist().length;
  document.querySelectorAll('.wish-count-badge').forEach(el => {
    el.textContent = count;
    el.style.display = count ? 'inline-flex' : 'none';
  });
  document.querySelectorAll('.wish-btn').forEach(btn => {
    const id = Number(btn.dataset.wishId);
    btn.classList.toggle('active', getWishlist().includes(id));
  });
}

// Shows the site's "last updated" date (most recent addedDate) wherever
// an element with these ids exists on the page.
function setUpdatedDateLabel() {
  const latest = products.reduce((a, p) => p.addedDate > a ? p.addedDate : a, products[0].addedDate);
  const formatted = new Date(latest + "T00:00:00").toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  ['hero-updated', 'promo-updated'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = 'Updated ' + formatted;
  });
}

document.addEventListener('DOMContentLoaded', updateWishlistBadges);

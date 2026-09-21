// Variant option labelling — reads the store's own option name (e.g. "Size",
// "Color", "Length") so the UI never hardcodes "Size". Works for any current or
// future product dimension defined in the Hostinger dashboard.

// The variant dimension name, taken from the product's first defined option.
export function getVariantOptionName(product, fallback = 'Option') {
	const title = (product?.options || []).find((option) => option?.title)?.title;
	return title ? title.trim() : fallback;
}

function toTitleCase(word) {
	return word ? word.charAt(0).toUpperCase() + word.slice(1) : word;
}

// Basic English pluralisation, preserving the store's own spelling
// (e.g. "Colour" -> "Colours", "Size" -> "Sizes", "Category" -> "Categories").
function pluralize(word) {
	if (!word) return word;
	if (/(ch|sh|[sxz])$/i.test(word)) return `${word}es`;
	if (/[^aeiou]y$/i.test(word)) return `${word.slice(0, -1)}ies`;
	return `${word}s`;
}

// Call-to-action label, e.g. "Select Size" / "Select Color".
export function getVariantSelectLabel(product) {
	return `Select ${toTitleCase(getVariantOptionName(product, 'Option'))}`;
}

// Availability hint, e.g. "3 sizes available" / "2 colours available".
export function getVariantCountLabel(product) {
	const count = (product?.variants || []).length;
	const noun = pluralize(getVariantOptionName(product, 'option')).toLowerCase();
	return `${count} ${noun} available`;
}


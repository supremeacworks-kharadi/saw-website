// ─── SUPREME AC WORKS — catalogue structure ─────────────────────────────────
// Categories, imagery and search keywords. Edit freely: add sizes, brands and
// subcategories here as the product range grows.

export const IMAGES = {
	hero: 'https://images.hostinger.com/69d4f131-1ef2-4263-89fd-22c566cccb79.png',
	refrigerants: 'https://images.hostinger.com/96718701-bb3c-43d7-88f8-8ebb707ff906.png',
	copper: 'https://images.hostinger.com/ded589d2-a7b5-423b-92fa-a0334d5ed4fa.png',
	compressors: 'https://images.hostinger.com/8bbda1c7-48ab-44d6-9d1a-d70701c71336.png',
	motors: 'https://images.hostinger.com/f9621b1a-95c1-4b0b-9d29-0286590b9abd.png',
	insulation: 'https://images.hostinger.com/606a3ad0-b159-4b2c-858f-a9138d90ee6e.png',
	electrical: 'https://images.hostinger.com/5b4affeb-b8e0-4e12-bb29-4d5fb62800c8.png',
	stands: 'https://images.hostinger.com/173019d9-340a-42de-bafa-8c8e3320e909.png',
	pcb: 'https://images.hostinger.com/d91f06f3-f034-4504-a8c7-191c0fe6ef6d.png',
	installation: 'https://images.hostinger.com/ad179037-22e1-48cf-97fd-d125f1e236fe.png',
	tools: 'https://images.hostinger.com/fcfe274f-b2da-4d2d-ba9e-a134e4ec24d1.png',
};

export const CATEGORIES = [
	{
		slug: 'refrigerant-gases',
		name: 'Refrigerant Gases',
		tagline: 'R32, R410A, R134a & other refrigerants — Floron, Stallion & more brands.',
		image: IMAGES.refrigerants,
		keywords: ['refrigerant', 'r32', 'r410a', 'r134a', 'gas', 'floron', 'stallion', 'cylinder', 'freon'],
		specFields: ['Gas type', 'Brand', 'Cylinder size', 'Net weight', 'Gross weight', 'Packaging', 'SKU', 'Availability'],
		popular: ['R32 gas', 'R410A gas', 'R134a gas', 'Floron', 'Stallion'],
	},
	{
		slug: 'copper-pipes-coils',
		name: 'Copper Pipes & Coils',
		tagline: 'AC copper pipe coils and straight pipes in all standard sizes.',
		image: IMAGES.copper,
		collections: ['copper tubes and pipes'],
		keywords: ['copper', 'pipe', 'coil', 'pancake', 'tube'],
		specFields: ['Size', 'Thickness', 'Length', 'Coil / straight', 'Brand', 'Price per meter', 'Price per coil', 'SKU'],
		popular: ['1/4" copper pipe', '3/8" copper pipe', '5/8" copper pipe', '1 1/8" copper pipe'],
	},
	{
		slug: 'ac-compressors',
		name: 'AC Compressors',
		tagline: 'Rotary & scroll compressors for split, window and commercial AC systems.',
		image: IMAGES.compressors,
		keywords: ['compressor', 'rotary', 'scroll'],
		specFields: ['Brand', 'Model', 'Capacity', 'Refrigerant', 'Type', 'Application', 'Voltage', 'Phase', 'SKU'],
		popular: ['1 ton compressor', '1.5 ton compressor', '2 ton compressor', 'rotary compressor'],
	},
	{
		slug: 'ac-motors',
		name: 'AC Motors',
		tagline: 'Indoor fan, outdoor fan, condenser, ductable and blower motors.',
		image: IMAGES.motors,
		// Store collections (Hostinger dashboard) that belong to this category.
		collections: ['ductable odu motor', 'air conditioner outdoor motor', 'indoor unit motor', 'ac motors'],
		keywords: ['motor', 'blower', 'fan motor'],
		specFields: ['Model number', 'Voltage', 'RPM', 'Wattage', 'Application', 'Direction', 'Brand', 'SKU'],
		popular: ['indoor fan motor', 'outdoor fan motor', 'condenser motor', 'blower motor'],
		// Sub-categories, driven by store collections (with keyword fallback).
		subcategories: [
			{ slug: 'outdoor-unit-motor', name: 'Outdoor Unit Motor', collections: ['air conditioner outdoor motor'], keywords: ['outdoor', ' odu', 'odu '] },
			{ slug: 'ductable-motor', name: 'Ductable Motor', collections: ['ductable odu motor'], keywords: ['ductable'] },
			{ slug: 'indoor-unit-motor', name: 'Indoor Unit Motor', collections: ['indoor unit motor'], keywords: ['indoor', ' idu', 'idu '] },
		],
	},
	{
		slug: 'insulation',
		name: 'Insulation',
		tagline: '9 mm, 13 mm and other insulation tubes — by meter, roll or coil.',
		image: IMAGES.insulation,
		collections: ['insulation tubes'],
		keywords: ['insulation', 'foam', 'nitrile'],
		specFields: ['Pipe size', 'Thickness', 'Length', 'Brand', 'Sold by', 'SKU', 'Availability'],
		popular: ['9 mm insulation', '13 mm insulation', 'insulation tube'],
	},
	{
		slug: 'electrical-materials',
		name: 'Wires & Electrical',
		tagline: 'Flexible wires, 4-core wire, capacitors, contactors, relays & terminals.',
		image: IMAGES.electrical,
		collections: ['wires and cables'],
		keywords: ['wire', 'capacitor', 'contactor', 'relay', 'terminal', 'electrical', 'cable', '4 core', '4-core'],
		specFields: ['Type', 'Size / rating', 'Voltage', 'Brand', 'SKU', 'Availability'],
		popular: ['4 core flexible wire', 'AC capacitor', 'contactor', 'AC wire'],
	},
	{
		slug: 'ac-stands',
		name: 'AC Stands',
		tagline: 'Outdoor unit stands, heavy-duty and wall-mount brackets.',
		image: IMAGES.stands,
		collections: ['stands and mounting'],
		keywords: ['stand', 'bracket', 'mount'],
		specFields: ['Size', 'Material', 'Load capacity', 'Finish', 'SKU', 'Availability'],
		popular: ['outdoor AC stand', 'heavy duty stand', 'wall mount bracket'],
	},
	{
		slug: 'pcb-electronics',
		name: 'PCB & Electronics',
		tagline: 'AC PCBs, control boards, sensors, receivers and display boards.',
		image: IMAGES.pcb,
		keywords: ['pcb', 'board', 'sensor', 'receiver', 'display', 'remote', 'control'],
		specFields: ['Model number', 'Compatible brand', 'Type', 'SKU', 'Availability'],
		popular: ['AC PCB', 'control board', 'AC sensor', 'display board'],
	},
	{
		slug: 'installation-material',
		name: 'Installation Material',
		tagline: 'Copper pipe, insulation, wire, drain pipe, tape, fasteners & consumables.',
		image: IMAGES.installation,
		keywords: ['installation', 'drain', 'tape', 'fastener', 'kit', 'consumable', 'pvc'],
		specFields: ['Item', 'Size', 'Quantity', 'Brand', 'SKU', 'Availability'],
		popular: ['drain pipe', 'installation kit', 'vinyl tape', 'fasteners'],
	},
	{
		slug: 'tools-accessories',
		name: 'AC Tools & Accessories',
		tagline: 'Manifold gauges, vacuum pumps, flaring tools, tube cutters & more.',
		image: IMAGES.tools,
		keywords: ['tool', 'gauge', 'manifold', 'vacuum', 'pump', 'flaring', 'cutter', 'hose', 'leak', 'charging'],
		specFields: ['Type', 'Model', 'Brand', 'SKU', 'Availability'],
		popular: ['manifold gauge', 'vacuum pump', 'flaring tool', 'tube cutter', 'charging hose'],
	},
];

/**
 * Match a store product to a catalogue category.
 *
 * Strategy (in order):
 *  1. Store collection (Hostinger dashboard) — deterministic and user-controlled.
 *     Products carry `collection_titles` (added by the API layer); if any matches
 *     a category's `collections`, that category wins. This is the reliable path.
 *  2. Keyword score fallback — for products not yet assigned to a collection,
 *     pick the category with the most keyword hits (specific beats generic, so
 *     "Nitrile Foam Tubes" lands in Insulation, not Copper).
 */
function matchByCollection(product) {
	const titles = (product?.collection_titles || []).map((t) => t.toLowerCase());
	if (!titles.length) return null;
	return CATEGORIES.find((category) =>
		(category.collections || []).some((name) => titles.includes(name)),
	) || null;
}

function matchByKeywordScore(product) {
	const haystack = `${product?.title || ''} ${product?.description || ''}`.toLowerCase();
	let best = null;
	let bestScore = 0;
	for (const category of CATEGORIES) {
		const score = (category.keywords || []).reduce(
			(count, keyword) => (haystack.includes(keyword) ? count + 1 : count),
			0,
		);
		if (score > bestScore) {
			bestScore = score;
			best = category;
		}
	}
	return best;
}

export function matchCategory(product) {
	return matchByCollection(product) || matchByKeywordScore(product);
}

/**
 * Match a product to a sub-category within its category (e.g. AC Motors →
 * Outdoor / Ductable / Indoor). Collection membership wins, keyword fallback next.
 * Returns `{ category, subcategory }` or null.
 */
export function matchSubcategory(product) {
	const category = matchCategory(product);
	if (!category?.subcategories?.length) return null;
	const titles = (product?.collection_titles || []).map((t) => t.toLowerCase());
	const byCollection = category.subcategories.find((sub) =>
		(sub.collections || []).some((name) => titles.includes(name)),
	);
	if (byCollection) return { category, subcategory: byCollection };
	const haystack = `${product?.title || ''} ${product?.description || ''}`.toLowerCase();
	const byKeyword = category.subcategories.find((sub) =>
		(sub.keywords || []).some((keyword) => haystack.includes(keyword)),
	);
	return byKeyword ? { category, subcategory: byKeyword } : { category, subcategory: null };
}

export function getSubcategory(categorySlug, subSlug) {
	const category = getCategoryBySlug(categorySlug);
	if (!category?.subcategories) return null;
	return category.subcategories.find((sub) => sub.slug === subSlug) || null;
}

export function getCategoryBySlug(slug) {
	return CATEGORIES.find((category) => category.slug === slug) || null;
}

export const COPPER_SIZES = ['1/4"', '3/8"', '1/2"', '5/8"', '3/4"', '7/8"', '1 1/8"'];

export const REFRIGERANT_TYPES = ['R32', 'R410A', 'R134a', 'Other refrigerants on enquiry'];

export const WHY_POINTS = [
	{ title: 'Wide AC Material Range', text: 'Refrigerants, copper, compressors, motors, electricals, installation material and tools — all in one place.' },
	{ title: 'Competitive Pricing', text: 'Fair, market-linked pricing for retail buyers, technicians and bulk purchasers.' },
	{ title: 'Professional Product Support', text: 'Help with model numbers, sizes and compatibility before you order.' },
	{ title: 'Bulk Supply Available', text: 'Contractor supplies, dealer requirements and wholesale quantities on enquiry.' },
	{ title: 'Easy WhatsApp Ordering', text: 'Send your requirement on WhatsApp and get price and availability directly.' },
	{ title: 'Fast Enquiry Response', text: 'Quick replies on price, stock and delivery for professional buyers.' },
];

export const INSTALLATION_KIT_ITEMS = [
	'Copper pipe', 'Insulation', 'Flexible wire', 'Drain pipe', 'AC stand',
	'Electrical accessories', 'Vinyl tape', 'Fasteners', 'Other HVAC consumables',
];

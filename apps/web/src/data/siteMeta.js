// ─── SUPREME AC WORKS — editable business details ───────────────────────────
// Replace the placeholder below with your real WhatsApp business number.
// Format: country code + number, digits only (e.g. "919876543210" for India).
export const whatsAppNumber = "918982871007";
export const whatsAppDisplay = "+91 8982871007";

// Default message used by the floating WhatsApp bubble.
export const whatsAppMessage =
	"Hello Supreme AC Works, I want to enquire about AC spare parts / HVAC materials. Please share your best price and availability.";

// Floating WhatsApp button shown on every page (mobile + desktop).
export const isFloatingWhatsAppWidgetEnabled = true;

// Add all shops/branches here. Mark one with `isPrimary: true`.
// The footer and quick action buttons use the primary location details.
export const businessLocations = [
	{
		id: "kharadi",
		name: "Kharadi Shop",
		isPrimary: true,
		contactPerson: "Mr. Pradeep Bamoriya, Tanya Surana",
		phoneNumbers: [
			{ value: "+918982871007", display: "+91 8982871007" },
			{ value: "+918390602473", display: "+91 8390602473" },
		],
		email: "Supremeacworks@gmail.com",
		address: "Number 42-A, Shop, Kharadi - Hadapsar Bypass Rd, near Jitendra Medical, Durvankur Society, Ashoka Nagar, Kharadi, Pune, Maharashtra 411014",
		mapLink: "https://maps.app.goo.gl/RGKXBmxXKo2D6rTP9",
		hours: "9:00 AM - 9:00 PM",
	},
	{
		id: "supreme-refrigeration-rasta-peth",
		name: "Supreme Refrigeration",
		contactPerson: "Mr.Bharat Surana",
		phoneNumbers: [{ value: "+919226960705", display: "092269 60705" }],
		email: "Supremeref2001@gmail.com",
		address: "Ground floor, 150, near Shri Samarth Hospital, Rasta Peth, Pune, Maharashtra 411002",
		mapLink: "https://maps.app.goo.gl/rphmvMg6htyVdBWm9?g_st=com.tinyspeck.chatlyio.share",
		hours: "9:00 AM - 9:00 PM",
	},
	{
		id: "supreme-aircon-pimpri",
		name: "Supreme Aircon",
		contactPerson: "Mr. Sanjay Surana, Tanya Surana",
		phoneNumbers: [
			{ value: "+919371002522", display: "+91 9371002522" },
			{ value: "+918390602473", display: "+91 8390602473" },
		],
		email: "Supremeaircon2001@gmail.com",
		address: "Shop 8B, complex 8, Sr no 157, Sector 19, Kharalwadi, Pimpri Colony, Pimpri-Chinchwad, Maharashtra 411018",
		mapLink: "https://maps.app.goo.gl/wJdRM6qxscfiAJqU9",
		hours: "9:00 AM - 9:00 PM",
	},
];

export const primaryBusinessLocation =
	businessLocations.find((location) => location.isPrimary) || businessLocations[0] || null;

// Backward-compatible exports used in existing components.
export const businessPhoneNumbers = primaryBusinessLocation?.phoneNumbers || [];
export const businessPhone = businessPhoneNumbers[0]?.value || "";
export const businessEmail = primaryBusinessLocation?.email || "";
export const businessAddress = primaryBusinessLocation?.address || "";
export const businessMapLink = primaryBusinessLocation?.mapLink || "#";
export const businessHours = primaryBusinessLocation?.hours || "";

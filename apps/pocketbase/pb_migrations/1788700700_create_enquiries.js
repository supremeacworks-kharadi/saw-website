migrate((app) => {
	try {
		app.findCollectionByNameOrId("enquiries");
		return; // already exists
	} catch (_) {}

	const collection = new Collection({
		name: "enquiries",
		type: "base",
		listRule: null,
		viewRule: null,
		createRule: "",
		updateRule: null,
		deleteRule: null,
		fields: [
			{ name: "type", type: "select", values: ["bulk", "contact", "product"], maxSelect: 1, required: true },
			{ name: "name", type: "text", required: true },
			{ name: "company", type: "text" },
			{ name: "mobile", type: "text", required: true },
			{ name: "whatsapp", type: "text" },
			{ name: "product", type: "text" },
			{ name: "quantity", type: "text" },
			{ name: "location", type: "text" },
			{ name: "message", type: "text" },
		],
	});

	app.save(collection);
}, (app) => {
	try {
		const collection = app.findCollectionByNameOrId("enquiries");
		app.delete(collection);
	} catch (_) {}
});

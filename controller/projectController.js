export const showAllProject = (req, res) => {
	res.render("index", {
		layout: "layouts/main-layout",
	});
};

export const getAddNew = (req, res) => {
	res.render("add", {
		layout: "layouts/main-layout",
	});
};

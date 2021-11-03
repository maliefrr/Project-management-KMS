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

export const postList = (req, res) => {
	const { proker, divisi } = req.body;
	res.json({
		proker,
		divisi,
	});
};

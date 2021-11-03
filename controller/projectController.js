import prokerModel from "../models/proker.js";

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
	const { proker, divisi, pj, status } = req.body;
	res.json({
		proker,
		divisi,
		pj,
		status,
	});
};

import prokerModel from "../models/proker.js";

export const showAllProject = async (req, res) => {
	const proker = prokerModel.find();
	res.render("index", {
		layout: "layouts/main-layout",
		success: req.flash("success"),
		proker,
	});
};

export const getAddNew = (req, res) => {
	res.render("add", {
		layout: "layouts/main-layout",
	});
};

export const postList = (req, res) => {
	prokerModel.insertMany(req.body, (err, result) => {
		req.flash("success", "Data Berhasil ditambahkan");
		res.redirect("/");
	});
};

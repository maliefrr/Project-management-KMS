import mongoose from "mongoose";
const schema = mongoose.Schema;

const prokerSchema = new schema({
	namaDivisi: {
		type: String,
		required: true,
	},
	namaProker: {
		type: String,
		required: true,
	},
	status: {
		type: Boolean,
		required: true,
		default: false,
	},
	penanggungJawab: {
		type: String,
	},
});

export const user = mongoose.model("Proker", prokerSchema);

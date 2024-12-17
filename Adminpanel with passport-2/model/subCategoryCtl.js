const mongoose = require("mongoose");

const subCatSchema = mongoose.Schema({
    subCatSchema: {
        type: String,
        required: true,
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "categoryId",
        required: true,
    },
});

const subCategory = mongoose.model("subCategorie",subCatSchema);

module.exports = subCategory;


const allowedCategories = [
    "Maintenance",
    "Water Supply",
    "Electricity",
    "Cleanliness",
    "Other"
];

function validateComplaint({ user_id, title, description, category }) {
    if (!user_id || !title?.trim() || !description?.trim() || !category) {
        return "User ID, title, description, and category are required";
    }

    if (!allowedCategories.includes(category)) {
        return "Invalid category";
    }

    return null;
}

module.exports = { validateComplaint };

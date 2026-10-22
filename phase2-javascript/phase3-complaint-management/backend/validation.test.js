
const test = require("node:test");
const assert = require("node:assert/strict");
const { validateComplaint } = require("./validation");


test("rejects a complaint with an empty title", () => {
    const result = validateComplaint({
        user_id: 1,
        title: "",
        description: "Water is leaking",
        category: "Maintenance"
    });

    assert.equal(
    result,
    "User ID, title, description, and category are required"
);
});

test("rejects a complaint with an empty description", () => {
    const result = validateComplaint({
        user_id: 1,
        title: "Water leakage",
        description: "   ",
        category: "Maintenance"
    });

    assert.equal(
    result,
    "User ID, title, description, and category are required"
);
});

test("rejects an unsupported category", () => {
    const result = validateComplaint({
        user_id: 1,
        title: "Test complaint",
        description: "Testing category",
        category: "InvalidCategory"
    });

    assert.equal(result, "Invalid category");
});

test("accepts a complaint with valid fields and category", () => {
    const result = validateComplaint({
        user_id: 1,
        title: "Water leakage",
        description: "Water is leaking",
        category: "Maintenance"
    });

    assert.equal(result, null);
});

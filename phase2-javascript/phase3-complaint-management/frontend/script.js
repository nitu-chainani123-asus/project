
const complaintForm = document.getElementById("complaintForm");
const message = document.getElementById("message");
const complaintsList = document.getElementById("complaintsList");
const loadButton = document.getElementById("loadComplaints");

const API_URL = "http://localhost:3000";

// Submit a complaint
complaintForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const complaint = {
        user_id: Number(document.getElementById("userId").value),
        title: document.getElementById("title").value.trim(),
        category: document.getElementById("category").value,
        description: document.getElementById("description").value.trim()
    };

    try {
        const response = await fetch(`${API_URL}/complaints`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(complaint)
        });

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.message || "Failed to submit complaint");
        }

        message.textContent =
            `Complaint submitted successfully! ID: ${result.id}`;

        complaintForm.reset();
        document.getElementById("userId").value = "1";

        loadComplaints();
    } catch (error) {
        message.textContent =
            "Error: " + error.message;
    }
});

// Load all complaints
async function loadComplaints() {
    try {
        const response = await fetch(`${API_URL}/complaints`);
        const complaints = await response.json();

        if (!response.ok) {
            throw new Error("Failed to load complaints");
        }

        complaintsList.replaceChildren();

        if (complaints.length === 0) {
            complaintsList.textContent = "No complaints found.";
            return;
        }

        complaints.forEach((complaint) => {
            const card = document.createElement("div");
            const heading = document.createElement("h3");
            const description = document.createElement("p");
            const details = document.createElement("p");

            heading.textContent =
                `${complaint.title} (ID: ${complaint.id})`;

            description.textContent = complaint.description;

            details.textContent =
                `Category: ${complaint.category} | Status: ${complaint.status}`;

            card.append(heading, description, details);
            complaintsList.appendChild(card);
        });
    } catch (error) {
        complaintsList.textContent =
            "Unable to load complaints. Check that the backend is running.";
    }
}

// Refresh complaints
loadButton.addEventListener("click", loadComplaints);

const statusForm = document.getElementById("statusForm");
const adminMessage = document.getElementById("adminMessage");

statusForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const complaintId =
        document.getElementById("complaintId").value;

    const status =
        document.getElementById("complaintStatus").value;

    try {
        const response = await fetch(
            `${API_URL}/complaints/${complaintId}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ status })
            }
        );

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.message || "Status update failed");
        }

        adminMessage.textContent = result.message;

        await loadComplaints();
        statusForm.reset();
    } catch (error) {
        adminMessage.textContent = "Error: " + error.message;
    }
});

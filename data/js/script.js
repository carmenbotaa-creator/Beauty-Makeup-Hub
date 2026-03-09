let services = [];

fetch("data/resurces.json")
    .then(response => {
        if (!response.ok) {
            throw new Error("Fișierul JSON nu a fost găsit!");
        }
        return response.json();
    })
    .then(data => {
        services = data;
        displayServices(services);
    })
    .catch(error => {
        document.getElementById("resourceList").innerHTML =
            "<p style='color:red;'>Eroare la încărcarea datelor!</p>";
        console.error(error);
    });

function displayServices(data) {
    const container = document.getElementById("resourceList");
    container.innerHTML = "";

    data.forEach(item => {
        container.innerHTML += `
            <div>
                <h3>${item.name}</h3>
                <p><strong>Categorie:</strong> ${item.type}</p>
                <p><strong>Locație:</strong> ${item.location}</p>
                <p><strong>Program:</strong> ${item.program}</p>
                <p><strong>Tags:</strong> ${item.tags.join(", ")}</p>
                <hr>
            </div>
        `;
    });
}

function filterMakeup() {
    const filtered = services.filter(s => s.type === "makeup");
    const container = document.getElementById("filteredList");
    container.innerHTML = "";

    if (filtered.length === 0) {
        container.innerHTML = "<p>Nu există servicii de machiaj momentan.</p>";
        return;
    }

    filtered.forEach(item => {
        container.innerHTML += `
            <div>
                <h3>${item.name}</h3>
                <p>Locație: ${item.location}</p>
            </div>
        `;
    });
}

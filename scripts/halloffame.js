document.addEventListener("DOMContentLoaded", () => {
    const hallOfFameContainer = document.getElementById("halloffame");

    fetch("data/halloffame.json")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Erreur lors du chargement des données JSON.");
            }
            return response.json();
        })
        .then((data) => {
            data.forEach((member) => {
                    const card = document.createElement("div");
                    card.className = "bg-yellow-100 rounded-lg shadow-md p-4 mb-4";

                    const img = document.createElement("img");
                    img.src = member.image;
                    img.alt = member.name;
                    img.className = "w-full object-cover rounded-lg mb-4"; // Set a fixed height
                    img.style.width = "100%"; // Ensure full width
                    img.style.height = "400px"; // Ensure uniform height
                    img.style.objectFit = "cover"; // Maintain aspect ratio and fill the container

                    const name = document.createElement("h2");
                    name.className = "text-2xl font-bold text-yellow-800";
                    name.textContent = member.name;

                    const achievement = document.createElement("p");
                    achievement.className = "text-lg mt-2";
                    achievement.textContent = member.achievement;

                    card.appendChild(img);
                    card.appendChild(name);
                    card.appendChild(achievement);
                    hallOfFameContainer.appendChild(card);
                }
            );
        })
        .catch((error) => {
            console.error(error);
            hallOfFameContainer.innerHTML = "<p>Impossible de charger les données.</p>";
        });
});

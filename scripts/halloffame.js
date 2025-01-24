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
                // Ajout de classes flexibles pour desktop
                card.className =
                    "bg-yellow-100 rounded-lg shadow-md p-4 mb-6 flex flex-col lg:flex-row lg:items-center lg:space-x-6";

                const img = document.createElement("img");
                img.src = member.image;
                img.alt = member.name;
                // Classes pour l'image
                img.className =
                    "w-full lg:w-48 lg:h-48 object-contain rounded-lg mb-4 lg:mb-0";

                const textContainer = document.createElement("div");
                const name = document.createElement("h2");
                name.className = "text-2xl font-bold text-yellow-800";
                name.textContent = member.name;

                const achievement = document.createElement("p");
                achievement.className = "text-lg mt-2";
                achievement.textContent = member.achievement;

                textContainer.appendChild(name);
                textContainer.appendChild(achievement);
                card.appendChild(img);
                card.appendChild(textContainer);
                hallOfFameContainer.appendChild(card);
            });
        })
        .catch((error) => {
            console.error(error);
            hallOfFameContainer.innerHTML = "<p>Impossible de charger les données.</p>";
        });
});

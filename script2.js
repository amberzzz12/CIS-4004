const cache = {};
let currentPokemon = null;


window.onload = () => {
    document.getElementById("pokemonImage").src = "Untitled 2.png";
};

async function findPokemon() {
    const input = document.getElementById("pokemonInput").value.toLowerCase();
    if (!input) return;

    if (cache[input]) {
        displayPokemon(cache[input]);
        return;
    }

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);
        if (!response.ok) throw new Error();
        const data = await response.json();

        cache[input] = data;
        displayPokemon(data);

    } catch (error) {
        alert("Pokemon not found.");
    }
}

function displayPokemon(data) {
    currentPokemon = data;

    document.getElementById("pokemonImage").src = data.sprites.front_default;
    document.getElementById("pokemonCry").src = `https://play.pokemonshowdown.com/audio/cries/${data.name}.mp3`;

    const moveSelects = [
        document.getElementById("move1"),
        document.getElementById("move2"),
        document.getElementById("move3"),
        document.getElementById("move4")
    ];

    moveSelects.forEach(select => select.innerHTML = "");

    const moves = data.moves.slice(0, 20);

    moves.forEach(moveObj => {
        moveSelects.forEach(select => {
            const option = document.createElement("option");
            option.value = moveObj.move.name;
            option.textContent = moveObj.move.name;
            select.appendChild(option);
        });
    });
}

function addToTeam() {
    if (!currentPokemon) return;

    const teamDiv = document.getElementById("team");

    const memberDiv = document.createElement("div");
    memberDiv.classList.add("team-member");

    const img = document.createElement("img");
    img.src = currentPokemon.sprites.front_default;

    const name = document.createElement("h4");
    name.textContent = currentPokemon.name.toUpperCase();

    const moveList = document.createElement("ul");

    const selectedMoves = [
        document.getElementById("move1").value,
        document.getElementById("move2").value,
        document.getElementById("move3").value,
        document.getElementById("move4").value
    ];

    selectedMoves.forEach(move => {
        const li = document.createElement("li");
        li.textContent = move;
        moveList.appendChild(li);
    });

    memberDiv.appendChild(name);
    memberDiv.appendChild(img);
    memberDiv.appendChild(moveList);

    teamDiv.appendChild(memberDiv);
}
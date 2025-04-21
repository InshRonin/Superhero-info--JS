

async function superHero() {

    try {
        showLoader();
        const response = await fetch('https://akabab.github.io/superhero-api/api/all.json')
        const data = await response.json()
        const heroName = document.getElementById("heroName")
        const heroImage = document.getElementById("hero-image")
        const apperanceFirst = document.getElementById("apperance")
        const publisher = document.getElementById("publisher")
        const fullName = document.getElementById("fullName")
        const relatives = document.getElementById("relatives")
        const info = document.querySelector(".hero-info")
        const msg = document.getElementById("error-message")


        const updatedCharacters = data.map(character => ({
            ...character,
            name: character.name.toLowerCase()
        }));
        character = updatedCharacters.find(character => character.name === heroName.value.toString().toLowerCase().replace(" ", "-"))
        console.log(character)
        if (!character) {
            msg.style.display = "block"
            heroImage.style.display = "none"
            info.style.display = "none"
            return
        }
        else{
        heroImage.src = character.images.md
        heroImage.style.display = "block"
        info.style.display = "block"
        apperanceFirst.innerHTML = `First Appearance: ${character.biography.firstAppearance}`
        publisher.innerHTML = `Publisher: ${character.biography.publisher}`
        fullName.innerHTML = `Full Name: ${character.biography.fullName}`
        relatives.innerHTML = `Relatives: ${character.connections.relatives}`
        }   


    }
    catch (error) {
        console.error("Error fetching data:", error);

    }

    finally{
        hideLoader();
    }
    

      
}


function showLoader() {
    const loader = document.getElementById("loader");
    loader.classList.remove("hidden"); // Make loader visible
  }
  
  function hideLoader() {
    const loader = document.getElementById("loader");
    loader.classList.add("hidden"); // Hide loader
  }
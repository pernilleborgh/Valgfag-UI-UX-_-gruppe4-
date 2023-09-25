function updateTime() {
    //bestemmer funktion til ny dato
    const now = new Date();
    //funktionen tager fat i et id element fra html.
    //dette skal bruges til at vide hvor indholdet skal placeres i html. 
    const clock = document.getElementById("ur");
    //forskellige elementer der hører til et ur. 
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: 'numeric', 
        minute: 'numeric', 
        second: 'numeric', 
        hour12: true 
    };
    const formattedDate = now.toLocaleDateString(undefined, options);
    clock.textContent = formattedDate;
};

//opdaterer klokkeslæt hvert sekund
setInterval(updateTime, 1000);
updateTime();
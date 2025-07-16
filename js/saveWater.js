    var waterConsumed = 0.0,
        elementWaterAmount = document.getElementById("water-amount");
    
    function saveWater() {
        waterConsumed += Number(document.getElementById("consumed-water").value);
        console.log("Vypitá voda:", waterConsumed, "ml");
        elementWaterAmount.innerHTML = waterConsumed;

            htmx.ajax('GET', '/landing-page.html', {
            target: '#main'
        });
    }
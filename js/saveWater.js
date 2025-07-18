    var waterConsumed = 0.00,
        elementWaterAmount = document.getElementById("water-amount");
    
    function saveWater() {
        waterConsumed += Number(document.getElementById("consumed-water").value);
        elementWaterAmount.innerHTML = waterConsumed;

            htmx.ajax('GET', 'landing-page.html', {
            target: '#main'
        });
    }
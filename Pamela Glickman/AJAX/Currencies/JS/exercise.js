const displayCurrency = function() {
    event.preventDefault();
    const base = $('#base').val();
    const amount = $('#amount').val();
    const target = $('#target').val();
    $.ajax(`http://data.fixer.io/api/latest?access_key=6710447bd2d15946872fb285dc67ed48`).done(function (results) {
      const baseFactor = results.rates[base];
      const targetFactor = results.rates[target];
      const convertedAmount = (targetFactor * amount) / baseFactor;
      $('#converted-amount').text(`${convertedAmount.toFixed(2)} ${target}`);
    });
}

$(document).ready(function(event) {
  $('#currency-form').on("submit", displayCurrency);
})

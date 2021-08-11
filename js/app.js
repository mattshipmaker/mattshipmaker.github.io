//please don't abuse my free api key, please
const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-quotes?region=CA&symbols=GME",
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "94d21886cbmsha2d63d016a8567bp1aff1djsne7275c8968b9",
        "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
    }
};

let run = true;

$(document).ready(function () {
    console.log("yo")
})

function runStockQuote() {
    if (run) {
        $.ajax(settings)
            .done(function (response) {
                $("#stockPrice").text(response.quoteResponse.result[0].bid)
            }).fail(function () {
                $("#stockPrice").text("failed to get quote")
            }).always(function(){
                run = false
            })
    }
}
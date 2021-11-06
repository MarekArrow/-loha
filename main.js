$(document).ready(function () {

var data = [{
      "price": 12
    },
    {
      "price": 10
    },
    {
      "price": 36
    },
    {
      "price": 30
    },
    {
      "price": 60
    },
    {
      "price": 50
    },
    {
      "price": 120
    },
    {
      "price": 100
    },
  ];

var params = [
    {
        "productId": "P1",
        "period": "month"
    },
    {
        "productId": "P1",
        "period": "year"
    }
]

for (let i = 0; i < params.length; i++) {
    productId = params[i].productId
    period = params[i].period

    getData(productId, period, i)
}

  setData(data)
})

function setData(data) {
    document.getElementById("first").innerHTML = "$ " + data[0].price + " / month"
    document.getElementById("first-sub").innerHTML = data[1].price + " per year"
    document.getElementById("second").innerHTML = "$ " + data[2].price + " / month"
    document.getElementById("second-sub").innerHTML = data[3].price + " per year"
    document.getElementById("third").innerHTML = "$ " + data[4].price + " / month"
    document.getElementById("third-sub").innerHTML = data[5].price + " per year"
    document.getElementById("fourth").innerHTML = "$ " + data[6].price + " / month"
    document.getElementById("fourth-sub").innerHTML = data[7].price + " per year"
}

function getData(productId, period, iteration) {
    $.ajax({
        type: 'POST',
        method: 'POST',
        url: 'https://api.decisionrules.io/rule/solve/b8296c1c-afa0-3298-54d2-38caff0e7eee/1',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer t-NQGhawJ_Ec4eadGo6CfPTJMHStiT3mxlHvrgmtfbxzh6_QKhRT_sJnOS-kk9o3',
          'X-Strategy': 'ARRAY',
            'Access-Control-Allow-Origin': '*',
        },
        dataType: 'json',
        data: {
            'Product_ID': productId,
            'Period': period,
        },
        success: function (data) {
          data[iteration] = data[iteration]
        },
      })
}

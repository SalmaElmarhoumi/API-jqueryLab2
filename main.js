$(function () {
    function fetchProducts() {
        $.ajax({
            url: "https://dummyjson.com/products",
            success: function (res) {
                console.log(res)
                displayProducts(res.products);
            },
            error: function (err) {
                console.log(err)
            },
            data: {},
        })
    }

    function displayProducts(products) {
        $("#product-container").empty(); 
        for (let i = 0; i < products.length; i++) {
            let container = $("<div>").addClass("eachProduct")
            let img = $("<img>").attr("src", products[i].thumbnail).addClass("product-img")
            let title = $("<h3>").text(products[i].title).addClass("product-title")
            let description = $("<p>").text(products[i].description).addClass("product-description")
            container.append(img, title, description)
            $("#product-container").append(container)
        }
    }

    fetchProducts();

    window.searchProducts = function () {
        let searchID = $("#searchInput").val();
        $.ajax({
            url: "https://dummyjson.com/products",
            success: function (res) {
                console.log(res)
                let foundProduct = res.products.find(product => product.id == searchID);
                if (foundProduct) {
                    displayProducts([foundProduct]);
                } else {
                    alert("Product not found with the specified ID");
                }
            },
            error: function (err) {
                console.log(err)
            },
            data: {},
        })
    }
})
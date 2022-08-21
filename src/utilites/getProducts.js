export const getProducts = async (url) => {

    let response = await fetch(url)

    let data = await response.json()

    return data
}


export const getProduct = async (id) => {
    let response = await fetch(`https://fakestoreapi.com/products/${id}`);

    let data = await response.json();

    return data;
  };

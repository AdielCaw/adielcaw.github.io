export default {
  async editProduct(context, data) {
    const token = context.rootGetters.token;

    const productData = {
      image: data.image,
      title: data.title,
      description: data.description,
      price: data.price
    };

    const response = await fetch(
      `https://vue-portfolio-b2f6b-default-rtdb.asia-southeast1.firebasedatabase.app/products/${data.id}.json?auth=` + 
      token
    , {
        method: 'PATCH',
        body: JSON.stringify(productData),
    });
    const responseData = await response.json();
    console.log(responseData);

    if (!response.ok) {
      const error = new Error(
        responseData.message || '[EDIT] Failed to send request.');
        throw error;
    }

    return context.dispatch('loadProducts');
  },
  async removeProduct(context, data) {
    const token = context.rootGetters.token;

    const response = await fetch(
      `https://vue-portfolio-b2f6b-default-rtdb.asia-southeast1.firebasedatabase.app/products/${data.id}.json?auth=` + 
      token
    , {
        method: 'DELETE',
    });
    const responseData = await response.json();
    console.log(responseData);

    if (!response.ok) {
      const error = new Error(
        responseData.message || '[DELETE] Failed to send request.');
        throw error;
    }

    return context.dispatch('loadProducts');
  },
  async addProduct(context, data) {
    const token = context.rootGetters.token;

    const productData = {
      image: data.image,
      title: data.title,
      description: data.description,
      price: data.price
    };


    const response = await fetch(
      `https://vue-portfolio-b2f6b-default-rtdb.asia-southeast1.firebasedatabase.app/products.json?auth=` + 
      token
    , {
        method: "POST",
        body: JSON.stringify(productData),
      }
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.message || '[ADD] Failed to send request.');
        throw error;
    }

    context.commit("addProduct", {
      ...productData
    });
  },
  async loadProducts(context) {
    const response = await fetch(
      `https://vue-portfolio-b2f6b-default-rtdb.asia-southeast1.firebasedatabase.app/products.json`
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || "Failed to fetch!");
      throw error;
    }

    const products = [];

    for (const key in responseData) {
      const product = {
        id: key,
        image: responseData[key].image,
        title: responseData[key].title,
        description: responseData[key].description,
        price: responseData[key].price,
      };
      products.push(product);
    }

    context.commit("setProducts", products);

  },
};

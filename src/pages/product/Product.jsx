import ProductContext from "../../context/product/ProductContext";
import { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import CartContext from "../../context/cart/CartContext";

const Product = () => {
    const { id } = useParams();
  
    const { getProduct, product } = useContext(ProductContext);
    const { addItemToCart, cartCount } = useContext(CartContext);
    const handleAdd = () => { if(cartCount < stock) addItemToCart(product[0])};
    const { name, stock, price, image, SKU } = product[0];
  
    useEffect(() => {
      const fetchProduct = async () => {
        await getProduct(id);
      };
      fetchProduct();
    }, []);
  
    return (
      <div>
        <div className="bg-white">
          {product.length === 0 ? null : (
            <>
              <div className="pt-6">
                <nav aria-label="Breadcrumb">
                  <ol
                    role="list"
                    className="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8"
                  >
                    <li>
                      <div className="flex items-center">
                        <Link
                          to="/products"
                          className="mr-2 text-sm font-medium text-gray-900"
                        >
                          Catálogo
                        </Link>
                        <svg
                          width="16"
                          height="20"
                          viewBox="0 0 16 20"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          className="w-4 h-5 text-gray-300"
                        >
                          <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                        </svg>
                      </div>
                    </li>
  
                    <li className="text-sm">
                      <a
                        href="#"
                        aria-current="page"
                        className="font-medium text-gray-500 hover:text-gray-600"
                      >
                        {name}
                      </a>
                    </li>
                  </ol>
                </nav>
                <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
                  <div className="w-full rounded-lg overflow-hidden lg:block">
                    <img
                      src={image}
                      alt="Two each of gray, white, and black shirts laying flat."
                      className="w-full h-80 object-center object-cover"
                    />
                  </div>
                </div>
  
                <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
                  <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                    <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                      {name}
                    </h1>
                  </div>
  
                  <div className="mt-4 lg:mt-0 lg:row-span-3">
                    <h2 className="text-3xl font-extrabold text-gray-400">
                      Características
                    </h2>
  
                    <p className="text-base text-gray-900 mt-6">
                      <b>SKU</b>: {SKU}
                    </p>
  
                    <p className="text-base text-gray-900 mt-6">
                      <b>Precio</b>: ${price}
                    </p>
                    <p className="text-base text-gray-900 mb-6">
                      <b>Stock</b>: {stock}
                    </p>
  
                   {stock === 0 ? (
                      <h4 className="text-red-800 no-underline">Sin Stock</h4>
                    ) : (
                      <Link to="/crear-cuenta">
                        {" "}
                        <button
                          type="button"
                          className="mt-10 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          onClick={handleAdd} 
                        >
                          Añadir
                        </button>
                      </Link>
                    )}
                  </div>
  
                  <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                    <div>
                      <h3 className="sr-only">Description</h3>
  
                      <div className="space-y-6">
                        <p className="text-base text-gray-900">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Cras tempus malesuada odio, a euismod odio sagittis id.
                          Phasellus volutpat dui rutrum ligula dapibus tempor.
                          Curabitur in justo in neque aliquet sagittis quis nec
                          augue. In mattis, lectus non imperdiet imperdiet, est
                          lectus posuere felis, nec fermentum eros dolor ut dolor.
                          Fusce finibus velit vitae cursus vehicula. Donec
                          accumsan tincidunt est pulvinar suscipit. Mauris
                          bibendum id magna at iaculis. Mauris interdum dolor quis
                          tortor porta, et consectetur nisl viverra. Vivamus in
                          congue mi, in feugiat enim. Etiam convallis mauris dui,
                          quis luctus purus consectetur id. Maecenas pharetra
                          vitae tellus fringilla congue. Quisque aliquam eget sem
                          vel aliquam.{" "}
                        </p>
                      </div>
                    </div>
  
                    <div className="mt-10">
                      <h2 className="text-sm font-medium text-gray-900">
                        Details
                      </h2>
  
                      <div className="mt-4 space-y-6">
                        <p className="text-sm text-gray-600">
                          In a consectetur urna. Donec et ipsum turpis. Morbi in
                          lectus vel turpis faucibus feugiat vel ac urna.
                          Suspendisse imperdiet congue dolor, non mattis est
                          porttitor in. Etiam commodo quam vitae congue eleifend.
                          In a felis id velit imperdiet varius a at turpis. Nullam
                          porta, ligula quis aliquet iaculis, lectus magna
                          faucibus odio, eget venenatis risus lectus vitae sem.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    );
  };
  
  export default Product;
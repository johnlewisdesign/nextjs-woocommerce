import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';

import { WOO_CONFIG } from 'utils/config/nextConfig';

/**
 * Displays all of the products as long as length is defined.
 * Does a map() over the props array and utilizes uuidv4 for unique key values.
 * @param {Object} products
 */
const IndexProducts = ({ products }) => {
  return (
    <>
      <section className="container mx-auto bg-white">
        <div id="product-container" className="flex flex-wrap items-center">
          {products ? (
            products.map(
              ({
                productId,
                name,
                price,
                regularPrice,
                salePrice,
                onSale,
                slug,
                image,
              }) => (
                <div
                  key={uuidv4()}
                  className="flex flex-col p-6 md:w-1/2 xl:w-1/4"
                >
                  <Link
                    href="/produkt/[post]"
                    as={`/produkt/${slug}?productId=${productId}`}
                  >
                    <a>
                      {image ? (
                        <img
                          id="product-image"
                          className="transition duration-500 ease-in-out transform cursor-pointer hover:grow hover:shadow-lg hover:scale-105"
                          alt={name}
                          src={image.sourceUrl}
                        />
                      ) : (
                        <img
                          id="product-image"
                          className="transition duration-500 ease-in-out transform cursor-pointer hover:grow hover:shadow-lg hover:scale-105"
                          alt={name}
                          src={WOO_CONFIG.PLACEHOLDER_SMALL_IMAGE_URL}
                        />
                      )}
                    </a>
                  </Link>
                  <Link
                    href="/produkt/[post]"
                    as={`/produkt/${slug}?productId=${productId}`}
                  >
                    <a>
                      <div className="flex justify-center pt-3">
                        <p className="font-bold text-center cursor-pointer">
                          {name}
                        </p>
                      </div>
                    </a>
                  </Link>

                  {/* Display sale price when on sale */}
                  {onSale && (
                    <>
                      <div className="flex justify-center">
                        <div className="pt-1 text-gray-900 line-through">
                          {regularPrice}
                        </div>
                        <div className="pt-1 ml-2 text-gray-900">
                          {salePrice}
                        </div>
                      </div>
                    </>
                  )}
                  {/* Display regular price when not on sale */}
                  {!onSale && (
                    <p className="pt-1 text-center text-gray-900"> {price}</p>
                  )}
                </div>
              )
            )
          ) : (
            <div className="mx-auto text-xl font-bold text-center text-gray-800 no-underline uppercase">
              Ingen produkter funnet
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default IndexProducts;

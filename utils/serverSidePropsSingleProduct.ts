import { getOrigamiList } from '../data/connect';

export async function getServerSidePropsAndUpdateSingleProduct(context: any) {
  // getting products from database
  const products = await getOrigamiList();
  // you also have to convert the function to an async function!!

  const productId = parseInt(context.query.productId);
  const matchedProduct = products.find((product) => product.id === productId);

  const parsedCookies = context.req.cookies.count
    ? JSON.parse(context.req.cookies.count)
    : [];

  const foundCookies = parsedCookies
    .map((cookieInfo: { id: number; count: number }) => {
      return {
        ...products.find((origami: Record<string, unknown>) => {
          if (origami.id === cookieInfo.id) {
            origami.count = cookieInfo.count;
            return {
              ...origami,
            };
          }
        }),
      };
    })
    .map((item: Record<string, unknown>) => {
      return {
        ...item,
      };
    });

  // loop over cookies
  const foundInCookies = parsedCookies.find(
    // eslint-disable-next-line @typescript-eslint/no-shadow
    (parsedCookies: any) => parsedCookies.id === productId,
  );

  if (foundInCookies) {
    //  @ts-ignore
    matchedProduct.count = foundInCookies.count;
  }

  if (matchedProduct === undefined) {
    return {
      props: {
        error: 'Page not found',
      },
    };
  }

  return {
    props: {
      matchedProduct,
      foundCookies,
    },
  };
}

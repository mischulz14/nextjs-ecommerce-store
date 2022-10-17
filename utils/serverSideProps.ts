import { getOrigamiList } from '../data/connect';

export async function getProductListAndCookieInfo(context: any) {
  const origamiFigures: any = await getOrigamiList();

  const parsedCookies = context.req.cookies.count
    ? JSON.parse(context.req.cookies.count)
    : [];

  // loop over cookies
  const foundInCookies = parsedCookies
    .map((cookieInfo: { id: number; count: number }) => {
      return {
        ...origamiFigures.find((origami: Record<string, unknown>) => {
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

  return {
    props: { origamiFigures, foundInCookies: foundInCookies },
  };
}

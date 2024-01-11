import { routeMapper } from "./routeMapper";

export const getGhostData = async (input: Parameters<typeof routeMapper>[0], slug?: string) => {
  const getRoute = routeMapper(input, slug as string);
  const endpoint = getRoute.route;
  const options = getRoute.options;

  const url = `${process.env.GHOST_URL}/ghost/api/content/${endpoint}?key=${process.env.GHOST_KEY}${options}`;

  const response = await fetch(url);

  const data = await response.json();

  return data[getRoute.prefix]
};

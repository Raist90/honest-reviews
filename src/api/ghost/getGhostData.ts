import { routeMapper } from "./routeMapper";

/** @todo Use a discriminated union to make slug required when input is singlePost */
export const getGhostData = async (input: string, slug?: string) => {
  const getRoute = routeMapper(input, slug as string);
  const endpoint = getRoute.route;
  const options = getRoute.options;

  const url = `${process.env.GHOST_URL}/ghost/api/content/${endpoint}?key=${process.env.GHOST_KEY}${options}`;

  const response = await fetch(url);

  const data = await response.json();

  return data[getRoute.data];
};

import { routeMapper } from "./routeMapper";
import * as allGetters from '@/api/ghost/utils'

type GetterReturnList = ReturnType<typeof allGetters[keyof typeof allGetters]>

/** todo Complete this, something is not right, we should only return `data` */
export const getGhostData = async (input: Parameters<typeof routeMapper>[0], slug?: string) => {
  const getRoute = routeMapper(input, slug as string);
  const endpoint = getRoute.route;
  const options = getRoute.options;

  const url = `${process.env.GHOST_URL}/ghost/api/content/${endpoint}?key=${process.env.GHOST_KEY}${options}`;

  const response = await fetch(url);

  const data: GetterReturnList = await response.json();

  return data[getRoute.data];
};

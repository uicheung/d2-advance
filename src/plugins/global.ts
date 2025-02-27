import { App } from 'vue';
import { RouteMap } from '@/constants/route';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $RouteMap: typeof RouteMap;
  }
}

export default (app: App) => {
  app.config.globalProperties.$RouteMap = RouteMap;
};

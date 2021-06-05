import { createStore, useStore as baseUseStore, Store } from "vuex";
import { InjectionKey } from "vue";
import weather from "./modules/weather";
import log from "./modules/log";

// TypeScriptでStoreを使用するのにkeyが必要
export const key: InjectionKey<Store<State>> = Symbol();

// useStore functionを定義
export function useStore(): Store<State> {
  return baseUseStore(key);
}

// Stateのインターフェース
export interface State {
  // log
  json: string[];
  // weather
  description: string;
  temp: string;
  place: string;
}

export const store = createStore<State>({
  modules: {
    weather: weather,
    log: log,
  },
});

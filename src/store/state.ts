import { createStore, useStore as baseUseStore, Store } from "vuex";
import { InjectionKey } from "vue";
import { actions } from "./actions";
import { mutations } from "./mutations";

// TypeScriptでStoreを使用するのにkeyが必要
export const key: InjectionKey<Store<State>> = Symbol();

// useStore functionを定義
export function useStore(): Store<State> {
  return baseUseStore(key);
}

// Stateのインターフェース
export interface State {
  json: string[];
}

export const store = createStore<State>({
  state: {
    json: [],
  },
  mutations: mutations,
  actions: actions,
  modules: {},
});

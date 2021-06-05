// Stateのインターフェース
// export interface weather {
//   weather: BigInteger;
//   temp: BigInteger;
// }

const weather = {
  namespaced: false,
  state: {
    description: "",
    temp: "",
    place: "",
  },
  mutations: {},
  actions: {},
};

export default weather;

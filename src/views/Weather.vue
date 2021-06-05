<script lang="tsx">
import { defineComponent, ref, onMounted } from "vue";
import axios from "axios";
import { useStore } from "@/store/state";

export default defineComponent({
  setup() {
    const store = useStore();

    const apiKey = process.env.VUE_APP_WEATHER_API_KEY;
    const url = process.env.VUE_APP_WEATHER_API_BASE_URL;
    const fullUrl = url.replace("KEY", apiKey);
    const message = ref("現在の天気");

    onMounted(() => {
      getWeather();
    });
    const getWeather = () => {
      axios.get(fullUrl).then((response) => {
        store.state.description = response.data.weather[0].description;
        store.state.temp = response.data.main.temp;
        store.state.place = response.data.name;
      });
    };

    return () => (
      <div id="weather">
        <h1>{message.value}</h1>
        <br />
        <h1>場所 : {store.state.place}</h1>
        <h1>天気 : {store.state.description}</h1>
        <h1>気温 : {store.state.temp} ℃</h1>
      </div>
    );
  },
});
</script>

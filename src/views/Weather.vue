<script lang="tsx">
import { defineComponent, ref, onMounted } from "vue";
import axios from "axios";

export default defineComponent({
  setup() {
    const apiKey = process.env.VUE_APP_WEATHER_API_KEY;
    const url = process.env.VUE_APP_WEATHER_API_BASE_URL;
    const fullUrl = url.replace("KEY", apiKey);
    const message = ref("現在の天気");
    const weather = ref("");
    const temp = ref("");
    const place = ref("");

    onMounted(() => {
      getWeather();
    });
    const getWeather = () => {
      axios.get(fullUrl).then((response) => {
        console.log(response.data);
        weather.value = response.data.weather[0].description;
        temp.value = response.data.main.temp;
        place.value = response.data.name;
      });
    };

    return () => (
      <div id="weather">
        <h1>{message.value}</h1>
        <br />
        <h1>場所 : {place.value}</h1>
        <h1>天気 : {weather.value}</h1>
        <h1>気温 : {temp.value} ℃</h1>
      </div>
    );
  },
});
</script>

<style scoped lang="scss">
.weather-button {
  border: 0;
  line-height: 2.5;
  padding: 0 20px;
  font-size: 1rem;
  text-align: center;
  color: #fff;
  text-shadow: 1px 1px 1px #000;
  border-radius: 10px;
  background-color: rgba(220, 0, 0, 1);
  background-image: linear-gradient(
    to top left,
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0.2) 30%,
    rgba(0, 0, 0, 0)
  );
  box-shadow: inset 2px 2px 3px rgba(255, 255, 255, 0.6),
    inset -2px -2px 3px rgba(0, 0, 0, 0.6);
}
.styled:hover {
  background-color: rgba(255, 0, 0, 1);
}
.styled:active {
  box-shadow: inset -2px -2px 3px rgba(255, 255, 255, 0.6),
    inset 2px 2px 3px rgba(0, 0, 0, 0.6);
}
</style>

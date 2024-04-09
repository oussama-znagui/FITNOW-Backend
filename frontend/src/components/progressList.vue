<template>
  <div class="bg-black">
    <h1 class="text-white text-gray-50">progress list</h1>
  </div>
  <div class="conteiner">
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table
        class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
      >
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="px-6 py-3">Progress title</th>
            <th scope="col" class="px-6 py-3">weight</th>
            <th scope="col" class="px-6 py-3">size</th>

            <th scope="col" class="px-6 py-3">Action</th>
          </tr>
        </thead>
        <div>
          <ul v-if="loading">
            <li>Loading...</li>
          </ul>
          <ul v-else-if="error">
            <li>Error: {{ error }}</li>
          </ul>
          <ul v-else>
            <li v-for="item in items" :key="item.id">{{ item.name }}</li>
          </ul>
        </div>

        <tbody v-for="prg in progress" :key="prg.id">
          <tr
            class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {{ prg.title }}
            </th>
            <td class="px-6 py-4">{{ prg.weight }}</td>

            <td class="px-6 py-4">{{ prg.size }}</td>
            <td class="px-6 py-4">
              <a
                href="#"
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >Edit</a
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ProgressList",
  data() {
    return {
      progress: Array,
      loading: true,
    };
  },
  created() {
    this.getProgress();
  },
  methods: {
    async getProgress() {
      let url = "http://127.0.0.1:8000/api/progress/";
      await axios
        .get(url)
        .then((response) => {
          this.progress = response.data;
          this.loading = false;
          console.log("eeeee");
        })
        .catch((error) => {
          console.log(error);
          this.loading = false;
        });
    },
  },
  mounted() {
    console.log("Progress List c m ");
  },
};
</script>

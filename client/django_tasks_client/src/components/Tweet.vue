<template>
  <div class="tweets_container">
    <div class="add_tweet">
      <form v-on:submit.prevent="submitForm">
        <div class="form-group">
          <label for="title">Title</label>
          <input type="text" class="form-control" id="title" v-model="title" />
        </div>
        <div class="form-group">
          <label for="description">Description</label>
          <textarea
            class="form-control"
            id="description"
            v-model="description"
          ></textarea>
        </div>
        <div class="form-group">
          <button type="submit">Tweet</button>
        </div>
      </form>
    </div>

    <div class="tweets_content">
      <h1>Tweets</h1>
      <ul class="tweets_list">
        <li v-for="tweet in tweets" :key="tweet.id">
          <h2>{{ tweet.title }}</h2>
          <p>
            {{ tweet.description }}
            <span class="date_label">{{ tweet.created_at | formatDate }}</span>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tweets: [],
      title: "",
      description: "",
    };
  },
  methods: {
    async getData() {
      try {
        // fetch tweets
        const response = await this.$http.get(
          "http://localhost:8000/api/tweets/"
        );
        // set the data returned as tweets
        this.tweets = response.data;
      } catch (error) {
        // log the error
        console.log(error);
      }
    },

    async submitForm() {
      try {
        // Send a POST request to the API
        const response = await this.$http.post(
          "http://localhost:8000/api/tweets/",
          {
            title: this.title,
            description: this.description,
            completed: false,
          }
        );
        // Append the returned data to the tweets array
        this.tweets.push(response.data);
        // Reset the title and description field values.
        this.title = "";
        this.description = "";
      } catch (error) {
        // Log the error
        console.log(error);
      }
    },
  },
  created() {
    // Fetch tweets on page load
    this.getData();
  },
};
</script>

<style>
.date_label {
  font-size: 10px;
  color: gray;
}
</style>

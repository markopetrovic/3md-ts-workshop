<script>
import NewBookForm from "@/components/NewBookForm.vue";
import BookCard from "@/components/BookCard.vue";

export default {
  components: {
    NewBookForm,
    BookCard,
  },
  data: () => ({
    filterText: "",
    bookList: [
      {
        id: "7d9f3f17-964a-4e82-98e5-ecbba4d709a1",
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        genre: "Fantasy",
        printRun: 23000000,
      },
      {
        id: "5c986b74-fa02-4a22-98f2-b1ff3559e85e",
        title: "1984",
        author: "George Orwell",
        genre: "Fiction",
        printRun: 13000000,
      },
      {
        id: "c113411d-1589-414f-a283-daf7eedb631e",
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Drama",
        printRun: 9000000,
      },
      {
        id: "c113411d-1589-414f-a283-daf7eedb631e",
        title: "Thinking fast and slow",
        author: "Daniel Kahneman",
        genre: "Psychology",
        printRun: 550000,
      },
    ],
    showNewForm: false,
  }),
  computed: {
    filteredBookList() {
      return this.bookList.filter((book) => {
        if (book.name) {
          return book.name
            .toLowerCase()
            .includes(this.filterText.toLowerCase());
        } else {
          return this.bookList;
        }
      });
    },
    numberOfBooks() {
      return this.filteredBookList.length;
    },
  },
  methods: {
    addBook(payload) {
      this.bookList.push(payload);
      this.hideForm();
    },
    deleteBook(payload) {
      this.bookList = this.bookList.filter((book) => {
        return book.id !== payload.id;
      });
    },
    hideForm() {
      this.showNewForm = false;
    },
  },
  mounted() {
    const route = this.$route;
    if (route.query.new) {
      this.showNewForm = true;
    }
  },
};
</script>

<template>
  <div class="container-small">
    <div class="mt-6 sm:flex jusitfy-start mb-12 max-w-5xl">
      <button
        type="button"
        class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 mr-4"
        @click="showNewForm = true"
      >
        + New Book
      </button>
      <input
        v-model="filterText"
        type="text"
        class="rounded-lg border-gray-200 flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
        placeholder="Search books..."
      />
    </div>

    <!-- New Book Form -->
    <NewBookForm
      v-show="showNewForm"
      @add-new-book="addBook"
      @cancel-new-book="hideForm"
    />
    <h1 class="title text-2xl mb-2">
      Books <span class="ml-1.5">({{ numberOfBooks }})</span>
    </h1>
    <div class="overflow-hidden bg-white shadow dark:bg-gray-800 sm:rounded-md">
      <ul class="divide-y divide-gray-200">
        <li v-for="item in filteredBookList" :key="item.id">
          <BookCard :book="item" @delete-book="deleteBook" />
        </li>
      </ul>
    </div>
  </div>
</template>

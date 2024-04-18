import { type articleType } from "~/interface";
let articleList: articleType[] = [];
let viewingArticle: articleType = {
  id: "",
  sub_title: "",
  title: "",
  cover_image: "",
  content: "",
};

export const useStore = defineStore("store", {
  state: () => ({
    articles: articleList,
    viewing_article: viewingArticle,
  }),
  actions: {
    getArticle(id: string) {
      articleList = this.articles;
      this.viewing_article = articleList.find(
        (data) => data.id === id
      ) as articleType;
    },
  },
  persist: {
    storage: persistedState.sessionStorage,
  },
});

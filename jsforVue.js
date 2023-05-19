var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!",
  },
});

var app2 = new Vue({
  el: "#app-2",
  data: {
    message: "이 페이지는 " + new Date() + "에 로드 되었습니다",
  },
});

var app3 = new Vue({
  el: "#app-3",
  data: {
    seen: false,
  },
});

var app4 = new Vue({
  el: "#app-4",
  data: {
    todos: [{ text: "JS" }, { text: "Vue" }, { text: "do awesome something" }],
  },
});

Vue.component("todo-item", {
  template: "<li>할일 항목 하나입니다.</li>",
});

var app5 = new Vue();


let pageData={
  members:[
      {
        name:'Susan',
        gender:'Female'
      },
      {
        name:'Peter',
        gender:'Male'
      },
      {
        name:'Bill',
        gender:'Unknown'
    }]
};

const App= Vue.createApp({
    data(){
        return pageData;
    }
});

App.mount("#app");
/*Vue.createApp({
    data(){
        return pageData;
    }
}).mount("#app");*/ 
const vue = new Vue({
  el:'#app',
  data:{
    books:[
      {
        id:1,
        name: '《算法导论》',
        day: '2006-9',
        price: 85.00,
        count: 1
      },
      {
        id: 2,
        name: '《UNIX编程艺术》',
        day: '2006-2',
        price: 59.00,
        count: 1
      },
      {
        id: 3,
        name: '《编程珠玑》',
        day: '2008-10',
        price: 39.00,
        count: 1
      },
      {
        id: 4,
        name: '《代码大全》',
        day: '2006-3',
        price: 128.00,
        count: 1
      }
    ]
  },
  methods:{
    increment(index) {
      this.books[index].count++;
    },
    decrement(index) {
      this.books[index].count--;
    },
    btnRemoveClick(index) {
      this.books.splice(index,1);
    }
  },
  computed:{
    countTotal() {
      let total = 0;
      for (let i = 0; i < this.books.length; i++) {
        total += this.books[i].price * this.books[i].count;
      }
      return total;
    }
  },
  filters:{
    showPrice:function (price) {
      return '￥' + price.toFixed(2);
    }
  }
});
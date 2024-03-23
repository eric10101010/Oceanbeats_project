import { defineStore } from 'pinia';
import axios from 'axios';
import Swal from 'sweetalert2'
const { VITE_API, VITE_PATH } = import.meta.env;


export default defineStore('cartStore', {
  state: () => {
    return {
      carts: [],
      final_total: 0,
      total: 0,
      cartNum: 1,
      status: {
        addCartLoading: '',
        cartQtyLoading: ''
      },
    };
  },
  actions: {
    getCart() {
      const api =`${VITE_API}/api/${VITE_PATH}/cart`;
      axios.get(api)
          .then(res => {
              this.carts= res.data.data.carts;
              this.final_total= res.data.data.final_total;
              this.total= res.data.data.total;
              // console.log('pinia cart', this.carts);
          })
          .catch(err => {
              console.dir(err.response.data);
          });
    },
    addCart(product_id, qty) {
      this.status.addCartLoading = product_id;
      const order = {
          product_id,
          qty: this.cartNum,
      };
      const api =`${VITE_API}/api/${VITE_PATH}/cart`;
          axios.post(api, {data: order})
              .then(res => {
                  const name = res.data.data.product.title;
                  this.status.addCartLoading = '';
                  this.cartNum = 1;
                  Swal.fire({
                          title: `成功加入 ${name} 到購物車`,
                          icon: 'success',
                          confirmButtonText: '確認'
                  });
                  this.getCart();
              })
              .catch(err => {
                  console.dir(err);
                  Swal.fire({
                          title: `加入購物車失敗`,
                          icon: 'error',
                          confirmButtonText: '確認'
                  })
              });
    },
    adjustNum (action) {
      if (this.calculator > 1) {
          action === 'plus' ? (this.cartNum += 1) : (this.cartNum -= 1)
      } else {
          action === 'plus' ? (this.cartNum += 1) : (this.cartNum = 1)
      }
    },
    components:{
      Swal,
    }
  },
});

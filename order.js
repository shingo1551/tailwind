const template = document.getElementById('order');
const container = document.getElementById('container');

orders.forEach((_o, i) => {
  const clone = template.content.cloneNode(true);
  clone.querySelector(".minus").onclick = () => minus(i);
  clone.querySelector(".plus").onclick = () => plus(i);
  container.appendChild(clone);
});

function minus(n) {
  orders[n].count--;
  calc_total();
}

function plus(n) {
  orders[n].count++;
  calc_total();
}

function calc_total() {
  const list = container.querySelectorAll("div");
  list.forEach((item, i) => {
    const order = orders[i];
    item.querySelector(".qty").value = order.count;
    item.querySelector(".price").innerText = Number(order.price).toLocaleString();
    item.querySelector(".sub-total").innerText = Number(order.price * order.count).toLocaleString();
  });

  const total = orders.reduce((total, value) => total + value.price * value.count, 0);
  document.getElementById('total').innerText = Number(total).toLocaleString();
}

calc_total();

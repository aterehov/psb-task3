let time = 0;

function sleep(ms) {
  time += ms;
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function add_message(msg) {
  document.getElementById("results").innerHTML += msg;
}

async function start(event) {
  event.preventDefault();
  let n = Number(document.getElementById("n").value);
  let b = Number(document.getElementById("b").value);
  let m = Number(document.getElementById("m").value);
  let t = Number(document.getElementById("t").value);
  let r = Number(document.getElementById("r").value);

  if (b > m) {
    alert("Котик не может съедать больше корма, чем вмещает миска");
    return;
  }

  let food = m;
  // let time = 0;
  for (let i = 1; i <= n; ++i) {
    add_message(`<p>В миске находится ${food} корма</p>`);
    if (food < b) {
      add_message(`<p>Бабушка наполняет миску</p>`);
      await sleep(r * 1000);
      food = m;
      add_message(`<p>Бабушка наполнила миску</p>`);
    }
    add_message(`<p>Котик под номером ${i} подошел к миске</p>`);
    await sleep(t * 1000);
    food -= b;
    add_message(`<p>Котик под номером ${i} отошел от миски</p>`);
  }
  add_message(`<p>Все котики накормлены. Это заняло ${time / 1000} секунд</p>`);
}

document.getElementById("submit-button").addEventListener("click", start);

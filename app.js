function job() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("hello world");
    }, 2000);
  });
}

job().then((result) => {
  console.log(result);
});

function _job(data) {
  return new Promise((res, rej) => {
    if (isNaN(data)) {
      rej("error");
    } else if (+data % 2 === 1) {
      setTimeout(() => {
        res("odd");
      }, 1000);
    } else if (data % 2 == 0) {
      setTimeout(() => {
        rej("even");
      }, 2000);
    }
  });
}

_job(10)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

var promise = job1();

promise
  .then((data1) => {
    console.log("data1", data1);
    return job2();
  })
  .then((data2) => {
    console.log("data2", data2);
    return "Hello world";
  })
  .then((data3) => {
    console.log("data3", data3);
  });

function job1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("result of job 1");
    }, 1000);
  });
}

function job2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("result of job 2");
    }, 2000);
  });
}

function first() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Resolve");
      console.log("First");
    }, 2000);
  });
}

function second() {
  setTimeout(() => {
    console.log("Second");
  }, 1000);
}

async function run() {
  await first();
  second();
}

run();

//write code either above with async await or below promise based

first().then((result) => {
  second();
  console.log(result);
});

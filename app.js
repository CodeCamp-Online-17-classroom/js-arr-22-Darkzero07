function makeWorker() {
  let name = 'Pete';
  return function () {
    alert(name);
  };
}
let name = 'John';
let work = makeWorker();
work(); // *

//ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไร = pete

//และเพราะอะไร เพราะ let name = "john" เป็นการ assign ค่านอก function makeworker() จึงไม่มีผลต่อค่าใน function

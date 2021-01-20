// In computer science, an array data structure, or simply an array, is a data structure consisting of a collection of elements (values or variables), each identified by at least one array index or key. (lookup -> O(1), push -> O(1), insert -> O(n), delete O(n))

// const strings = ['a', 'b', 'c', 'd'];
// // 4*4 = 16 bytes of storage

// // lookup
// strings[2]; // O(1)

// // push
// strings.push('e'); // O(1) most of the time but it can be O(n)

// // pop
// strings.pop();
// strings.pop(); // O(1)

// // unshift
// strings.unshift('x'); // O(n)

// // splice
// strings.splice(2, 0, 'alien'); // O(n)

// console.log(strings);

// Static Array e.g c++ (Is that they're fixed in size, meaning you need to specify the number of elements your array will hold ahead of time.)
// Dynamic Array e.g javascript automatically allocate  memory expands as you add more elements so you don't need to determine the size ahead of time.

// Build array from scratch
// class MyArray {
//   constructor() {
//     this.length = 0;
//     this.data = {};
//   }

//   get(index) {
//     return this.data[index];
//   }

//   push(item) {
//     this.data[this.length] = item;
//     this.length++;
//     return this.length;
//   }

//   pop() {
//     const lastItem = this.data[this.length - 1];
//     delete this.data[this.length - 1];
//     this.length--;
//     return lastItem;
//   }

//   delete(index) {
//     const lastItem = this.data[index];
//     this.shiftItems(index);
//     return lastItem;
//   }

//   shiftItems(index) {
//     for (let i = index; i < this.length - 1; i++) {
//       this.data[i] = this.data[i + 1];
//     }
//     delete this.data[this.length - 1];
//     this.length--;
//   }
// }

// const newArray = new MyArray();
// newArray.push('hi');
// newArray.push('you');
// newArray.push('!');
// // newArray.pop();
// newArray.delete(0);
// newArray.push('are');
// newArray.push('nice');
// newArray.delete(1);
// console.log(newArray);

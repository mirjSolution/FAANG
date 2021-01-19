const nemo = ['nemo'];
const everyone = [
  'dory',
  'bruce',
  'marlin',
  'nemo',
  'gill',
  'bloat',
  'nigel',
  'squirt',
  'darla',
  'hank',
];
const large = new Array(10000).fill('nemo');

function findNemo(array) {
  let t1 = performance.now();
  for (i = 0; i < array.length; i++) {
    if (array === 'nemo') {
      console.log('Find Nemo!');
    }
  }
  let t0 = performance.now();
  console.log('Call to find Nemo took ' + (t1 - t0) + ' milliseconds');
}

findNemo(nemo);

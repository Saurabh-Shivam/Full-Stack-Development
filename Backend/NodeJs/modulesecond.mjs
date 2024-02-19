export function simple() {
  console.log("Simple is complex");
  return 45;
}

export default function simple2() {
  console.log("Simple 2 is complex");
}

// This will not work for modern js(.mjs)
// module.exports = simple;


function requireDemos(prefix, demoCount) {
  return new Array(demoCount).fill(null).map((item, index) => {
    return require(`${prefix}/${index + 1}`).default;
  });
}

export { requireDemos };

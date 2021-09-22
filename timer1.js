const arg = process.argv.slice(2);
if (arg.length > 0) {
  for (el of arg) {
    if (!isNaN(el) && el > 0) {
      setTimeout(() => {
        process.stdout.write("\x07");
      }, el * 1000);
    }
  }
}

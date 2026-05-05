try {
  let data = JSON.parse('invalid json');
} catch (error) {
  console.log("Error occurred:", error.message);
} finally {
  console.log("Done");
}
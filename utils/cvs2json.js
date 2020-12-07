module.exports = {
  cvs2json: (data) => {
    const content = data.split('\n').map(line => line.split(','));
    const headers = content[0];
    const rows = content.slice(1);

    return rows.map((line) => {
      return Object.fromEntries(headers.map((header, i) => [header, line[i]]))
    });
}
}
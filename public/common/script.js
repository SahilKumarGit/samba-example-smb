const links = [
    'https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js',
    'https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js',
    'https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.min.js',
  ]
  for (let each of links) {
    const link = document.createElement("script");
    link.src = each;
    document.head.appendChild(link);
  }
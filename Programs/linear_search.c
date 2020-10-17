long linear_search(long *p, long n,
long find) {
  long c;
 
  for (c = 0; c < n; c++) {
    if (*(p+c) == find)
      return c;
  }
 
  return -1;
}

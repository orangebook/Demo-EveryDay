#include <iostream>
#define LEN 10

int len_foo() {
  int i=1;
  return i;
}

constexpr int len_foo_constexpr() {
  return 5;
}

constexpr int fibonacci(const int n) {
  return n == 1 || n == 2 ? 1 : fibonacci(n-1) + fibonacci(n -2);
}

int main() {
  char arr_1[10];
  char arr_2[LEN];

  int len = 10;

  const int len_2 = len + 1;
  constexpr int len_2_constexpr = 1 + 2 + 3;
  char arr_4[len_2_constexpr];
  char arr_6[len_foo_constexpr() + 1];

  std::cout << fibonacci(100) << std::endl;

  return 0;
}
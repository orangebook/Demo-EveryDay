#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>
#include <ctype.h>


void* count_words(void *f);
int total_words = 0;
void* count_words(void *f);
pthread_mutex_t counter_lock = PTHREAD_MUTEX_INITIALIZER;

int main(int arg, char* args[]) {
  pthread_t t1, t2;
  if (arg!=3) {
    printf("usage: %s file1 file2\n", args[0]);
  }
  pthread_create(&t1, NULL, count_words, (void*) args[1]);
  pthread_create(&t2, NULL, count_words, (void*)args[2]);
  pthread_join(t1, NULL);
  pthread_join(t2, NULL);
  printf("%5d total words\n", total_words);
  return 0;
}

void* count_words(void *f) {
  char *filename = (char*) f;
  FILE *fp;
  int c, prevc = '\0';
  if ((fp= fopen(filename, "r"))!= NULL) {
    while((c=getc(fp))!=EOF) {
      if (!isalnum(c)&& isalnum(prevc)) {
        pthread_mutex_lock(&counter_lock);
        total_words++;
        pthread_mutex_unlock(&counter_lock);
      }
      prevc = c;
    }
    fclose(fp);
  } else {
    perror(filename);
  }
  // return NULL:
}
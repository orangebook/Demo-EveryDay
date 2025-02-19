#include <stdio.h>
#include <uv.h>

uv_loop_t *loop;
uv_process_t child_req;
uv_process_options_t options = {0};

void on_exit(uv_process_t *req, int64_t exit_status, int term_signal) {
  uv_close((uv_handle_t*)req, NULL);
  printf("donw\n");
    // fprintf(stderr, "Process exited with status %" PRId64 ", signal %d\n", exit_status, term_signal);
    // uv_close((uv_handle_t*) req, NULL);
}

int main(void) {
  loop = uv_default_loop();

  char* args[3];
  args[0]= "mkdir";
  args[1]= "test-dir";
  args[2]= NULL;

  options.exit_cb =on_exit;
  options.file = "mkdir";
  options.args = args;

  int r;
  if (( r= uv_spawn(loop, &child_req, &options))) {
    printf("%s\n", uv_strerror(r));
    return 1;
  } else {
    printf("Lanched process with ID %d\n", child_req.pid);
  }
  return uv_run(loop, UV_RUN_DEFAULT);
}
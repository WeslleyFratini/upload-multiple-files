class Routes {
  #io;
  constructor(io) {
    this.#io = io;
  }
  async post(request, response) {
    const { headers } = request;
    const onFinish = (response, redirecTo) => {
      response.writeHead(303, {
        Connection: "close",
        Location: `${redirecTo}?msg=Files uploaded with sucess`,
      });
    };
    return onFinish(response, headers.origin);
  }
}

module.exports = Routes;

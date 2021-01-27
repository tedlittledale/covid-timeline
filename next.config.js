module.exports = {
  async headers() {
    return [
      {
        source: "/",
        headers: [
          {
            key: "X-Frame-Options",
            value: "ALLOW-FROM https://tedspace.me/"
          }
        ]
      }
    ];
  }
};

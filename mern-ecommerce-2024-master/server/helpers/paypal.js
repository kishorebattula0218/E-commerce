const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "Ada-kRJrxwXMqKJbrBkf7nSqWc4d_GkscrpUCstEE8RYgpKwwFt9LFn5kdrirfz917e79wVHMOq5Th25",
  client_secret: "ELnmBA-TszebLjJVHxIIXeR_E3fHeeCA5vzOEiTz_rywX_7yw5zJYNHnZMmcw6UNdG7HY-0NxZH_KiRG",
});

module.exports = paypal;

module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '26763363e180f39acc402ae8685ecb0f'),
  },
});

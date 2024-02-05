module.exports = {
  webpack: {
    module: {
      rules: [
        {
          test: /\.svg/,
          type: 'asset/resource',
        },
      ],
    },
  },
  plugins: [
    {
      plugin: require('craco-alias'),
      options: {
        source: 'tsconfig',
        baseUrl: './src',
        tsConfigPath: './tsconfig.json',
      },
    },
  ],
};

export {};

/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: 'iliabedian-portfolio',
      removal: input?.stage === 'production' ? 'retain' : 'remove',
      home: 'aws',
      providers: {
        aws: {
          profile: input?.stage === 'production' ? 'prod' : 'dev',
          region: 'ca-central-1',
        },
      },
    };
  },
  async run() {
    new sst.aws.Nextjs('IliabedianPortfolio', {
      domain: {
        name:
          $app.stage === 'production' ? 'iliabedian.com' : 'dev.iliabedian.com',
        aliases: ['test.iliabedian.com'],
      },
    });
  },
});

/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: 'iliabedian-portfolio',
      removal: 'remove',
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
    const isProd = $app.stage === 'production';

    const aliases = isProd ? undefined : ['test.iliabedian.com'];
    const redirects = isProd ? ['www.iliabedian.com'] : undefined;

    new sst.aws.Nextjs('IliabedianPortfolio', {
      domain: {
        name: isProd ? 'iliabedian.com' : 'dev.iliabedian.com',
        aliases,
        redirects,
      },
    });
  },
});

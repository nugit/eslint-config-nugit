const mainConfig = {
  branches: [
    'master',
    { name: 'develop', channel: 'beta', prerelease: 'beta' },
  ],
  repositoryUrl: 'https://github.com/nugit/eslint-config-nugit.git',
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'conventionalcommits',
      },
    ],
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md',
      },
    ],
    '@semantic-release/npm',
    [
      '@semantic-release/git',
      {
        assets: ['CHANGELOG.md'],
        message:
          // eslint-disable-next-line no-template-curly-in-string
          'chore(release): ${nextRelease.version} [skip ci]',
      },
    ],
    '@semantic-release/github',
    '@semantic-release/exec',
    [
      'semantic-release-slack-bot',
      {
        notifyOnSuccess: true,
        notifyOnFail: true,
        markdownReleaseNotes: true,
      },
    ],
  ],
};

const { execSync } = require('child_process');
const { createHash } = require('crypto');

const branch = execSync('git branch --show-current').toString().trimEnd('\n');
const channel = `alpha.${createHash('md5').update(branch).digest('hex')}`;

const localConfig = {
  branches: [
    'master',
    { name: 'develop', channel: 'beta', prerelease: 'beta' },
    {
      name: branch,
      channel,
      prerelease: channel,
    },
  ],
  repositoryUrl: 'git@github.com:nugit/eslint-config-nugit.git',
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'conventionalcommits',
      },
    ],
    '@semantic-release/npm',
    [
      '@semantic-release/exec',
      {
        publishCmd: 'git checkout -- package.json',
      },
    ],
  ],
};

module.exports = process.env.LOCAL_RELEASE ? localConfig : mainConfig;

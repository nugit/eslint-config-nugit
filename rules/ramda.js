module.exports = {
  env: {
    es6: true,
  },

  plugins: [
    'ramda',
  ],

  rules: {
    'ramda/always-simplification': 'error',
    'ramda/any-pass-simplification': 'error',
    'ramda/both-simplification': 'error',
    'ramda/complement-simplification': 'error',
    'ramda/compose-pipe-style': 'error',
    'ramda/compose-simplification': 'error',
    'ramda/cond-simplification': 'error',
    'ramda/either-simplification': 'error',
    'ramda/eq-by-simplification': 'error',
    'ramda/filter-simplification': 'error',
    'ramda/if-else-simplification': 'error',
    'ramda/map-simplification': 'error',
    'ramda/merge-simplification': 'error',
    'ramda/no-redundant-and': 'error',
    'ramda/no-redundant-not': 'error',
    'ramda/no-redundant-or': 'error',
    'ramda/pipe-simplification': 'error',
    'ramda/prefer-both-either': 'error',
    'ramda/prefer-complement': 'error',
    'ramda/prefer-ramda-boolean': 'off',
    'ramda/prop-satisfies-simplification': 'error',
    'ramda/reduce-simplification': 'error',
    'ramda/reject-simplification': 'error',
    'ramda/set-simplification': 'error',
    'ramda/unless-simplification': 'error',
    'ramda/when-simplification': 'error',
  },
};

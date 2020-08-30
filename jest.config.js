module.exports = {
  transform: {
    "^.+\\.svelte$": [
      "svelte-jester",
      {
        "preprocess": true
      }
    ],
    '^.+\\.js$': 'babel-jest',
    "^.+\\.ts$": "ts-jest",
    "^.+\\.svg$": "jest-svg-transformer"
  },

  moduleFileExtensions: ['js', 'ts', 'svelte'],
}
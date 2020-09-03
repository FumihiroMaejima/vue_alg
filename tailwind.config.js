/* eslint-disable @typescript-eslint/no-var-requires */
// デフォルトのテーマの値
// const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.ts', './src/**/*.tsx', './src/**/*.vue'],
  theme: {
    extend: {
      colors: {
        cyan: '#9cdbff'
      },
      screens: {
        // xs:w-10で、480px幅以上で、w-10のスタイルが適用されるようになる
        // sxs: '480px'
      },
      fontFamily: {
        // sans: ['メイリオ', defaultTheme.fontFamily.sans]
      }
    }
  },
  variants: {
    // fontSize: ['responsive', 'hover']
  },
  plugins: []
  // prefix: 'x-',
}

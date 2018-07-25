let style = {
   triggers: {
      debugTabsInSettings: false
   },
   sizes: {
      one: 10,
      border: 1,
      ico: 23,

      cardImage: 200
   },
   colors: {
      blue: '#13aadf',
      yellow: '#fff642',
      indigo: '#01002c',
      black: '#000000',
      white: '#ffffff',
      violet: '#3f138f',
      silver: '#e8e9ea',
      barney: '#c3138f',
      steel: '#808096',
   },
   fonts: {
      h5: {
         fontSize: 95 / 2,
         fontFamily: 'Lato-Bold'
      },
      h4: {
         fontSize: 70.5 / 2,
         fontFamily: 'Lato-Bold'
      },
      h3: {
         fontSize: 50 / 2,
         fontFamily: 'Lato-Bold'
      },
      h2: {
         fontSize: 35 / 2,
         fontFamily: 'Lato-Regular'
      },
      numbers: {
         fontSize: 55 / 2,
         fontFamily: 'Lato-Bold'
      },
      normal_bold: {
         fontSize: 27 / 2,
         fontFamily: 'Lato-Bold'
      },
      normal: {
         fontSize: 27 / 2,
         fontFamily: 'Lato-Regular'
      },
      small: {
         fontSize: 24 / 2,
         fontFamily: 'Lato-Regular'
      },
      uppercase: {
      },
      link: {
         textDecorationLine: 'underline',
         color: '#13aadf'
      }
   },
};

style.presets = {
   horizontalOnePadding: {
      paddingHorizontal: style.sizes.one
   },
   whiteFill: {
      backgroundColor: style.colors.white
   }
};
style.sizes.three_and_ico = style.sizes.one * 3 + style.sizes.ico;

export default style;
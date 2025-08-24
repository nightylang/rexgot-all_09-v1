export default defineNitroPlugin((plugin) => {

})
module.exports = {
    future: {},
    purge: [

        './src/**/*.html',
        './src/**/*.vue',
        './src/**/*.jsx',
    ],
    theme: {
        extend: {},
    },
    variants: {
        appearance: []
    },
    plugins: [
        require('./plugins/gradients'),
        require('postcss-import'),
        require('tailwindcss'),
        require('autoprefixer'),
    ],
    corePlugins: {
        float: false
    }
}
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        ...process.env.NODE_ENV === 'production' ? [purgecss] : []
    ]
}
module.exports = {
    theme: {
        important: true,
        positions: {
            bottom: 'bottom',
            center: 'center',
            left: 'left',
            'left-bottom': 'left bottom',
            'left-top': 'left top',
            right: 'right',
            'right-bottom': 'right bottom',
            'right-top': 'right top',
            top: 'top',
        },
        backgroundPosition: theme => theme('positions'),
        objectPosition: theme => theme('positions'),

        gradients: theme => ({
            'blue-green': [theme('colors.blue.500'), theme('colors.green.500')],
            'purple-blue': [theme('colors.purple.500'), theme('colors.blue.500')],
            // ...
        }),
        corePlugins: {
            opacity: false,
        },
        fontFamily: {
            display: ['Gilroy', 'sans-serif'],
            body: ['Graphik', 'sans-serif'],
        },
        borderWidth: {
            default: '1px',
            '0': '0',
            '2': '2px',
            '4': '4px',
        },
        extend: {
            colors: {
                cyan: '#9cdbff',
            }
        },
        margin: {
            '96': '24rem',
            '128': '32rem',
        },
        transparent: 'transparent',
        colors: {
            indigo: '#5c6ac4',
            blue: '#007ace',
            red: '#de3618',
            colors: {
                'regal-blue': '#243c5a',
            }

        },
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
        },
        spacing: {
            '1': '8px',
            '2': '12px',
            '3': '16px',
            '4': '24px',
            '5': '32px',
            '6': '48px',

            sm: '8px',
            md: '12px',
            lg: '16px',
            xl: '24px',

            '72': '18rem',
            '84': '21rem',
            '96': '24rem',

            px: '1px',
            '0': '0',
            '1': '0.25rem',
            '2': '0.5rem',
            '3': '0.75rem',
            '4': '1rem',
            '5': '1.25rem',
            '6': '1.5rem',
            '8': '2rem',
            '10': '2.5rem',
            '12': '3rem',
            '16': '4rem',
            '20': '5rem',
            '24': '6rem',
            '32': '8rem',
            '40': '10rem',
            '48': '12rem',
            '56': '14rem',
            '64': '16rem',
        },
        borderRadius: {
            'none': '0',
            'sm': '.125rem',
            default: '.25rem',
            'lg': '.5rem',
            'full': '9999px',
        },
        opacity: {
            '0': '0',
            '20': '0.2',
            '40': '0.4',
            '60': '0.6',
            '80': '0.8',
            '100': '1',
        },
        extend: {
            // Adds a new breakpoint in addition to the default breakpoints
            screens: {
                '2xl': '1440px',
            }
        },
        variants: {
            appearance: ['responsive'],
            // ...
            borderColor: ['responsive', 'hover', 'focus'],
            // ...
            outline: ['responsive', 'focus'],
            // ...
            zIndex: ['responsive'],
            opacity: ['responsive', 'hover']
        },
        backgroundColor: ['active'],
        backgroundColor: ({ after }) => after(['active'], 'hover'),
        backgroundColor: ({ before }) => before(['active']),
    }
}
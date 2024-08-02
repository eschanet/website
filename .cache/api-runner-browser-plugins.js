module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Eric Schanet's personal website and blog","short_name":"Eric Schanet","description":"This is Eric Schanet's personal website and blog.","lang":"en","display":"standalone","icon":"src/images/favicon/android-chrome-512x512.png","start_url":"/","background_color":"#663399","theme_color":"#fff","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"4836476e678b6e22b96d70f5d4585f7c"},
    },{
      plugin: require('../node_modules/gatsby-plugin-image/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Eric Schanet's personal website and blog","short_name":"Eric Schanet","start_url":"/","background_color":"#F4F4F4","theme_color":"#FFFFFF","display":"minimal-ui","icon":"src/images/favicon.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"4836476e678b6e22b96d70f5d4585f7c"},
    },{
      plugin: require('../node_modules/gatsby-plugin-gatsby-cloud/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-mdx/gatsby-browser.js'),
      options: {"plugins":[],"extensions":[".mdx",".md"],"defaultLayouts":{},"gatsbyRemarkPlugins":[],"lessBabel":false,"remarkPlugins":[],"rehypePlugins":[],"mediaTypes":["text/markdown","text/x-markdown"],"root":"/Users/ericschanet/Documents/projects/eschanet.com_gatsby/personal-website"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]

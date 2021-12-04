module.exports = {
    css: {
      loaderOptions: {
        sass: {
          additionalData: `
              @import "@/scss/_variables.scss";
              @import "node_modules/bootstrap/scss/bootstrap.scss";
            `,
        },
      },
    },
}
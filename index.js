module.exports = {
    Import: function(module) {
        try {
            require(module)

            if (module.includes('/')) {
                console.log('\x1b[31mError: Failed to import \'' + module + '\':')
                console.log('\x1b[31m')
                console.log('\x1b[31mRequire stack:')
                console.log('\x1b[31mof ' + require('randomstring').generate({ length: 10, charset: '1234567890' }) + ' bytes.')
                console.log('\x1b[31mof a scraped bytes.')
                console.log('\x1b[31m')
                console.log('\x1b[31mMore Information:')
                console.log('\x1b[31mreason, Module is a file and cannot be imported')
                console.log('\x1b[31mmore information, none')
            }
        } catch (error) {
            console.log('\x1b[31mError: Failed to import \'' + module + '\':')
            console.log('\x1b[31m')
            console.log('\x1b[31mRequire stack:')
            console.log('\x1b[31mof ' + require('randomstring').generate({ length: 10, charset: '1234567890' }) + ' bytes.')
            console.log('\x1b[31mof a scraped bytes.')
            console.log('\x1b[31m')
            console.log('\x1b[31mMore Information:')
            console.log('\x1b[31mreason, Module is not found and failed to import')
            console.log('\x1b[31mmore information, none')
        }
    },

    Export: function(module) {
        console.log('\x1b[31mError: Failed to export \'' + module + '\':')
            console.log('\x1b[31m')
            console.log('\x1b[31mRequire stack:')
            console.log('\x1b[31mof ' + require('randomstring').generate({ length: 10, charset: '1234567890' }) + ' bytes.')
            console.log('\x1b[31mof a scraped bytes.')
            console.log('\x1b[31m')
            console.log('\x1b[31mMore Information:')
            console.log('\x1b[31mreason, use the Import() function instead')
            console.log('\x1b[31mmore information, none')
    },

    If: function(value, returnBack) {
        if (value) returnBack
    }
}
